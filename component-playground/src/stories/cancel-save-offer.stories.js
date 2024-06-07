import { fn } from '@storybook/test';
import cancelSaveOffer from './../../../components/cancel-save-offer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/cancel Save Offer",
  component: cancelSaveOffer,
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
    subheading__limio_richtext: {
      control: "text"
    },
    discountDetails: {
      control: "text"
    },
    nextPaymentDetails__limio__richtext: {
      control: "text"
    },
    detailedSubheading: {
      control: "text"
    },
    imageUrl: {
      control: "text"
    },
    confirmOfferButtonLabel: {
      control: "text"
    },
    confirmHeading: {
      control: "text"
    },
    confirmSubheading: {
      control: "text"
    },
    confirmationOk: {
      control: "text"
    },
    confirmationCancel: {
      control: "text"
    },
    paymentMethodHeading: {
      control: "text"
    },
    redirectUrl: {
      control: "text"
    },
    goBackHeading: {
      control: "text"
    },
    goBackLink: {
      control: "text"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    heading: "Your cancel/save offer",
    subheading__limio_richtext: "Stay with us",
    discountDetails: "Get {{discountRate}} off for the next {{discountPeriod}}.",
    nextPaymentDetails__limio__richtext: "Next Payment {{currentPrice}}{{nextPriceWithDiscount}}.",
    detailedSubheading: "We won't charge you until your subscription renews.",
    imageUrl: "",
    confirmOfferButtonLabel: "I'd like to change my subscription",
    confirmHeading: "Are you sure you want to update your subscription?",
    confirmSubheading: "You will be switched over to this offer, starting on your next billing date",
    confirmationOk: "I want to change my subscription",
    confirmationCancel: "Go back",
    paymentMethodHeading: "Payment Method",
    redirectUrl: "cancel/save-confirm",
    goBackHeading: "Return",
    goBackLink: "/"
  }
};
