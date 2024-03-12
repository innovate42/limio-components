import { fn } from '@storybook/test';
import GroupedOffers from './../../../components/grouped-offers';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Grouped Offers',
  component: GroupedOffers,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    "ineligibleHeading": { control: "text"},
    "ineligibleMessage": { control: "text"},
    "fullPriceUrl": { control: "text"},
    "fullPriceLabel": { control: "text"},
    "bestValueText": { control: "text"},
    "buttonText": { control: "text"},
    "buttonUrl": { control: "text"},
    "preselectFirstOfferInGroup": { control: "boolean"},
    "groupLabels": [
      {
        id: { control: "text"},
        string: { control: "text"}
      }
    ],
    "componentId":  { control: "text"}
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    "ineligibleHeading": "Pick another offer",
    "ineligibleMessage": "You’ve already used your free trial.",
    "fullPriceUrl": "/full-price",
    "fullPriceLabel": "Click here",
    "bestValueText": "Best value",
    "buttonText": "View multi-year offers",
    "buttonUrl": "/multi",
    "preselectFirstOfferInGroup": false,
    "componentId": "grouped-offers-component-limio",
    "groupLabels": [
      {
        "id": "digital",
        "label": "Digital"
      },
      {
        "id": "bundle",
        "label": "Print + Digital"
      }
    ]
  },
};

