import { Meta, StoryObj } from '@storybook/nextjs-vite';
import CustomBreadcrumbs from './CustomBreadcrumbs';

const meta: Meta<typeof CustomBreadcrumbs> = {
  component: CustomBreadcrumbs,
};
export default meta;

export const Default: StoryObj = {
  args: {
    links: [
      { href: '/', label: 'TOP' },
      { href: '/', label: '前のページ' },
    ],
    curreentLabel: '現在ページ',
  },
};
