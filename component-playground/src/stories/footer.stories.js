import { fn } from '@storybook/test';
import Footer from './../../../components/footer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Footer",
  component: Footer,
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
    contactFields: [
      {
        label: {
          control: "text"
        },
        value: {
          control: "text"
        },
        url: {
          control: "text"
        }
      }
    ],
    copyrightText: {
      control: "text"
    },
    facebookLink: {
      control: "text"
    },
    twitterLink: {
      control: "text"
    },
    instagramLink: {
      control: "text"
    },
    navigation: [
      {
        label: {
          control: "text"
        },
        url: {
          control: "text"
        }
      }
    ]
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    logo: "https://sandbox.dev.limio.com/public/51ed4975-c2b9-47f3-bf20-70d7240564af/Limio-Original-White.png",
    contactFields: [
      {
        "label": "Email:",
        "value": "support@limio.com",
        "url": "mailto:support@limio.com"
      },
      {
        "label": "Telephone:",
        "value": "020 1234 1234",
        "url": "tel:020 1234 1234"
      },
      {
        "label": "Address:",
        "value": "Leather Market, Weston Street, London, SE1 3ER",
        "url": ""
      }
    ],
    copyrightText: "Copyright © 2019 Limio",
    facebookLink: "",
    twitterLink: "",
    instagramLink: "",
    navigation: [
      {
        "label": "Home",
        "url": "/"
      },
      {
        "label": "Gift",
        "url": "/gift"
      },
      {
        "label": "Manage My Account",
        "url": "/mma"
      }
    ]
  }
};
