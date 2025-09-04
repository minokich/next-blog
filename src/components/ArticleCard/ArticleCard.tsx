'use client';

import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import NextLink from 'next/link';
import { Article } from '@/types/article'; // 事前に型定義を分けておくと便利

type Props = {
  article: Article;
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

            {/* TODO: サブタイトル（micro CMS側で定義を追加する） */}
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              ここにサブタイトルのダミーテキスト
            </Typography>
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ alignSelf: 'flex-end' }}
          >
            {new Date(article.publishedAt).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    </NextLink>
  );
};

export default ArticleCard;
