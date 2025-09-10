'use client';

import {
  Box,
  LinearProgress,
  Typography,
  LinearProgressProps,
} from '@mui/material';
import { useEffect, useState } from 'react';

const ExampleLinearProgressWithLabel = (props?: LinearProgressProps) => {
  const [progress, setProgress] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const num = prevProgress + Math.floor(Math.random() * 10);
        return num >= 100 ? 10 : num;
      });
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={progress} {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >{`${Math.round(progress)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default ExampleLinearProgressWithLabel;
