import { fn } from '@storybook/test';
import Header from './../../../components/header';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    header: { control: "text"},
    linkUnderline: { control: 'boolean' },
    dividers: { control: 'boolean' },
    componentId: { control: "text"},
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    "header": "My Account",
    "linkUnderline": false,
    "dividers": true,
    "dividerColor": "#000000",
    "breadcrumbs": [
      {
        "text": "Manage My Account",
        "url": "/mma"
      },
      {
        "text": "Cancel",
        "url": "/cancel"
      },
      {
        "text": "Change Payment Method",
        "url": "/change-payment"
      }
    ],
    "componentId": "breadcrumbs-limio"
  },
};

