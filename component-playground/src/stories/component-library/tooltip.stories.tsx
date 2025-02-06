import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipProvider,
} from "../../../../components/component-library/Tooltip/Tooltip";
import { Icon } from "../../../../components/component-library/Icon/Icon";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Tooltip> = {
  title: "Component Library/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    side: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "radio" },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  render: args => (
    <TooltipProvider>
      <Tooltip {...args} />
    </TooltipProvider>
  ),
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Main: Story = {
  args: {
    content: "Some Info",
    side: "top",
    children: <Icon icon={faCircleInfo} />,
  },
};
