import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { ReactNode } from 'react';
import './globals.css';
import { Box, Container } from '@mui/material';
import Providers from './providers';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <AppRouterCacheProvider>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Header />
              <Container
                maxWidth="lg"
                sx={{
                  flex: 1,
                  py: 4,
                }}
              >
                {children}
              </Container>
              <Footer />
            </Box>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
