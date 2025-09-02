import { Meta, StoryObj } from '@storybook/nextjs-vite'
import ArticleTitle from "./ArticleTitle";

const meta: Meta<typeof ArticleTitle> = {
    component: ArticleTitle,
};
export default meta;

export const Default: StoryObj = {
    args: {
        children: `記事の見出しああああああ`,
    },
};
