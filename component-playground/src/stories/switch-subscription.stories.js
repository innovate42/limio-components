import { fn } from '@storybook/test';
import switchSubscription from './../../../components/switch-subscription';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/switch Subscription",
  component: switchSubscription,
  parameters: {
    "layout": "fullscreen"
  },
  tags: [
    "autodocs"
  ],
  argTypes: {
    heading: {
      control: "text"
    },
    subheading: {
      control: "text"
    },
    filterSameTerm: {
      control: "boolean"
    },
    showImage: {
      control: "boolean"
    },
    confirmationOk: {
      control: "text"
    },
    confirmationCancel: {
      control: "text"
    },
    confirmHeading: {
      control: "text"
    },
    confirmSubHeading: {
      control: "text"
    },
    redirectUrl: {
      control: "text"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    heading: "Alternative subscriptions",
    subheading: "",
    filterSameTerm: false,
    showImage: true,
    confirmationOk: "OK",
    confirmationCancel: "Cancel",
    confirmHeading: "Are you sure you want change your subscription?",
    confirmSubHeading: "You will be switched over to this offer, starting your next billing date:",
    redirectUrl: ""
  }
};
