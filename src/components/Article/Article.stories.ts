import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Article from "./Article";

const meta: Meta<typeof Article> = {
    component: Article,
};
export default meta;

export const Default: StoryObj = {
    args: {
        content: `<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉</p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。</p><p>入稿したコン テンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。</p><p>👇まずはここをクリックします。</p><figure><img src="https://images.microcms-assets.io/assets/4935db0782934151938663febcbc50d5/ff1f7df6153c425092154d35a475bb6b/blog-template.png" alt="" width="1200" height="630"></figure><p>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。</p><figure><img src="https://images.microcms-assets.io/assets/4935db0782934151938663febcbc50d5/46a2fdfa781a4f05a457b138992ccea5/blog-template-description2.png" alt="" width="2492" height="1648"></figure><p>この記事の内容がAPIで取得できていることがわかります。</p><figure><img src="https://images.microcms-assets.io/assets/4935db0782934151938663febcbc50d5/e0dd5f22bb324b8f90bbfaa9186b68f6/blog-template-description1.png" alt="" width="2490" height="1652"></figure><h2 id="h88398f2fb7">次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に 、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するた め、お好きな言語・フレームワークで画面を構築できます。</p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer nofollow"><u>JavaScript SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer nofollow"><u>Nuxt SDK</u></a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer nofollow"><u>Gatsby SDK</u></a></li></ul><p>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer nofollow"><u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u></a>もございます。</p><p>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br>サポート窓口：<a href="mailto:support@microcms.io">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge"><u>https://help.microcms.io/ja/knowledge</u></a></p>`,
    },
};
