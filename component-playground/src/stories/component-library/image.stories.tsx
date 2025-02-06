import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "../../../../components/component-library/Image/Image";

const meta: Meta<typeof Image> = {
  title: "Component Library/Image",
  component: Image,
  argTypes: {
    variant: {
      options: ["default", "rounded"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    variant: "default",
  },
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Main: Story = {
  args: {
    src: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1156184/44061_375722.jpeg",
    className: "",
    width: "384px",
  },
};
