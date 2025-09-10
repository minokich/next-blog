import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExampleCardFlip from './ExampleCardFlip';

const meta: Meta<typeof ExampleCardFlip> = {
  component: ExampleCardFlip,
};
export default meta;

export const Default: StoryObj = {
  args: {
    spin: 1,
  },
};
