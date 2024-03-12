import React from "react";
import Features from "../index";
import {
  render,
  screen,
  fireEvent,
  userEvent,
  waitFor,
} from "@limio/test-harness-shop";

const defaultProps = {
  header: "Some header",
  subHeader: "Some sub header",
  mobileSwipe: true,
  showSwipeArrows: true,
  features: [
    {
      image: "https://campaigns.scdn.co/images/midyear-prem-benefit0.png",
      header: "Download Music.",
      text: "Listen anywhere.",
      showButton: false,
      buttonText: "Click here",
      buttonLink: "https://www.limio.com",
    },
    {
      image: "https://campaigns.scdn.co/images/midyear-prem-benefit1.png",
      header: "Listen without ads.",
      text: "Enjoy nonstop music.",
      showButton: false,
      buttonText: "Click here",
      buttonLink: "https://www.limio.com",
    },
    {
      image: "https://campaigns.scdn.co/images/midyear-prem-benefit2.png",
      header: "Play any song.",
      text: "Even on mobile.",
      showButton: false,
      buttonText: "Click here",
      buttonLink: "https://www.limio.com",
    },
    {
      image: "https://campaigns.scdn.co/images/midyear-prem-benefit3.png",
      header: "Unlimited skips.",
      text: "Just hit next.",
      showButton: true,
      buttonText: "Click here",
      buttonLink: "https://www.limio.com",
    },
  ],
  componentId: "features-limio",
};

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event("resize"));
};

beforeEach(() => {
  render(<Features {...defaultProps} />);
});

test("headline and subline render correctly", () => {
  const headlineElement = screen.getByText(defaultProps.header);
  const sublineElement = screen.getByText(defaultProps.subHeader);
  expect(headlineElement.tagName).toEqual("H2");
  expect(sublineElement.tagName).toEqual("H3");

  // Check that component id is correct
  const parent = headlineElement.parentElement.parentElement;
  expect(parent.id === defaultProps.componentId).toBe(true);
});

test("features items render correctly", () => {
  expect(screen.getByText(defaultProps.features[0].header)).toBeInTheDocument();
  expect(screen.getByText(defaultProps.features[0].text)).toBeInTheDocument();
  expect(screen.getByText(defaultProps.features[1].header)).toBeInTheDocument();
  expect(screen.getByText(defaultProps.features[1].text)).toBeInTheDocument();
  expect(screen.getByText(defaultProps.features[2].header)).toBeInTheDocument();
  expect(screen.getByText(defaultProps.features[2].text)).toBeInTheDocument();
  expect(screen.getByText(defaultProps.features[3].header)).toBeInTheDocument();
  expect(screen.getByText(defaultProps.features[3].text)).toBeInTheDocument();

  const featureButtons = screen.getAllByRole("button");
  expect(featureButtons.length).toBe(1); // only one button has showButton__limio_boolean: true
  expect(featureButtons[0]).toHaveTextContent(
    defaultProps.features[3].buttonText
  );

  userEvent.click(featureButtons[0]);
  waitFor(() =>
    expect(window.location.href).toEqual(defaultProps.features[3].buttonLink)
  );
});

test("touch to swipe", () => {
  resizeWindow(360, 640);

  const featuresElements = screen.getByTestId("FeaturesContainer");
  const transform = featuresElements.style._values.transform;

  // value in Style object and transform should be equal
  expect(featuresElements.style._values.transform === transform).toBe(true);

  const images = defaultProps.features.map((elem) =>
    screen.getByAltText(elem.header)
  );
  fireEvent.touchStart(images[0], {
    touches: [{ clientX: 100, clientY: 200 }],
  });
  fireEvent.touchMove(images[0], { touches: [{ clientX: 200, clientY: 200 }] });
  fireEvent.touchEnd(images[0], { touches: [{ clientX: 300, clientY: 200 }] });

  // After swiping right value in Style object and transform should be unequal
  expect(featuresElements.style._values.transform === transform).toBe(false);

  fireEvent.touchStart(images[0], {
    touches: [{ clientX: 300, clientY: 200 }],
  });
  fireEvent.touchMove(images[0], { touches: [{ clientX: 200, clientY: 200 }] });
  fireEvent.touchEnd(images[0], { touches: [{ clientX: 100, clientY: 200 }] });

  // After swiping left value in Style object and transform should be equal again
  expect(featuresElements.style._values.transform === transform).toBe(true);
});

test("clicking on arrows and buttons", () => {
  resizeWindow(360, 640);

  const featuresElements = screen.getByTestId("FeaturesContainer");
  const transform = featuresElements.style._values.transform;

  // value in Style object and transform should be equal
  expect(featuresElements.style._values.transform === transform).toBe(true);

  const arrowBack = screen.getByTestId("arrowBack");
  fireEvent.click(arrowBack);

  // After pressing arrowBack value in Style object and transform should be unequal
  expect(featuresElements.style._values.transform === transform).toBe(false);

  const arrowNext = screen.getByTestId("arrowNext");
  fireEvent.click(arrowNext);

  // After pressing arrowNext value in Style object and transform should be equal again
  expect(featuresElements.style._values.transform === transform).toBe(true);

  // Test pressing in feature button
  const elements = defaultProps.features.map((elem) =>
    screen.getByText(elem.buttonText)
  );
  fireEvent.click(elements[0]);
});
