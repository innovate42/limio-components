import React from "react";
import Breadcrumbs from "../index";
import { render, screen, waitFor, userEvent } from "@limio/test-harness-shop";

const dudProps = {
  linkUnderline: false,
  dividers: true,
  header: "My account",
  dividerColor__limio_color: "black",
  dividerWeight: "1px",
  breadcrumbs: [
    {
      text: "Manage My Account",
      url: "/mma",
    },
    {
      text: "Cancel",
      url: "/cancel",
    },
    {
      text: "Change Payment Method",
      url: "/change-payment",
    },
  ],
  componentId: "breadcrumbs-limio",
};

beforeEach(() => {
  render(<Breadcrumbs {...dudProps} />);
});

describe("Breadcrumbs", () => {
  test("component renders correctly", () => {
    expect(screen.getByText(dudProps.header)).toBeInTheDocument();
    expect(screen.getByText(dudProps.breadcrumbs[0].text)).toBeInTheDocument();
    expect(screen.getByText(dudProps.breadcrumbs[1].text)).toBeInTheDocument();
    expect(screen.getByText(dudProps.breadcrumbs[2].text)).toBeInTheDocument();
  });

  test("redirects users correctly", () => {
    const linkToClick = screen.getByText(dudProps.breadcrumbs[1].text);
    userEvent.click(linkToClick);
    waitFor(() =>
      expect(window.location.href).toContain(dudProps.breadcrumbs[1].url)
    );
  });
});
