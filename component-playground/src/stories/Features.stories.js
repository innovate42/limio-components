import { fn } from '@storybook/test';
import Features from './../../../components/features';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Features',
  component: Features,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    header: { control: "text"},
    subHeader: { control: "text"},
    imageFit: { control: "text" },
    componentId: { control: "text"},
    features: [
      {
        "image": {control: "text"},
        "header": {control: "text"},
        "text":  {control: "text"},
        "showButton": {control: "boolean"},
        "buttonText": {control: "text"},
        "buttonLink": {control: "text"}
      }
    ],
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    "header": "Lorem ipsum dolor sit amet",
    "subHeader": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit.",
    "features": [
      {
        "image": "https://campaigns.scdn.co/images/midyear-prem-benefit0.png",
        "header": "Download Music.",
        "text": "Listen anywhere.",
        "showButton": false,
        "buttonText": "Click here",
        "buttonLink": "https://www.limio.com"
      },
      {
        "image": "https://campaigns.scdn.co/images/midyear-prem-benefit1.png",
        "header": "Listen without ads.",
        "text": "Enjoy nonstop music.",
        "showButton": false,
        "buttonText": "Click here",
        "buttonLink": "https://www.limio.com"
      },
      {
        "image": "https://campaigns.scdn.co/images/midyear-prem-benefit2.png",
        "header": "Play any song.",
        "text": "Even on mobile.",
        "showButton": false,
        "buttonText": "Click here",
        "buttonLink": "https://www.limio.com"
      },
      {
        "image": "https://campaigns.scdn.co/images/midyear-prem-benefit3.png",
        "header": "Unlimited skips.",
        "text": "Just hit next.",
        "showButton": false,
        "buttonText": "Click here",
        "buttonLink": "https://www.limio.com"
      }
    ],
    "imageFit": "cover",
    "componentId": "features-limio"
  }
};

