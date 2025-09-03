import { getArticles } from "@/lib/microcms";
import Link from "next/link";

type article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  };
};

export const revalidate = 60;

const ArticlesPage = async () => {
  const articles = await getArticles();

  return (
    <main>
      <h1>ブログ一覧</h1>
      <ul>
        {articles.map((a: article) => (
          <li key={a.id}>
            <Link href={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ArticlesPage;
