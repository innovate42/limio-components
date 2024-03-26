import { fn } from '@storybook/test';
import CancelSurvey from './../../../components/cancel-survey';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Cancel Survey",
  component: CancelSurvey,
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
    subtitle: {
      control: "text"
    },
    arrange: {
      control: "select",
      options: [
        "horizontal",
        "vertical"
      ]
    },
    reasons: [
      {
        id: {
          control: "text"
        },
        label: {
          control: "text"
        },
        url: {
          control: "text"
        },
        buttonImage: {
          control: "text"
        },
        straightToUrl__limio_boolean: {
          control: "boolean"
        },
        showCta__limio_boolean: {
          control: "boolean"
        },
        ctaText: {
          control: "text"
        },
        ctaImage: {
          control: "text"
        },
        segments__limio_segments: {
          control: "text"
        }
      }
    ],
    goBackUrl: {
      control: "text"
    },
    redirectUrl: {
      control: "text"
    },
    feedbackPlaceholder: {
      control: "text"
    },
    confirmationTitle: {
      control: "text"
    },
    confirmationBody: {
      control: "text"
    },
    confirmationOk: {
      control: "text"
    },
    confirmationCancel: {
      control: "text"
    },
    iconPrimary__limio_color: {
      control: "color"
    },
    iconSecondary__limio_color: {
      control: "color"
    },
    backgroundColor__limio_color: {
      control: "color"
    },
    componentId: {
      control: "text"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    title: "Before you go",
    subtitle: "Please tell us why you want to cancel your subscription",
    arrange: "horizontal",
    reasons: [
      {
        "id": "expensive",
        "label": "This subscription is too expensive",
        "url": "/save",
        "buttonImage": "",
        "straightToUrl__limio_boolean": false,
        "showCta__limio_boolean": true,
        "ctaText": "We can offer you a discount.",
        "ctaImage": "",
        "segments__limio_segments": []
      },
      {
        "id": "quantity",
        "label": "I have too much",
        "url": "mailto:support@limio.com",
        "buttonImage": "",
        "straightToUrl__limio_boolean": false,
        "showCta__limio_boolean": true,
        "ctaText": "We understand. Please contact us to talk about your options.",
        "ctaImage": "",
        "segments__limio_segments": []
      },
      {
        "id": "dislike",
        "label": "I did not like the membership benefits",
        "url": "",
        "buttonImage": "",
        "straightToUrl__limio_boolean": false,
        "showCta__limio_boolean": false,
        "ctaText": "",
        "ctaImage": "",
        "segments__limio_segments": []
      },
      {
        "id": "alternative",
        "label": "I found an alternative",
        "url": "",
        "buttonImage": "",
        "straightToUrl__limio_boolean": false,
        "showCta__limio_boolean": false,
        "ctaText": "",
        "ctaImage": "",
        "segments__limio_segments": []
      },
      {
        "id": "other",
        "label": "Other reasons",
        "url": "",
        "buttonImage": "",
        "showCta__limio_boolean": false,
        "ctaText": "",
        "ctaImage": "",
        "segments__limio_segments": []
      }
    ],
    goBackUrl: "/mma",
    redirectUrl: "/mma",
    feedbackPlaceholder: "Tell us what you would have made your experience better",
    confirmationTitle: "Are you sure you want to cancel?",
    confirmationBody: "Your subscription will lapse at the end of your term and you will lose all benefits.",
    confirmationOk: "OK",
    confirmationCancel: "Cancel",
    iconPrimary__limio_color: "rgba(0,0,0,.3)",
    iconSecondary__limio_color: "rgba(0,0,0,.1)",
    backgroundColor__limio_color: "#fff",
    componentId: "cancel-survey-limio"
  }
};
