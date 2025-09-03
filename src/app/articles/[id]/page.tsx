import { getArticle, getArticles } from "@/lib/microcms";
import Image from "next/image";

import Article from "@/components/Article/Article";
import PageLayout from "@/components/PageLayout/PageLayout";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs/CustomBreadcrumbs";
import ArticleTitle from "@/components/ArticleTitle/ArticleTitle";

type ArticlePageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article: { id: string }) => ({
    id: article.id,
  }));
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { id } = await params;
  const article = await getArticle(id);
  const links = [
    { href: "/", label: "TOP" },
    { href: "articles", label: "記事一覧" },
  ];

  return (
    <>
      <CustomBreadcrumbs links={links} curreentLabel={article.title} />
      <PageLayout>
        <ArticleTitle>{article.title}</ArticleTitle>
        {article.eyecatch && (
          <Image src={article.eyecatch.url} alt={article.title} width={800} height={400} />
        )}
        <Article content={article.content} />
      </PageLayout>
    </>
  );
};

export default ArticlePage;
