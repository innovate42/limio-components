import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../../../components/component-library/Input/Input';

const meta: Meta<typeof Input> = {
  title: "Component Library/Input",
  component: Input,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: {
      options: ["default", "small"],
      control: { type: 'inline-radio' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    type: {
      options: ["text", "number", "search"],
      control: { type: 'inline-radio' }
    }
  },
  args: {
    size: "default",
    disabled: false
  }
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Main: Story = {
  args: {
    placeholder: "Placeholder",
    type: "text"
  }
}