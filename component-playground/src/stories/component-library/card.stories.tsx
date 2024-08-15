import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../../components/component-library/Card/Card";

const meta: Meta<typeof Card> = {
  title: "Component Library/Card",
  component: Card,
  argTypes: {
    variant: {
      options: ["default", "secondary", "transparent"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    variant: "default",
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Main: Story = {
  render: args => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/4">
        <Card {...args}>
          <Card.Header>
            <Card.Title>Title</Card.Title>
            <Card.Description>Some Description</Card.Description>
          </Card.Header>
          <Card.Body>This is some card content</Card.Body>
          <Card.Footer>This is the footer</Card.Footer>
        </Card>
      </div>
    </div>
  ),
};
