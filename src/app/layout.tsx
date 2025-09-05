import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { ReactNode } from 'react';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          <Header />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default Layout;
