import { fn } from '@storybook/test';
import Header from './../../../components/header';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    "layout": "fullscreen"
  },
  tags: [
    "autodocs"
  ],
  argTypes: {
    logo: {
      control: "text"
    },
    componentId: {
      control: "text"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    logo: "https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png",
    componentId: "form-builder-limio"
  }
};
