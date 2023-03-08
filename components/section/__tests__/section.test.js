import React from "react";
import Section from "../index";
import { render, screen } from "@limio/test-harness-shop";

const testProps = {
  contentPadding: "2em",
  // static image object
  image: {
    srcSet:
      "/static/b1a8f790f2fc5f389dd1f792179b1b17a6ab826d-e659569f26f4269f853a02e2a31cfe51.webp",
    images: [
      {
        path: "/static/b1a8f790f2fc5f389dd1f792179b1b17a6ab826d-e659569f26f4269f853a02e2a31cfe51.webp",
        width: 320,
        height: 160,
      },
    ],
    src: "/static/b1a8f790f2fc5f389dd1f792179b1b17a6ab826d-e659569f26f4269f853a02e2a31cfe51.webp",
    width: 320,
    height: 160,
  },
  imageCaption__limio_richtext: "Image text",
  showButtons: true,
  buttons: [
    {
      buttonText: "Learn More",
      buttonLocation: "https://limio.com",
    },
  ],
  header: "Testing Header",
  text__limio_richtext: "Testing rich text",
  componentId: "section-limio",
};

test("elements render correctly", () => {
  render(<Section />, {
    componentProps: testProps,
  });

  const headerElement = screen.getByText(testProps.header);
  const imageCaption = screen.getByText(testProps.imageCaption__limio_richtext);
  const text = screen.getByText(testProps.text__limio_richtext);
  const TextContainer = headerElement.parentElement;

  expect(headerElement.tagName).toEqual("H2");
  expect(imageCaption.tagName).toEqual("DIV");
  expect(text.tagName).toEqual("DIV");
  expect(TextContainer).toHaveStyle("width: 60%");
  expect(TextContainer).toHaveStyle("margin-top: null");

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
  expect(image.src).toBe(`http://localhost${testProps.image.src}`);
});

test("Section without image and modified rich text", () => {
  const modifiedProps = { ...testProps };
  modifiedProps.image = null;
  modifiedProps.text__limio_richtext =
    "and some text here<script>alert('hello world')</script>";
  render(<Section />, {
    componentProps: modifiedProps,
  });

  const headerElement = screen.getByText(modifiedProps.header);
  const TextContainer = headerElement.parentElement;
  expect(TextContainer).toHaveStyle("width: 100%");
  expect(TextContainer).toHaveStyle("margin-top: 3rem");

  const text = screen.getByText("and some text here");
  expect(text.tagName).toEqual("DIV");
});
