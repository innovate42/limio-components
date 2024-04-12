import { fn } from '@storybook/test';
import Footer from '../../../components/footer';

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
      label:{
        control: "text"
      },
      href:{
        value: "text"
      },
      url:{
        control: "text"
      },
    }
    ],
    copyrightText: {
      control: "text"
    },
    poweredByLink:{
      control: "text"
    },
    facebookLink:{  
      control: "text"
    },
    twitterLink:{
      control: "text"
    },
    instagramLink:{ 
      control: "text"
    },
    privacyLink:{
      control: "text"
    },
    navigation: [
      {
        label:{
          control: "text"
        },
        url:{
          control: "text"
        },
        }
    ],
    navigationDivider:{
      control: "text"
    },
    navigationPosition:[
      {
        id: {
          control: "text"
        },
        label: {
          control: "text"
        },
        value: {
          control: "text"
        }
      }
    ]
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    enableLogo: true,
    logo: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/1156184/637770_576700.png",
    logoSize: "10",
    copyrightText: "© 2021 Limio",
    facebookLink: "https://facebook.com",
    twitterLink: "https://twitter.com/",
    instagramLink: "https://www.instagram.com/",
    privacyLink: "https://www.limio.com/privacy",
    navigation:[
      {
        label: "Home",
        url: "/"
      },
      {
        label: "Gift",
        url: "/gift"
      },
      {
        label: "Manage My Account",
        url: "/mma"
      }
    ],
    navigationDivider: "-",
    navigationPosition: "bottom"
  }
};
