# Next.js + microCMS ブログ

このプロジェクトは **Next.js** と **microCMS** を使用して作られた学習用のブログサイトです。
microCMS で記事を管理し、Next.js 側で取得して表示します。

## 環境変数

`.env.sample` を参考に `.env` ファイルを作成してください。

```env
MICROCMS_API_KEY=xxxxx
MICROCMS_SERVICE_DOMAIN=xxxxx
```

## 開発

```bash
# 依存関係インストール
npm install
# または
yarn install

# 開発サーバー起動（Turbopack 使用）
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスして確認できます。

## ビルド・本番起動

```bash
yarn build
yarn start
```

## Storybook（コンポーネント確認用）

```bash
yarn storybook       # 開発用
```

## ディレクトリ構成（概要）

- `public` ・・・ 静的ファイル
- `src/app` ・・・ ページやルーティング関連
- `src/components` ・・・ UI コンポーネント
  - `Article` / `ArticleTitle` / `CustomBreadcrumbs` / `PageLayout`
- `lib` ・・・ API やユーティリティ関数
