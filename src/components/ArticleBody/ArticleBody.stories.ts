import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ArticleBody from './ArticleBody';

const meta: Meta<typeof ArticleBody> = {
  component: ArticleBody,
};
export default meta;

export const Default: StoryObj = {
  args: {
    html: `
            <h1 id="ha879678dfe">見出し1</h1><h2 id="had7ce3f1cb">見出し2</h2><h3 id="h594976e74f">見出し3</h3><h4 id="h88e8c523a3">見出し4</h4><h5 id="h169558c650">見出し5</h5><p>段落</p><p><strong>太字</strong></p><p><em>斜体</em></p><p><u>下線</u></p><p><s>打ち消し線</s></p><p><code>const code = &quot;kon na kanji&quot;</code></p><p><span style="color: #ff0000">文</span><span style="color: #00ff00">字</span><span style="color: #0000ff">色</span></p><p style="text-align: center">中央揃え</p><p style="text-align: right">右揃え</p><p>左揃え(デフォルト)</p><hr><blockquote><p>引用</p></blockquote><div data-filename="hogehoge.ts"><pre><code class="language-typescript">const type CodeBlock = {
  code: string;
};

const codeBlocks:CodeBlock[] = getCodeBlocks();

codeBlocks.map((codeBlock) =&gt; {
  console.log(codeBlock.code)
});</code></pre></div><table><tbody><tr><th colspan="1" rowspan="1"><p>テーブル見出し1</p></th><th colspan="1" rowspan="1"><p>テーブル見出し2</p></th><th colspan="1" rowspan="1"><p>テーブル見出し3</p></th></tr><tr><td colspan="1" rowspan="1"><p>テーブル1-1</p></td><td colspan="1" rowspan="1"><p>テーブル2-1</p></td><td colspan="1" rowspan="1"><p>テーブル3-1</p></td></tr><tr><td colspan="1" rowspan="1"><p>テーブル1-2</p></td><td colspan="1" rowspan="1"><p>テーブル2-2</p></td><td colspan="1" rowspan="1"><p>テーブル3-2</p></td></tr></tbody></table><ul><li>リスト1</li><li>リスト2</li></ul><ol><li> 番号付きリスト1</li><li>番号付きリスト2</li></ol><p><a href="https://github.com/minokich/next-blog" target="_blank" rel="noopener noreferrer">リンク</a></p><figure><a href="https://github.com/minokich/next-blog" target="_blank" rel="noopener noreferrer nofollow"><img src="https://images.microcms-assets.io/assets/4935db0782934151938663febcbc50d5/814e1918a7524e9d8727f8801484c77d/61lGS8pkgvL._AC_SX679_.jpg?w=250&amp;h=228" alt="altテキスト" width="250" height="228"></a><figcaption>キャプション</figcaption></figure><p><a href="https://images.microcms-assets.io/assets/4935db0782934151938663febcbc50d5/ff1f7df6153c425092154d35a475bb6b/blog-template.png" target="_blank" data-embed-type="file" data-mime-type="image/png">blog-template.png</a></p><p></p><figure><img src="https://images.microcms-assets.io/assets/4935db0782934151938663febcbc50d5/46a2fdfa781a4f05a457b138992ccea5/blog-template-description2.png" alt="" width="2492" height="1648"></figure><p></p>
        `,
  },
};
