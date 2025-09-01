import { getArticles } from "@/lib/microcms";
import Link from "next/link";

export default async function HomePage() {
    const articles = await getArticles();

    return (
        <main>
            <h1>ブログ一覧</h1>
            <ul>
                {articles.map((a: any) => (
                    <li key={a.id}>
                        <Link href={`/articles/${a.id}`}>{a.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}