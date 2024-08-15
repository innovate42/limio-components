import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../../../components/component-library/Text/Text';

const meta: Meta<typeof Text> = {
  title: "Component Library/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Headings: Story = {
  render: () => (
    <div className="flex flex-col gap-y-4">
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
    </div>
  )
}

export const Body: Story = {
  render: () => (
    <div className="flex flex-col gap-y-4">
      <Text>Default Body Text</Text>
      <Text size="lg" weight="regular">Large Body Text</Text>
      <Text size="lg" weight="emphasised">Emphasised Large Body Text</Text>
      <Text size="md" weight="regular">Medium Body Text</Text>
      <Text size="md" weight="emphasised">Emphasised Medium Body Text</Text>
      <Text size="sm" weight="regular">Small Body Text</Text>
      <Text size="sm" weight="emphasised">Emphasised Small Body Text</Text>
      <Text variant="label">A label</Text>
    </div>
  )
}