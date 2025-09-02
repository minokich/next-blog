'use client';

import styled from "styled-components";

type ArticleProps = {
    content: string
}

const Article = ({ content }: ArticleProps) => {
    const ArticleWrapper = styled.div`
        width: 100%;

        /* 画像をはみ出さないようにする */
        img {
            max-width: calc(100% - 40px);
            height: auto;
            display: block;
        }

        /* figure を整える */
        figure {
            display: flex;
            margin: 1.5rem 0;
            text-align: center;
            align-items: center;
            justify-content: center;
        }
    `;

    return (
        <ArticleWrapper dangerouslySetInnerHTML={{ __html: content }} />
    );
}

export default Article;