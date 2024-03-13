import { fn } from '@storybook/test';
import OfferCards from './../../../components/offer-cards';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Offer Cards",
  component: OfferCards,
  parameters: {
    "layout": "fullscreen"
  },
  tags: [
    "autodocs"
  ],
  argTypes: {
    external_pricing_link: {
      control: "text"
    },
    external_pricing_text: {
      control: "text"
    },
    offerWidth: {
      control: "number"
    },
    offerOverflowLayout: {
      control: "select",
      options: [
        "stretch",
        "center",
        "start",
        "end"
      ]
    },
    includedFeaturesTitle: {
      control: "text"
    },
    ineligibleMessage: {
      control: "text"
    },
    offerGrouping: {
      control: "boolean"
    },
    showOfferImages: {
      control: "boolean"
    },
    maxCards: {
      control: "number"
    },
    cardAlignment: {
      control: "select",
      options: [
        "vertical",
        "horizontal"
      ]
    },
    alwaysMinimise: {
      control: "boolean"
    },
    groupLabels: [
      {
        name: {
          control: "text"
        },
        url: {
          control: "text"
        }
      }
    ],
    hideCardBreak: {
      control: "boolean"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    external_pricing_link: "/long-term",
    external_pricing_text: "View multi-year pricing",
    offerWidth: 3,
    offerOverflowLayout: "stretch",
    includedFeaturesTitle: "Whats Included?",
    ineligibleMessage: "You are not eligible for a trial offer. Please select a different offer to continue.",
    offerGrouping: false,
    showOfferImages: false,
    maxCards: "",
    cardAlignment: "vertical",
    alwaysMinimise: false,
    groupLabels: [
      {
        "id": "digital",
        "label": "Digital"
      },
      {
        "id": "bundle",
        "label": "Print + Digital"
      }
    ],
    hideCardBreak: false
  }
};
