import React from "react"
import Footer from "../index"
import { render, screen } from "@limio/test-harness-shop"

describe("Footer", () => {
  const testProps = {
    enableLogo: true,
    logo: "https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png",
    logoSize: "10",
    logoMargin: "0em 0em 1.5em 0em",
    contactFields: [
      {
        label: "Email:",
        value: "support@limio.com",
        url: "mailto:support@limio.com"
      }
    ],
    twitterLink: "http://twitter.com/TryLimio"
  }

  render(<Footer {...testProps} />)

  it("renders correctly", () => {
    const logoElement = screen.getByRole("img")
    expect(logoElement).toHaveStyle({
      width: testProps.logoSize + "em"
    })

    expect(screen.getByText(testProps.contactFields[0].value).tagName).toEqual("A")
  })
})
