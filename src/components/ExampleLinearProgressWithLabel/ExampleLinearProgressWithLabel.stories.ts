import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExampleLinearProgressWithLabel from './ExampleLinearProgressWithLabel';
import { LinearProgressProps } from '@mui/material';

const meta: Meta<typeof ExampleLinearProgressWithLabel> = {
  component: ExampleLinearProgressWithLabel,
};
export default meta;

export const Default: StoryObj = {
  args: {
    color: 'primary',
  } satisfies Partial<LinearProgressProps>,
};
