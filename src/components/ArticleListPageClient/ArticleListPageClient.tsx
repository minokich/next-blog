'use client';

import { useState } from 'react';
import { Link } from '@mui/material';
import NextLink from 'next/link';
import PaginationWithLink from '@/components/PaginationWithLink/PaginationWithLink';

const displayNum = 10;

type Article = {
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

type Props = {
  initialArticles: Article[];
  page: number;
};

const ArticleListPageClient = ({ initialArticles, page }: Props) => {
  const [articles] = useState(initialArticles);

  const pageCount = Math.ceil(articles.length / displayNum);
  const start = (page - 1) * displayNum;
  const end = page * displayNum;
  const displayedItems = articles.slice(start, end);

  return (
    <div>
      <ul>
        {displayedItems.map((a) => (
          <li key={a.id}>
            <Link component={NextLink} href={`/articles/${a.id}`}>
              {a.title}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <PaginationWithLink page={page} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default ArticleListPageClient;
