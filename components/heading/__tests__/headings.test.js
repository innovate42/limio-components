import React from "react";
import Headings from "../index";
import { render, screen } from "@limio/test-harness-shop";

test("Displays the headings component as expected", async () => {
  const heading = "Welcome to the Limio Shop";
  const headingColor = "#000000";
  const headingWeight = "700";
  const subheading = "Check out the products below";
  const subheadingColor = "#333333";
  const subheadingWeight = "300";

  render(
    <Headings
      heading={heading}
      headingColor__limio_color={headingColor}
      headingWeight={headingWeight}
      subheading={subheading}
      subheadingColor__limio_color={subheadingColor}
      subheadingWeight={subheadingWeight}
    />
  );

  const headingElement = screen.getByText(heading);
  const subheadingElement = screen.getByText(subheading);

  expect(headingElement.tagName).toEqual("H2");
  expect(headingElement).toHaveStyle({
    color: headingColor,
    fontWeight: headingWeight,
  });

  expect(subheadingElement.tagName).toEqual("H3");
  expect(subheadingElement).toHaveStyle({
    color: subheadingColor,
    fontWeight: subheadingWeight,
  });
});
