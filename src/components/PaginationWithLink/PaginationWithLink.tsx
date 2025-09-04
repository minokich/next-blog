'use client';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import NextLink from 'next/link';

type Props = {
  page: number;
  pageCount: number;
};

export default function PaginationWithLink({ page, pageCount }: Props) {
  return (
    <Pagination
      count={pageCount}
      page={page}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          component={NextLink}
          href={`/articles/page/${item.page}`}
          {...item}
        />
      )}
    />
  );
}
