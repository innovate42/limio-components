import { fn } from '@storybook/test';
import FaqBanner from './../../../components/faq-banner';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Faq Banner",
  component: FaqBanner,
  parameters: {
    "layout": "fullscreen"
  },
  tags: [
    "autodocs"
  ],
  argTypes: {
    downArrowImg: {
      control: "text"
    },
    headline: {
      control: "text"
    },
    subline: {
      control: "text"
    },
    faqItems: [
      {
        question: {
          control: "text"
        },
        answer__limio_richtext: {
          control: "text"
        }
      }
    ],
    showButtonBackgroundColor: {
      control: "boolean"
    },
    btnBgColor__limio_color: {
      control: "color"
    },
    btnBorderColor__limio_color: {
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
    downArrowImg: "https://static.thenounproject.com/png/1144832-200.png",
    headline: "Any questions?",
    subline: "We’ve got answers.",
    faqItems: [
      {
        "question": "How can I contact Customer Services?",
        "answer__limio_richtext": "Go to our help centre"
      },
      {
        "question": "Can I cancel my subscription?",
        "answer__limio_richtext": "Yes, of course!"
      },
      {
        "question": "I cannot subscribe – my email address is already recognised",
        "answer__limio_richtext": "Go to login"
      }
    ],
    showButtonBackgroundColor: false,
    btnBgColor__limio_color: "#efd5c4",
    btnBorderColor__limio_color: "#F47C24",
    componentId: "faq-banner-limio"
  }
};
