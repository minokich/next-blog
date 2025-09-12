import { Meta, StoryObj } from '@storybook/nextjs-vite';
import CatImage from './CatImage';
import { CatImageType } from '@/types/CatImage';

const meta: Meta<typeof CatImage> = {
  component: CatImage,
};
export default meta;

const mockImage: CatImageType = {
  id: '1gu',
  url: 'https://cdn2.thecatapi.com/images/1gu.png',
  width: 768,
  height: 1024,
};

export const Default: StoryObj<typeof CatImage> = {
  args: {
    image: mockImage,
  },
};
