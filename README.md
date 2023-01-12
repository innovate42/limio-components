<div align="center">
  <div style="display: flex;">
    <img src="https://user-images.githubusercontent.com/11695131/212103845-0912408e-51bb-4f19-8ea4-6ce98a18e54e.png" />
   </div>
</div>

# Limio Components

## Contents

* [Description](#description)
* [Limio Components](#limio-components)
  - [Limio Shop](#limio-shop-acquisition)
  - [Limio Self-Service](#limio-self-service-my-account)
  - [Header and Footer](#headerfooter)
  - [Visual](#visual)
  - [Enforcement and Eligibility](#enforcement--eligibility)
  - [Interactive](#interactive)
* [Create a Custom Components](#create-a-custom-component)
  - [Limio Props](#limio-component-guidelines)
  - [Limio Component Guidelines](#limio-component-guidelines)
* [Limio Component Playground](#limio-component-playground)
  - [Getting Started](#getting-started)

## Description

Limio Components is a repository which provides a library of open source Limio Shop Components and a Component Playground to edit these components and build new Custom Components with a set of tools to access Limio Subscription and User data. 

## Limio Components

Limio offers a list of 40+ standard components, called Limio components, which are designed to create an end-to-end subscriber experience, from landing pages, to checkouts, to self-service portals. A Limio Component will often have 10+ configuration options and, like all components, will benefit from the options provided in the Page Builder Styling, Font and Localisation editor.

Here are a list of the most common components, grouped by type:

### Limio Shop (Acquisition)

* **Offers**: A display grid of your offers. This is configured via Offers.
* **Grouped Offers**: An alternative display of offers stored on the campaign in groups.
* **Offer Cards**: An alternative display of offers stored on the campaign.
* **Single Page Checkout**: A configurable one-pager checkout.  
* **Checkout Custom Fields**: Add custom fields to the checkout to be mapped to existing Zuora custom fields.
* **Order Confirmation**: Display an order confirmation page.
* **Order Description**: A display of what the subscriber is entitled to.
* **Registration Options**: A prompt to either register or login.
* **Redeem**: An input form to provide the gift code of a previously purchased gift.
* **Redeem Checkout**: A checkout to redeem a gift
* **Renewal Options**: A prompt for customers to login to renew their subscription

### Limio Self-Service (My Account)

* **Order Table**: A display of a customer's subscription information that can be used as the starting point of a My Account experience.
* **Payment Table**: A display of a customer's payment information (or the payment information related to a specific subscription).
* **Invoice Table**: A display of a customer's invoices.
* **Cancel Survey**: A configurable survey to guide the customer to different cancel experience.
* **Cancel/Save Offers**: Displays a cancel save offer stored on the campaign. Learn more also at How to configure the Cancel and Cancel/Save journey.
* **Switch Subscriptions**: Load switch offers for a subscription. Learn more also at How to create a personalised switch experience with Switch Offers.
* **Cancel Subscription Buttons**: Displays a cancel subscription buttons with configurable extra buttons
* **Edit Address**: A display and editing fields of a customer's address details
* **Order Change Success**: A message to be displayed on order change. This has access to new order data that can be displayed.

### Header/Footer

`Note: Most customers import their own header and footer via a custom component or the hosted component.`

* **Header with Navigation**: A header with a logo on the left and navigational links on the right
* **Header with Country**: A site header, with logo and country picker.
* **Footer**: A footer with key information and links

### Visual

* **Hero Banner**: A large hero with a background image, text, and buttons
* **Features**: A grid of an image plus text side by side.
* **Section**: An image plus text component.
* **FAQ Banner**: A collapsible carousel for FAQs
* **Countdown**: Display a countdown on your page
* **Headings**: Heading & subheading.
* **Link List**: A list of links
* **Social Links**: A display of social media icons with URL and accompanying copy

### Enforcement / Eligibility

* **Region Select**: A region selector that uses journeys and an override to route users to a selected region
* **Block Purchase Dialog**: A dialog pops up on an authenticated page if a customer already has a subscription with a 'Block Purchase' Product
* **Block Related Purchase Modal**: A dialog pops up on an authenticated page (typically the checkout) to block a subscriber from purchasing certain products if they already have one. Learn more on .
* **Block Discount Dialog**: A component to avoid subscribers having duplicate discounts.
* **Block Gift Purchase Dialog**: A dialog pops up on an authenticated page if a customer already has a subscription and attempts to redeem a gift
* **Block Commerce**: A dialog pops up on an authenticated page if a customer is not allowed to interact with commerce

### Interactive

* **Hosted Component**: A component that fetches code using a URL (endpoint) and injects it into the page.
* **Sign up for updates:** An input form to sign up for updates.
* **Form Builder**: A configurable form component to collect any information you require from visitors to your shop.
* **Embedded Video**: A component that allows to embed a Youtube video.

The full list of Limio Components available in Limio and more detailed documentation is available on [Zendesk](https://limio.zendesk.com/hc/en-gb/articles/360004113858-What-are-the-Limio-Components-available-on-the-Page-Builder).

## Create a Custom Component

Limio components are React components. Anything that you can package up into a React component can be used in Limio (see [this section](#limio-component-guidelines) for more details on how to structure your own components and some guidelines about what is accepted in a component).

Let's use this simple component as an example:

```javascript
import * as React from "react";
import "./banner.css";

const CTABanner = ({
  headline,
  subline,
  cta_text,
  cta_href,
  terms_summary,
  detailed_terms_href,
  image_href,
}) => {
  return (
    <section className="CTABanner">
      <article className="Container">
        <header>
          <h1 className="Headline">{headline}</h1>
          <h2 className="Subline">{subline}</h2>

          <a className="CTAButton" href={cta_href} color="#191414">
            <span>{cta_text}</span>
          </a>

          <div className="Terms">
            <p>
              {terms_summary}{" "}
              {detailed_terms_href && (
                <a href={detailed_terms_href}>Terms apply.</a>
              )}
            </p>
          </div>
        </header>
        <img src={image_href} alt="headphones" />
      </article>
    </section>
  );
};

export default CTABanner;
```

![image](https://user-images.githubusercontent.com/11695131/212106500-45dfdfe5-fb0b-4e48-b264-ca0d7a7f362b.png)

The fields marketers can configure components with are set in the component package.json file, inside an array with the key limioProps. You can see these in the example below.

When the component is dragged into a page builder these fields will be populated in a menu for the marketer to configure how they like and these values are then always passed into the component when rendering it.

### Limio Props

Here is an example of adding Limio Props to the `package.json` file of your component. These will get pulled into your component when it is being rendered in Limio and will also be customisable when inside the Page Builder:

```json
{
  "name": "headings",
  "version": "1.0.0",
  "description": "A headings component",
  "main": "./index.js",
  "author": "",
  "dependencies": {
    "@limio/catalog": "^2.1.0",
    "react": "^16.14.0",
    "react-i18next": "^11.3.1"
  },
  "limioProps": [
    {
      "id": "heading",
      "label": "Heading",
      "type": "string",
      "default": "Lorem ipsum dolor sit amet"
    },
    {
      "id": "subheading",
      "label": "Subheading",
      "type": "string",
      "default": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
    {
      "id": "componentId",
      "label": "Component Id",
      "type": "string",
      "default": "headings-limio"
    }
  ]
}
```

#### Limio Prop Types

### String

```json
{
  "id": "headline",
  "label": "Headline",
  "type": "string",
  "default": "Counting down"
}
```

#### Rich Text

Rich text props are saved as a string of html so will need to be rendered using dangerouslySetInnerHTML.

```json
{
  "id": "description__limio_richtext",
  "label": "Description",
  "type": "richtext",
  "default": "<p><strong>Digital</strong></p><p>Description</p><p>No code</p><p>Modern Design</p><p>Server side rendered</p>"
}
```

#### Boolean

This prop type will show an on/off toggle.

```json
{
  "id": "hideOnExpire",
  "label": "Hide on expire?",
  "type": "boolean",
  "default": true
}
```

#### Color

This prop type will show a colour picker.

```json
{
  "id": "arrowColor__limio_color",
  "label": "Mobile swipe arrow color",
  "type": "color",
  "default": "#4444444"
}
```

#### Date Time

This prop type will show a date/time picker.

```json
{
  "id": "expiryDateTime",
  "label": "Expiry Date/Time",
  "type": "datetime",
  "default": "2020-12-10T11:30:42.809Z"
}
```

#### List

```json
{
  "id": "buttons",
  "label": "Buttons",
  "type": "list",
  "fields": {
    "buttonText": {
      "id": "buttonText",
      "label": "Button text",
      "type": "string"
    },
    "buttonLocation": {
      "id": "buttonLocation",
      "label": "Button link",
      "type": "string"
    }
  },
  "default": [
    {
      "buttonText": "Learn More",
      "buttonLocation": "https://limio.com"
    }
  ]
}
```

#### Picklist

This prop type will show a pick list of all the options with only one being selectable.

```json
{
  "id": "layout",
  "label": "Card layout",
  "type": "picklist",
  "options": [
    {
      "id": "center",
      "label": "Center",
      "value": "center"
    },
    {
      "id": "left",
      "label": "Left",
      "value": "left"
    },
    {
      "id": "right",
      "label": "Right",
      "value": "right"
    }
  ],
  "default": "left"
}
```

##### Schema

```json
{
  "id": "consents",
  "label": "Consents",
  "type": "schema",
  "default": [
    {
      "type": "radio",
      "org": "generic",
      "title": "Contact Permissions",
      "for": "email",
      "options": [
        {
          "id": "yes",
          "label": "<p>Yes. I'd like to receive marketing emails.</p>"
        },
        {
          "id": "no",
          "label": "<p>No. I don't want to receive marketing emails.</p>"
        }
      ]
    },
    {
      "type": "checkbox",
      "org": "generic",
      "title": "Terms and Conditions",
      "for": "terms",
      "options": [
        {
          "id": "terms",
          "label": "<p>I agree with the <a href=\"https://www.limio.com?open=terms-and-conditions\" rel=\"noopener noreferrer\" target=\"_blank\">Terms and Conditions</a></p>",
          "required": true,
          "requiredMessage": "Please accept to continue."
        }
      ]
    }
  ]
}
```

### Limio Component Guidelines

This is a list of requirements & notes on anything that you should/should not do with your component:

* Your component module must be exported as the default export from your entry file.
* You can structure your component across many files in multiple directories or just in a single file.
( Only .css files are supports for styling.
* Only a small number of external packages are currently available for use in uploaded components right now. If there is a specific package that you need to use, please contact support and we will try our best to accommodate.
* Use limioProps in your package.json to make your component customisable.
 
## Limio Component Playground
 
Limio Component Playground is a React Developer Tool which allows for developers to import existing Limio Components or newly written Custom Components into an environment that will Environment Variables and Limio SDK tools available in Limio Shop at the time of building. This helps to write components that will reliably behave the same in your local environment and once built & published in Limio Subscription Commerce. 
 
 ### Getting Started
 
 Once you have cloned the repository, to get started run:
 
 ```
 yarn install
 ```
 
 To install all the required dependencies, for both your components and the Component Playground.
 
 Then to start up the Component Playground and see your currently active component run:
 
 ```
 cd component-playground
 yarn start:dev
 ```
 
 This will open your Component on your local machine, which will hot reload every time a change is made to the component.
 
 ![image](https://user-images.githubusercontent.com/11695131/212103226-1cb1ccc1-6d1e-4d74-adbe-cb4e67c909b5.png)

 
 
