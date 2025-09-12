'use client';

import { useState } from 'react';
import PaginationWithLink from '@/components/PaginationWithLink/PaginationWithLink';
import ArticleCard from '@/components//ArticleCard/ArticleCard';
import styled from 'styled-components';
import { ArticleType } from '@/types/Article';

const displayNum = 10;

type Props = {
  initialArticles: ArticleType[];
  page: number;
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  align-items: center;
`;

const ArticleListPageClient = ({ initialArticles, page }: Props) => {
  const [articles] = useState(initialArticles);

  const pageCount = Math.ceil(articles.length / displayNum);
  const start = (page - 1) * displayNum;
  const end = page * displayNum;
  const displayedItems = articles.slice(start, end);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PaginationWithLink page={page} pageCount={pageCount} />
      </div>
      <CardWrapper>
        {displayedItems.map((a) => (
          <ArticleCard article={a} key={a.id} />
        ))}
      </CardWrapper>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <PaginationWithLink page={page} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default ArticleListPageClient;
