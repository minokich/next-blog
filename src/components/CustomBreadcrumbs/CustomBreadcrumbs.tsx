
'use client';

import { Breadcrumbs, Link, Typography } from "@mui/material";

type Link = { href: string; label: string };

type CustomBreadcrumbsProps = {
    links: { href: string; label: string }[]
    curreentLabel?: string;
};

const CustomBreadcrumbs = ({ links, curreentLabel }: CustomBreadcrumbsProps) => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {links.map((link: Link) => (
                <Link href={link.href}>{link.label}</Link>
            ))}

            {curreentLabel && (
                <Typography sx={{ color: 'text.primary' }}>{curreentLabel}</Typography>
            )}
        </Breadcrumbs>
    );
}

export default CustomBreadcrumbs;