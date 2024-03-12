import { fn } from '@storybook/test';
import FaqBanner from './../../../components/faq-banner';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/FAQ Banner',
  component: FaqBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    "downArrowImg": { control: "text"},
    "headline": { control: "text"},
    "subline": { control: "text"},
    "faqItems": [
      {
        "question": { control: "text"},
        "answer": { control: "text"},
      },
      {
        "question": { control: "text"},
        "answer": { control: "text"},
      },
      {
        "question": { control: "text"},
        "answer": { control: "text"},
      }
    ],
    "componentId": "faq-banner-limio",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    "downArrowImg": "https://static.thenounproject.com/png/1144832-200.png",
    "headline": "Any questions?",
    "subline": "We’ve got answers.",
    "faqItems": [
      {
        "question": "How can I contact Customer Services?",
        "answer": "Go to our help centre"
      },
      {
        "question": "Can I cancel my subscription?",
        "answer": "Yes, of course!"
      },
      {
        "question": "I cannot subscribe – my email address is already recognised",
        "answer": "Go to login"
      }
    ],
    "componentId": "faq-banner-limio",
  },
};

