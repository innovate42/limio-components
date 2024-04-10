import { fn } from '@storybook/test';
import Offers from '../../../components/offers';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Offers",
  component: Offers,
  parameters: {
    "layout": "fullscreen"
  },
  tags: [
    "autodocs"
  ],
  argTypes: {
    mobileSwipe: {
      control: "boolean"
    },
    mobileArrows: {
      control: "boolean"
    },
    mobileArrowsColor: {
      control: "string"
    },
    showLearnMore: {
      control: "boolean"
    },
    learnMoreText: {
      control: "string"
    },
    showImage: {
      control: "boolean"
    },
    componentId: {
      control: "string"
    },
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    mobileSwipe: true,
    mobileArrows: true,
    mobileArrowsColor: "black",
    showLearnMore: true,
    learnMoreText: "Learn More",
    showImage: true,
    componentId: "offers-limio"
  }
};
