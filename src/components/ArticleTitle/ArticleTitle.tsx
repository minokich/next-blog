'use client';

import { Typography } from '@mui/material';

type ArticleTitleProps = {
  children: string;
};

const ArticleTitle = ({ children }: ArticleTitleProps) => {
  return (
    <Typography variant="h4" component="h1">
      {children}
    </Typography>
  );
};

export default ArticleTitle;
