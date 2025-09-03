"use client";

import parse, { DOMNode, Element, Text, domToReact } from "html-react-parser";
import { Typography, Link } from "@mui/material";
import React from "react";
import Image from "next/image";

type ArticleBodyProps = {
  html: string;
};

const ArticleBody = ({ html }: ArticleBodyProps) => {
  return (
    <>
      {parse(html, {
        replace: (domNode: DOMNode) => {
          if (!(domNode instanceof Element)) return;

          const children = (domNode.children as DOMNode[])
            .filter((c): c is Element | Text => c.type === "tag" || c.type === "text")
            .map((c, index) =>
              c.type === "text" ? (
                c.data
              ) : (
                <React.Fragment key={index}>{domToReact([c])}</React.Fragment>
              )
            );

          switch (domNode.name) {
            case "h1":
              return (
                <Typography component="h1" variant="h4" gutterBottom>
                  {children}
                </Typography>
              );
            case "h2":
              return (
                <Typography component="h2" variant="h5" gutterBottom>
                  {children}
                </Typography>
              );
            case "h3":
              return (
                <Typography component="h3" variant="h6" gutterBottom>
                  {children}
                </Typography>
              );
            case "h4":
              return (
                <Typography component="h4" variant="subtitle1" gutterBottom>
                  {children}
                </Typography>
              );
            case "h5":
              return (
                <Typography component="h5" variant="subtitle2" gutterBottom>
                  {children}
                </Typography>
              );
            case "p":
              return (
                <Typography component="p" sx={{ marginBottom: "16px" }}>
                  {children}
                </Typography>
              );
            case "a":
              return (
                <Link
                  href={domNode.attribs.href}
                  target={domNode.attribs.target || "_self"}
                  rel={domNode.attribs.target === "_blank" ? "noopener" : undefined}
                >
                  {children}
                </Link>
              );
            case "img": {
              const width = domNode.attribs.width ? Number(domNode.attribs.width) : undefined;
              const height = domNode.attribs.height ? Number(domNode.attribs.height) : undefined;
              return (
                <Image
                  src={domNode.attribs.src}
                  alt={domNode.attribs.alt || ""}
                  width={width}
                  height={height}
                  style={{ marginBottom: "0.5rem" }}
                />
              );
            }
            default:
              return undefined;
          }
        },
      })}
    </>
  );
};

export default ArticleBody;
