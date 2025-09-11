import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExampleToDoList from './ExampleToDoList';

const meta: Meta<typeof ExampleToDoList> = {
  component: ExampleToDoList,
};
export default meta;

export const Default: StoryObj = {
  args: {},
};
