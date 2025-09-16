import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExampleWeather from './ExampleWeather';

const meta: Meta<typeof ExampleWeather> = {
  component: ExampleWeather,
};
export default meta;

export const Default: StoryObj = {
  args: {},
};
