import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
};
export default meta;

export const Default: StoryObj = {
  args: {},
};
