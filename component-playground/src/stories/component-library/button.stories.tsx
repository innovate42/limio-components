import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../../components/component-library/Button/Button';

const meta: Meta<typeof Button> = {
  title: "Component Library/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'danger', 'outline', 'secondary', 'text', 'link'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    asChild: {
      table: {
        disable: true
      }
    }
  },
  args: {
    variant: "primary",
    size: "default",
    disabled: false
  }
};
export default meta;
 
type Story = StoryObj<typeof Button>;

export const Main: Story = {
  args: {
    children: "Button",
  }
};

export const Flex: Story = {
  render: (args) => (<div className="flex p-6 w-1/4 rounded-md bg-gray-200-100 border"><Button {...args} /></div>),
  args: {
    children: "Wide Button",
    className: "w-full"
  },
}
