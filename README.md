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
npm run build
npm run start
```

## コード品質チェック

```bash
npm run lint
```

## Storybook（コンポーネント確認用）

```bash
npm run storybook       # 開発用
npm run build-storybook # ビルド
```

## ディレクトリ構成（概要）

- `.storybook` ・・・ Storybook 設定
- `public` ・・・ 静的ファイル
- `src/app` ・・・ ページやルーティング関連
- `src/components` ・・・ UI コンポーネント
  - `Article` / `ArticleTitle` / `CustomBreadcrumbs` / `PageLayout`
- `lib` ・・・ API やユーティリティ関数
- 環境・設定ファイル（`.env.local`, `.eslintrc.json`, `tsconfig.json` など）

詳細なファイル一覧は必要に応じてプロジェクト内で確認できます。
