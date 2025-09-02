
import { getArticle } from "@/lib/microcms";
import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "next/image";
import Link from '@mui/material/Link';

import Article from "@/components/Article/Article";
import PageLayout from "@/components/PageLayout/PageLayout";

export default async function ArticlePage({ params }: { params: { id: string } }) {

    const { id } = await params;
    const article = await getArticle(id);

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href={"/"}>Top</Link>
                <Link href={"/articles"}>記事一覧</Link>
                <Typography sx={{ color: 'text.primary' }}>{article.title}</Typography>
            </Breadcrumbs>
            <PageLayout>
                <h1>{article.title}</h1>
                {article.eyecatch && (
                    <Image
                        src={article.eyecatch.url}
                        alt={article.title}
                        width={800}
                        height={400}
                    />
                )}
                <Article content={article.content} />
            </PageLayout>
        </>
    );
}