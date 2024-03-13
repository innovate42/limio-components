import { fn } from '@storybook/test';
import Section from './../../../components/section';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Section",
  component: Section,
  parameters: {
    "layout": "fullscreen"
  },
  tags: [
    "autodocs"
  ],
  argTypes: {
    bgColor__limio_color: {
      control: "text"
    },
    wrapperBgColor__limio_color: {
      control: "text"
    },
    image: {
      control: "text"
    },
    imageShape: {
      control: "select",
      options: [
        "",
        "Rounded",
        "Circle",
        "Circlular"
      ]
    },
    imagePosition: {
      control: "select",
      options: [
        "top",
        "left",
        "right",
        "bottom"
      ]
    },
    imageCaption__limio_richtext: {
      control: "text"
    },
    showButtons: {
      control: "boolean"
    },
    buttons: [
      {
        buttonText: {
          control: "text"
        },
        buttonLocation: {
          control: "text"
        }
      }
    ],
    header: {
      control: "text"
    },
    text__limio_richtext: {
      control: "text"
    },
    secondaryTextImage: {
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
    bgColor__limio_color: "#ECECEC",
    wrapperBgColor__limio_color: "#FFFFFF",
    image: "",
    imageShape: "",
    imagePosition: "left",
    imageCaption__limio_richtext: "Lorem ipsum dolor sit amet.",
    showButtons: true,
    buttons: [
      {
        "buttonText": "Learn More",
        "buttonLocation": "https://limio.com"
      }
    ],
    header: "Lorem ipsum dolor sit amet.",
    text__limio_richtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    secondaryTextImage: "",
    componentId: "section-limio"
  }
};
