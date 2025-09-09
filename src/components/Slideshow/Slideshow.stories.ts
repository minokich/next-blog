import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Slideshow from './Slideshow';

const meta: Meta<typeof Slideshow> = {
  component: Slideshow,
};
export default meta;

export const Default: StoryObj = {
  args: {},
};
