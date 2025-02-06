import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../../components/component-library/Text/Text";

const meta: Meta<typeof Text> = {
  title: "Component Library/Text",
  component: Text,
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
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
  ),
};

export const Body: Story = {
  render: () => (
    <div className="flex flex-col gap-y-4 text-center items-center">
      <Text>Default Body Text</Text>
      <Text size="lg" weight="regular">
        Large Body Text
      </Text>
      <Text size="lg" weight="emphasised">
        Emphasised Large Body Text
      </Text>
      <Text size="md" weight="regular">
        Medium Body Text
      </Text>
      <Text size="md" weight="emphasised">
        Emphasised Medium Body Text
      </Text>
      <Text size="sm" weight="regular">
        Small Body Text
      </Text>
      <Text size="sm" weight="emphasised">
        Emphasised Small Body Text
      </Text>
      <Text variant="label">A label</Text>
      <Text variant="label" className="text-destructive">
        A label with an error
      </Text>
      <div className="w-1/3 mt-3">
        <Text variant="body" as="p" className="text-muted-foreground">
          A longer paragraph, with some descriptive bits, maybe T&Cs?
          <br />
          <br />A Terms and Conditions agreement acts as a legal contract
          between you and the user. It's where you maintain your rights to
          exclude users from your app in the event that they abuse your
          website/app, set out the rules for using your service and note other
          important details and disclaimers.
        </Text>
      </div>
    </div>
  ),
};
