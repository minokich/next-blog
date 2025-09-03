'use client';

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import PigIcon from '@/components/icons/PigIcon';

const links = [
  { href: '/articles', label: 'BLOGS' },
  { href: '/profile', label: 'PROFILE' },
  { href: '/contact', label: 'CONTACT' },
];

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <PigIcon fontSize="large" sx={{ paddingRight: '8px' }} />
            minokich`s blog
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              gap: '8px',
              justifyContent: 'end',
            }}
          >
            {links.map((link, index) => (
              <Button
                key={index}
                variant="text"
                href={link.href}
                color="info"
                size="large"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
