'use client';

import { Typography } from "@mui/material";

type ArticleTitleProps = {
    titleText: string
}

const ArticleTitle = ({ titleText }: ArticleTitleProps) => {
    return (
        <Typography variant="h2" component="h2">{titleText}</Typography>
    );
};

export default ArticleTitle;