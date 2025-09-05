import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';

const Profile = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          bgcolor: 'grey.100',
          p: 4,
        }}
      >
        <Box
          component="img"
          src="/profile.png"
          alt="Profile"
          sx={{
            width: 160,
            height: 160,
            borderRadius: '50%',
            border: '4px solid #1976d2',
            boxShadow: 3,
            mb: 3,
          }}
        />

        <Typography variant="h2" gutterBottom>
          Hi, I’m Minokich 👋
        </Typography>
        <Typography variant="h5" gutterBottom color="text.secondary">
          フロントエンドエンジニア / Next.js・React が得意です
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton
            aria-label="GitHub"
            color="default"
            href="https://github.com/minokich"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            color="primary"
            href="https://x.com/_minokich"
            target="_blank"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          現在、フロントエンドエンジニアとして活動しており、Next.js、React、TypeScriptを中心に開発を行っています。
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            出身: 北海道 遠軽町
          </Typography>
          <Box
            component={'div'}
            sx={{
              width: '216px',
              border: '1px solid #bbbbbb',
              padding: 1,
              mt: 1,
            }}
          >
            <Image
              src="/hokkaidou.png"
              alt="北海道(遠軽町)"
              width="200"
              height="136"
            />
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            趣味: ゲーム 🎮
          </Typography>
        </Box>
      </Container>

      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Works
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((work) => (
            <Grid key={work} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardMedia
                  component="img"
                  height="160"
                  image={`https://picsum.photos/400/200?random=${work}`}
                  alt={`Work ${work}`}
                />
                <CardContent>
                  <Typography variant="h6">Project {work}</Typography>
                  <Typography variant="body2">
                    サンプルプロジェクトの説明文です。
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
