import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExampleDragDropList from './ExampleDragDropList';

const meta: Meta<typeof ExampleDragDropList> = {
  component: ExampleDragDropList,
  argTypes: {
    layout: {
      control: {
        type: 'radio',
        options: ['vertical', 'horizontal', 'grid'],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const layout = context.args.layout;

      // width指定しないとgridがhorizontalと変わらないのでlayoutに応じて横幅を変更
      let width = '200px';
      if (layout === 'horizontal') width = '800px';
      if (layout === 'grid') width = '300px';

      return (
        <div
          style={{
            width,
            border: '1px solid #ddd',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};
export default meta;

export const Default: StoryObj<typeof ExampleDragDropList> = {
  args: {
    layout: 'vertical',
  },
};
