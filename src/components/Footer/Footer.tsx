'use client';

import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'grey.200', p: 2, textAlign: 'center' }}>
      <Typography variant="body2">
        © 2025 Minoki Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
