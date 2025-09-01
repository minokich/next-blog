import { getArticle } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";

export default async function ArticlePage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const article = await getArticle(id);

    return (
        <article>
            <Link href={"/"}>Top</Link> <Link href={"/articles"}>記事一覧</Link>
            <h1>{article.title}</h1>
            {article.eyecatch && (
                <Image
                    src={article.eyecatch.url}
                    alt={article.title}
                    width={800}
                    height={400}
                />
            )}
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
    );
}