import ArticleListPageClient from '@/components/ArticleListPageClient/ArticleListPageClient';
import { getArticles } from '@/lib/microcms';

const displayNum = 10;

export async function generateStaticParams() {
  const articles = await getArticles();
  const pageCount = Math.ceil(articles.length / displayNum);

  return Array.from({ length: pageCount }).map((_, i) => ({
    page: (i + 1).toString(),
  }));
}

const Page = async ({ params }: { params: { page: string } }) => {
  const pageNumber = Number(params.page);
  const articles = await getArticles();

  return <ArticleListPageClient initialArticles={articles} page={pageNumber} />;
};

export default Page;
