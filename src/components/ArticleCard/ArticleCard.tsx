'use client';

import { ArticleType } from '@/types/Article';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import NextLink from 'next/link';
import { format } from 'date-fns';

type Props = {
  article: ArticleType;
};

const ArticleCard = ({ article }: Props) => {
  return (
    <NextLink
      href={`/articles/${article.id}`}
      style={{ textDecoration: 'none', width: '100%', maxWidth: 900 }}
    >
      <Card
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: 900,
          height: 220,
          mb: 2,
          cursor: 'pointer',
        }}
      >
        {article.eyecatch ? (
          <CardMedia
            component="img"
            image={article.eyecatch.url}
            alt={article.title}
            sx={{ width: 200, objectFit: 'cover' }}
          />
        ) : (
          <Box sx={{ width: 200, backgroundColor: '#eee' }} />
        )}

        <CardContent
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="caption" color="text.secondary">
              {article.category.name}
            </Typography>

            <Typography variant="h6" color="error" sx={{ mt: 0.5 }}>
              {article.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {article.summary}
            </Typography>
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ alignSelf: 'flex-end' }}
          >
            {format(new Date(article.publishedAt), 'yyyy/MM/dd')}
          </Typography>
        </CardContent>
      </Card>
    </NextLink>
  );
};

export default ArticleCard;
