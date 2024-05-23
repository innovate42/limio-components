import { fn } from '@storybook/test';
import OrdersTable from './../../../components/order-table';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Orders Table",
  component: OrdersTable,
  parameters: {
    "layout": "fullscreen"
  },
  tags: [
    "autodocs"
  ],
  argTypes: {
    goBackHeading: {
      control: "text"
    },
    goBackLink: {
      control: "text"
    },
    cancelLink: {
      control: "text"
    },
    switchLink: {
      control: "text"
    },
    changePaymentLink: {
      control: "text"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    goBackHeading: "Return",
    goBackLink: "/",
    cancelLink: "/cancel",
    switchLink: "/switch",
    changePaymentLink: "/change-payment"
  }
};
