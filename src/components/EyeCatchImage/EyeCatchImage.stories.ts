import { Meta, StoryObj } from '@storybook/nextjs-vite';
import EyeCatchImage from './EyeCatchImage';

const meta: Meta<typeof EyeCatchImage> = {
  component: EyeCatchImage,
};
export default meta;

export const Default: StoryObj = {
  args: {
    src: 'https://placehold.jp/800x400.png',
    alt: 'ダミー画像',
  },
};
