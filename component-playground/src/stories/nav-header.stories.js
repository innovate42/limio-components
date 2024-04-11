import { fn } from '@storybook/test';
import NavHeader from './../../../components/nav-header';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Nav Header",
  component: NavHeader,
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
    logoHref: {
      control: "text"
    },
    logoText: {
      control: "text"
    },
    items: [
      {
        label: {
          control: "text"
        },
        href: {
          control: "text"
        },
        button__limio_boolean: {
          control: "boolean"
        },
        login__limio_boolean: {
          control: "boolean"
        }
      }
    ],
    componentId: {
      control: "text"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    logo: "https://sandbox.dev.limio.com/public/51ed4975-c2b9-47f3-bf20-70d7240564af/Limio-Original-White.png",
    logoHref: "/",
    logoText: "",
    items: [
      {
        "label": "Premium",
        "href": "/uk/premium",
        "button__limio_boolean": false,
        "login__limio_boolean": false
      },
      {
        "label": "Help",
        "href": "/help",
        "button__limio_boolean": false,
        "login__limio_boolean": false
      },
      {
        "label": "Download",
        "href": "/download",
        "button__limio_boolean": false,
        "login__limio_boolean": false
      }
    ],
    componentId: "nav-header-limio"
  }
};
