import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExampleSlideshow from './ExampleSlideshow';

const meta: Meta<typeof ExampleSlideshow> = {
  component: ExampleSlideshow,
};
export default meta;

export const Default: StoryObj = {
  args: {},
};
