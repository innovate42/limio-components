import { fn } from '@storybook/test';
// import NavHeader from '../../../components/nav-header';
import NavHeader from "../../../components/nav-header"



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
        label:{
          control: "text"
        },
        href:{
          control: "text"
        },
        button__limio_boolean:{
          control: "boolean"
        },
        login__limio_boolean:{
          control: "boolean"
        }
      }
    ],
    height:{
      control: "number"
    },
    fixedTop:{
      control: "boolean"
    }, 
    shadow:{
      control: "boolean"
    },
    showBasket:{
      control: "boolean"
    },
    showProfile:{
      control: "boolean"
    },
    componentId:{
      control: "text"
    },
    profileColor__limio_color:{
      control: "text"
    },
    profileHref: {
      control: "text"
    },
    basketColor__limio_color:{
      control: "text"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
   logo: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/1156184/637770_576700.png",
    logoHref: "/",
    logoText: "Limio",
    items: [
      {
        label: "Premium",
        href: "/uk/premium",
        button__limio_boolean: false,
        login__limio_boolean: false
      },
      {
        label: "Help",
        href: "/help",
        button__limio_boolean: false,
        login__limio_boolean: false
      },
      {
        label: "Download",
        href: "/download",
        button__limio_boolean: false,
        login__limio_boolean: false
      }
    ],
    height: 1.25,
    componentId: "faq-banner-limio",
    fixedTop: true,
    shadow: false,
    showBasket: true,
    showProfile: true,
    componentId: "nav-header-limio",
    profileColor__limio_color: "#A7A7A7",
    profileHref: "/mma",
    basketColor__limio_color: "#ffffff",
  }
};
