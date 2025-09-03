'use client';

import parse, { DOMNode, Element, Text, domToReact } from 'html-react-parser';
import {
  Typography,
  Link,
  Divider,
  TableContainer,
  Table,
  Paper,
  TableCell,
  TableRow,
  TableBody,
} from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';
import Image from 'next/image';

type ArticleBodyProps = {
  html: string;
};

// MUI未対応タグのstyled-components
const Blockquote = styled.blockquote`
  border-left: 4px solid #ccc;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #555;
`;

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 1rem;
  overflow-x: auto;
  border-radius: 4px;
`;

const InlineCode = styled.code`
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 16px;
  margin-bottom: 16px;
`;

const Figure = styled.figure`
  text-align: center;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;

  img {
    max-width: calc(100% - 40px);
    height: auto;
    display: block;
  }
`;

const FigCaption = styled.figcaption`
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
`;

const ColoredSpan = styled.span<{ color?: string; textAlign?: string }>`
  color: ${(props) => props.color || 'inherit'};
  text-align: ${(props) => props.textAlign || 'left'};
  display: block;
`;

//TODO: コードがバカ長いし、絶対バグあるからmarkdownとかに変えたい
const ArticleBody = ({ html }: ArticleBodyProps) => {
  return (
    <>
      {parse(html, {
        replace: (domNode: DOMNode) => {
          if (!(domNode instanceof Element)) return;

          const children = (domNode.children as DOMNode[])
            .filter(
              (c): c is Element | Text => c.type === 'tag' || c.type === 'text',
            )
            .map((c, index) =>
              c.type === 'text' ? (
                c.data
              ) : (
                <React.Fragment key={index}>{domToReact([c])}</React.Fragment>
              ),
            );

          switch (domNode.name) {
            case 'h1':
              return (
                <Typography component="h1" variant="h4" gutterBottom>
                  {children}
                </Typography>
              );
            case 'h2':
              return (
                <Typography component="h2" variant="h5" gutterBottom>
                  {children}
                </Typography>
              );
            case 'h3':
              return (
                <Typography component="h3" variant="h6" gutterBottom>
                  {children}
                </Typography>
              );
            case 'h4':
              return (
                <Typography component="h4" variant="subtitle1" gutterBottom>
                  {children}
                </Typography>
              );
            case 'h5':
              return (
                <Typography component="h5" variant="subtitle2" gutterBottom>
                  {children}
                </Typography>
              );
            case 'p': {
              const onlyCodeChild =
                domNode.children.length === 1 &&
                domNode.children[0].type === 'tag' &&
                (domNode.children[0] as Element).name === 'code';

              if (onlyCodeChild) {
                const codeText = (
                  (domNode.children[0] as Element).children as DOMNode[]
                )
                  .filter((c): c is Text => c.type === 'text')
                  .map((c) => c.data)
                  .join('');
                return (
                  <Typography
                    component="p"
                    sx={{ marginBottom: '16px' }}
                    key={domNode.attribs?.id || Math.random()}
                  >
                    <InlineCode>{codeText}</InlineCode>
                  </Typography>
                );
              }

              const children = (domNode.children as (Element | Text)[])
                .filter(
                  (c): c is Element | Text =>
                    c.type === 'tag' || c.type === 'text',
                )
                .map((c, index) =>
                  c.type === 'text' ? (
                    c.data
                  ) : (
                    <React.Fragment key={index}>
                      {domToReact([c])}
                    </React.Fragment>
                  ),
                );

              return (
                <Typography component="p" sx={{ marginBottom: '16px' }}>
                  {children}
                </Typography>
              );
            }
            case 'strong':
              return (
                <Typography component="span" fontWeight="bold">
                  {children}
                </Typography>
              );
            case 'em':
              return (
                <Typography component="span" fontStyle="italic">
                  {children}
                </Typography>
              );
            case 'u':
              return (
                <Typography
                  component="span"
                  sx={{ textDecoration: 'underline' }}
                >
                  {children}
                </Typography>
              );
            case 's':
              return (
                <Typography
                  component="span"
                  sx={{ textDecoration: 'line-through' }}
                >
                  {children}
                </Typography>
              );
            case 'pre':
              return <CodeBlock>{children}</CodeBlock>;
            case 'span': {
              const color = domNode.attribs?.style?.match(
                /color:\s*(#[0-9a-fA-F]{3,6})/,
              )?.[1];
              const textAlign = domNode.attribs?.style?.match(
                /text-align:\s*(left|center|right)/,
              )?.[1];
              return (
                <ColoredSpan color={color} textAlign={textAlign}>
                  {children}
                </ColoredSpan>
              );
            }
            case 'a':
              return (
                <Link
                  href={domNode.attribs.href}
                  target={domNode.attribs.target || '_self'}
                  rel={
                    domNode.attribs.target === '_blank' ? 'noopener' : undefined
                  }
                >
                  {children}
                </Link>
              );
            case 'hr':
              return <Divider sx={{ my: 2 }} />;
            case 'blockquote':
              return <Blockquote>{children}</Blockquote>;
            case 'figure':
              return <Figure>{children}</Figure>;
            case 'figcaption':
              return <FigCaption>{children}</FigCaption>;
            case 'img': {
              const width = domNode.attribs.width
                ? Number(domNode.attribs.width)
                : undefined;
              const height = domNode.attribs.height
                ? Number(domNode.attribs.height)
                : undefined;
              return (
                <Image
                  src={domNode.attribs.src}
                  alt={domNode.attribs.alt || ''}
                  width={width}
                  height={height}
                  style={{ marginBottom: '0.5rem' }}
                />
              );
            }
            case 'table': {
              const tbody = domNode.children.find(
                (c) => c instanceof Element && c.name === 'tbody',
              ) as Element | undefined;

              const rows = tbody
                ? (tbody.children.filter(
                    (c) => c instanceof Element && c.name === 'tr',
                  ) as Element[])
                : [];

              return (
                <TableContainer component={Paper} sx={{ my: 2 }}>
                  <Table>
                    <TableBody>
                      {rows.map((tr, i) => {
                        const cells = tr.children.filter(
                          (c) =>
                            c instanceof Element &&
                            ['td', 'th'].includes(c.name),
                        ) as Element[];

                        return (
                          <TableRow key={i}>
                            {cells.map((cell, j) => {
                              const cellChildren = domToReact(
                                cell.children as DOMNode[],
                              );
                              if (cell.name === 'th') {
                                return (
                                  <TableCell
                                    key={j}
                                    sx={{
                                      fontWeight: 'bold',
                                      border: '1px solid #ddd',
                                    }}
                                  >
                                    {cellChildren}
                                  </TableCell>
                                );
                              }
                              return (
                                <TableCell
                                  key={j}
                                  sx={{ border: '1px solid #ddd' }}
                                >
                                  {cellChildren}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }
            // リストの置換は難しい上、やっても大した変化がないのでやめる
            // case 'ul':
            // case 'ol':
            // case 'li':
            default:
              return undefined;
          }
        },
      })}
    </>
  );
};

export default ArticleBody;
