'use client';

import { Breadcrumbs, Link, Typography } from '@mui/material';

type Link = { href: string; label: string };

type CustomBreadcrumbsProps = {
  links: { href: string; label: string }[];
  currentLabel?: string;
};

const CustomBreadcrumbs = ({ links, currentLabel }: CustomBreadcrumbsProps) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {links.map((link: Link, index) => (
        <Link key={index} href={link.href} underline="hover" color="inherit">
          {link.label}
        </Link>
      ))}

      {currentLabel && (
        <Typography sx={{ color: 'text.primary' }}>{currentLabel}</Typography>
      )}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
