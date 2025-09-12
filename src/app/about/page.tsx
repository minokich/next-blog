'use client';

import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const AboutPage = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        About This Site
      </Typography>
      <Typography paragraph>
        このサイトは、フロントエンドの学習ログとブログを兼ねた個人サイトです。
        実装実験や技術メモをまとめており、ポートフォリオも兼ねています。
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">使用技術</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Next.js 14 (App Router)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="TypeScript" />
          </ListItem>
          <ListItem>
            <ListItemText primary="MUI (Material UI)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="SSG (Blog ページ)" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default AboutPage;
