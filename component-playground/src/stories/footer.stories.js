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
    enableLogo: {
      control: "boolean"
    },
    logo: {
      control: "text"
    },
    logoSize: {
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
    poweredByLink: {
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
    privacyLink: {
      control: "text"
    },
    showJourneyCountryPicker: {
      control: "boolean"
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
    ],
    navigationDivider: {
      control: "text"
    },
    navigationPosition: {
      control: "select",
      options: [
        "top",
        "bottom",
        "middle",
        "hidden"
      ]
    },
    navigationAlignment: {
      control: "select",
      options: [
        "center",
        "left",
        "right"
      ]
    },
    componentId: {
      control: "text"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    enableLogo: true,
    logo: "https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png",
    logoSize: "10",
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
    poweredByLink: "https://www.limio.com/",
    facebookLink: "",
    twitterLink: "",
    instagramLink: "",
    privacyLink: "https://www.limio.com/privacy",
    showJourneyCountryPicker: true,
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
    ],
    navigationDivider: "-",
    navigationPosition: "bottom",
    navigationAlignment: "center",
    componentId: "footer-limio"
  }
};
