import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '../../../../components/component-library/Separator/Separator';
import { Card } from '../../../../components/component-library/Card/Card';

const meta: Meta<typeof Separator> = {
  title: "Component Library/Separator",
  component: Separator,
  argTypes: {
    size: {
      options: ["regular", "lg"],
      control: { type: 'inline-radio' }
    }
  },
  args: {
    size: "regular"
  },
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Main: Story = {
  render: (args) => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/4">
        <Separator {...args} />
      </div>
    </div>
  )
}

export const InPractice: Story = {
  render: (args) => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/4">
        <Card>
          <Card.Header>
            <Card.Title>A Card</Card.Title>
            <Card.Description>With body items separated</Card.Description>
          </Card.Header>
          <Card.Body>
            This is some card content
            <Separator {...args} />
            This is some more card content
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}