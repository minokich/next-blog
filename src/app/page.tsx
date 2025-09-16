// pages/index.tsx
import { ArticleType } from '@/types/Article';
import { getLatestArticles } from '@/lib/microcms';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
};

const TopPage = async () => {
  const latestBlogs: ArticleType[] = await getLatestArticles();
  return (
    <>
      <Box
        sx={{
          py: 10,
          textAlign: 'center',
          background: 'linear-gradient(120deg, #f0f4ff, #d9e6ff)',
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          雑TOPページ
        </Typography>
        <Typography variant="h6" color="text.secondary">
          なんか変えたいけど思いつかん
        </Typography>
      </Box>

      <Box sx={{ py: 8, px: 4 }}>
        <Typography variant="h4" gutterBottom>
          Latest Blog
        </Typography>
        <Grid container spacing={3}>
          {latestBlogs.map((blog) => (
            <Grid key={blog.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardActionArea href={`/articles/${blog.id}`}>
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      pt: 2,
                      pb: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {format(new Date(blog.createdAt), 'yyyy/MM/dd')}
                    </Typography>
                    <Typography variant="body1">{blog.summary}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default TopPage;
