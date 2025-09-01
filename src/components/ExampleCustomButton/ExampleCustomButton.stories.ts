import { Meta, StoryObj } from '@storybook/nextjs-vite'
import ExampleCustomButton from "./ExampleCustomButton";

const meta: Meta<typeof ExampleCustomButton> = {
    component: ExampleCustomButton,
};
export default meta;

export const Default: StoryObj = {
    args: {
        label: "クリック",
        isActive: true
    },
};
