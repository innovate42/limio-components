<div align="center">
  <div style="display: flex;">
    <img src="https://user-images.githubusercontent.com/11695131/212103845-0912408e-51bb-4f19-8ea4-6ce98a18e54e.png" />
   </div>
</div>

# Limio Components

## Description

Limio Components is a repository which provides a library of open source Limio Shop Components and a Component Playground to edit these components and build new Custom Components with a set of tools to access Limio Subscription and User data. 

## Quickstart Guide

Limio components are React components. Anything that you can package up into a React component can be used in Limio. This guide will walk you through the steps to create your first Limio Custom Component using the playground, powered by Storybook. Follow these instructions to get started.

### Prerequisites

Before you begin, ensure you have `yarn` installed on your system. If you're new to `yarn`, it's a package manager that doubles as a project manager. You can install it by following the instructions on the [Yarn Documentation](https://classic.yarnpkg.com/en/docs/install) page.

You can then install your dependencies using:

```bash
cd ./component-playground
yarn install
```

To launch the Limio Component Playground for the first time, while in the `component-playground` directory simply run:

```bash
yarn limio
```

##### Step 1: Generating Your Component

To create a new component, open your terminal, navigate to your project directory, and run the following command:

```bash
yarn limio:create <componentDir> <componentName>
```

Replace `<componentDir>` with your desired component directory name (e.g., offer-cards), and `<componentName>` with the name of your component (e.g., OfferCards). This naming convention is crucial for the organization and readability of your project.

##### What Happens Next?
Upon running the command, the following files and directories will be created:

* **Storybook File**: `./component-playground/src/stories/[componentDir].stories.js` <br />
This file is where you'll define your component's stories for Storybook. Stories are a way to present your components in different states and with different sets of data.

* **Component Entry Point**: `./components/[componentDir]/index.js` <br />
The main file of your component where you'll export your React component.

* **Component Package JSON**: `./components/[componentDir]/package.json` <br />
Contains your component's dependencies and Limio Props. This file is essential for managing your component's needs and integrating with the Limio ecosystem.

##### Component Development Guidelines
As you develop your custom component, please keep the following guidelines in mind:

* **Modular Structure**: You can structure your component across many files in multiple directories or just in a single file. This flexibility allows you to organize your component in a way that best suits your development style.
* **Styling**: Only .css files are supported for styling. Ensure that your component's visual design is implemented using CSS.
* **External Packages**: External packages can be added to your `package.json` file and will be loaded as part of the component at build time once in Limio. Please just remember to keep the `"react": "*"` dependency so that your component and Limio use the same version of React.

#### Step 2: Viewing Your Component in Storybook
After creating your component, you can immediately see it in action within the Limio Component Playground. To do so:

1. Navigate to the Storybook sidebar.
2. Locate your new component by its directory name.
3. Click on it to view your component.

As you make changes to your React component, Storybook will automatically refresh, allowing you to observe live updates. This feature is incredibly useful for developing and fine-tuning your components in real-time.

Congratulations! You've successfully created a custom component for Limio. Continue to explore the capabilities of the Limio Component Playground and Storybook to enhance your components further. If you have any questions or need assistance, refer to the Limio Documentation or reach out to the Limio community.

Happy coding!

### Updating Your Storybook

As you refine and enhance your components, it's essential to keep your Storybook updated to reflect the latest changes. This ensures that all modifications are visible and editable in the UI, providing a seamless development experience. Follow the steps below to update your Storybook and incorporate changes effectively.

#### Updating Storybook with Default Limio Props

If you've made updates to Limio Props or have incorporated new ones into your project, you'll need to update your Storybook to include these changes. Running the following command synchronizes your Storybook with the latest Limio Props, ensuring that your component's customisable features remain up-to-date:

```bash
yarn limio:update
```

Executing this command updates your Storybook configuration to reflect any modifications or additions to Limio Props in your components.

#### Updating Your Tailwind Styles

Limio comes packaged with Tailwind CSS to facilitate styling components, aiming to keep them responsive and visually consistent with minimal effort. If you've introduced new Tailwind classes to your project or made stylistic adjustments, it's necessary to update your project's styles accordingly. Run the following command to incorporate these new classes into your stylesheet:

```bash
yarn limio:style
```

This process will continue running until it's manually stopped, ensuring that all new Tailwind classes are added to your stylesheet. By keeping your Tailwind styles updated, you maintain the visual consistency and responsiveness of your components, leveraging Tailwind's utility-first approach for efficient styling.

## Limio Prop Types

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
