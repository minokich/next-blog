import { Meta, StoryObj } from '@storybook/nextjs-vite';
import CatsSlideshow from './CatsSlideshow';

const meta: Meta<typeof CatsSlideshow> = {
  component: CatsSlideshow,
};
export default meta;

export const Default: StoryObj = {
  args: {},
};
