import type { Meta, StoryObj } from "@storybook/react";
import PageLayout from "./PageLayout";

const meta: Meta<typeof PageLayout> = {
    title: "Components/PageLayout",
    component: PageLayout,
};
export default meta;

type Story = StoryObj<typeof PageLayout>;

export const Default: Story = {
    args: {
        children: (
            <div style={{ backgroundColor: "gray", width: "100%", height: "500px" }}>
                backgroundColor: "gray", width: "100%", height: "100%"
            </div>
        ),
    },
};