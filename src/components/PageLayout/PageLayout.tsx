'use client';

import styled from "styled-components";
import { ReactNode } from "react";

type PageLayoutProps = {
    children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
    const PageLayout = styled.div`
        max-width: 800px;
        margin: 0 auto;
        padding: 1.5rem;
        line-height: 1.6;
    `;

    return (
        <PageLayout>
            {children}
        </PageLayout>
    );
}

export default PageLayout;