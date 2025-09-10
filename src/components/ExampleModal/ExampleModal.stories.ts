import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExampleModal from './ExampleModal';

const meta: Meta<typeof ExampleModal> = {
  component: ExampleModal,
};
export default meta;

export const Default: StoryObj = {
  args: {},
};
