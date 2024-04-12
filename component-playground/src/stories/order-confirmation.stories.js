import { fn } from '@storybook/test';
import OrderConfirmation from './../../../components/order-confirmation';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Order Confirmation",
  component: OrderConfirmation,
  parameters: {
    "layout": "fullscreen"
  },
  tags: [
    "autodocs"
  ],
  argTypes: {
    title: {
      control: "text"
    },
    message: {
      control: "text"
    },
    messageTitle: {
      control: "text"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    title: "Order complete",
    message: "Thank you for your order. You will receive an email confirmation shortly.",
    messageTitle: "Thank you for subscribing"
  }
};
