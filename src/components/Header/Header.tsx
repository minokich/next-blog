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
import { useGetMeQuery } from '@/generated/graphql';

const links = [
  { href: '/about', label: 'ABOUT' },
  { href: '/articles', label: 'BLOGS' },
  { href: '/profile', label: 'PROFILE' },
  { href: '/skills', label: 'SKILLS' },
  { href: '/playground', label: 'PLAYGROUND' },
];

const Header = () => {
  const { data, loading, error } = useGetMeQuery();
  return (
    <AppBar position="static">
      <Container maxWidth="md">
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
          {loading && <></>}

          {!loading && !error && data?.me ? (
            <Button
              variant="text"
              href={'/apollo/profile'}
              color="info"
              size="large"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {data.me.name}
            </Button>
          ) : (
            <Button
              variant="text"
              href={'/apollo'}
              color="info"
              size="large"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              LOGIN
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
