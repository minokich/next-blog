// src/app/skills/page.tsx
'use client';

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Rating,
} from '@mui/material';
import { Code, Brush, Storage } from '@mui/icons-material';

const skills = [
  { name: 'React / Next.js', level: 4.5, icon: <Code /> },
  { name: 'Vue / Nuxt.js', level: 3, icon: <Code /> },
  { name: 'TypeScript', level: 4, icon: <Code /> },
  { name: 'MUI / Tailwind', level: 3.5, icon: <Brush /> },
  { name: 'Node.js / API', level: 2.5, icon: <Storage /> },
];

const SkillsPage = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
                >
                  {skill.icon}
                  <Typography variant="h6">{skill.name}</Typography>
                </Box>
                <Rating
                  name={`rating-${index}`}
                  value={skill.level}
                  precision={0.5}
                  readOnly
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default SkillsPage;
