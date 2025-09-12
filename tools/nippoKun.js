#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// .env.local を読み込む関数
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return {};
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  const env = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...vals] = trimmed.split('=');
    env[key] = vals.join('=').trim();
  }
  return env;
}

const env = loadEnv();
const WEBHOOK_URL = env.NIPPO_WEBHOOK_URL;

if (!WEBHOOK_URL) {
  console.error('環境変数とれなかった');
  process.exit(1);
}

const nippoPath = path.join(process.cwd(), 'memo', 'nippo.txt');

function getTodayString() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `【${month}/${day}】`;
}

function checkDate(nippoText) {
  const dateMatch = nippoText.match(/【(\d+)\/(\d+)】/);
  if (!dateMatch) {
    console.error('日付なし');
    process.exit(1);
  }
  const nippoDate = `【${dateMatch[1]}/${dateMatch[2]}】`;
  const todayDate = getTodayString();
  if (nippoDate !== todayDate) {
    console.error(
      `日付が今日じゃない
      今日: ${todayDate}, 日報: ${nippoDate}。`,
    );
    process.exit(1);
  }
}

async function sendNippo(nippoText) {
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: nippoText }),
    });
    if (res.ok) {
      console.log('送信完了');
    } else {
      console.error('送信失敗', res.statusText);
      process.exit(1);
    }
  } catch (err) {
    console.error('送信中にエラー:', err);
    process.exit(1);
  }
}

// 送信確認
function askConfirmation(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase());
    });
  });
}

async function main() {
  if (!fs.existsSync(nippoPath)) {
    console.error('nippo.mdが存在しない:', nippoPath);
    process.exit(1);
  }

  const nippoText = fs.readFileSync(nippoPath, 'utf8');
  checkDate(nippoText);

  console.log('==================== 日報プレビュー ====================');
  console.log(nippoText);
  console.log('======================================================');

  const answer = await askConfirmation('おくって大丈夫ですか？ y/n: ');
  if (answer !== 'y') {
    console.log('送信を中止');
    process.exit(0);
  }

  await sendNippo(nippoText);
}

main();
