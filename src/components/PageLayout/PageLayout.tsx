'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

const StyledPageLayout = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem;
  line-height: 1.6;
`;

const PageLayout = ({ children }: PageLayoutProps) => {
  return <StyledPageLayout>{children}</StyledPageLayout>;
};

export default PageLayout;
