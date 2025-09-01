// src/app/layout.tsx
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export default Layout;