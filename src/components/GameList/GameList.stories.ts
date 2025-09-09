import { Meta, StoryObj } from '@storybook/nextjs-vite';
import GameList from './GameList';

const meta: Meta<typeof GameList> = {
  component: GameList,
};
export default meta;

export const Default: StoryObj = {
  args: {},
};
