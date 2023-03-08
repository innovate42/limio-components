import React from "react";
import Header from "./index";
import { render, screen } from "@testing-library/react";

const intialProps = {
  logo: "https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png",
  componentId: "header-limio",
};

describe("Header component renders correctly", () => {
  it("logo renders when logo prop is passed in", () => {
    render(<Header {...intialProps} />);
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });
});
