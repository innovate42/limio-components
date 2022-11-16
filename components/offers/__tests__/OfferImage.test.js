import React from "react"
import { render, fireEvent, getAllByClass } from "@limio/test-harness-shop"
import { offers, testProps } from "./helpers"
import { OfferImage } from "../components/OfferImage"

const dudProps = {
  attachments: offers[0].data.attachments,
  imageShape: testProps.imageShape,
  showAllImages: testProps.showAllImages
}

describe("OfferImage", () => {
  it("displays offer images correctly", () => {
    render(<OfferImage {...dudProps} />)

    const offerImage = getAllByClass("offer-img")[0]
    expect(offerImage).toHaveClass(dudProps.imageShape)
    expect(offerImage).toHaveStyle({
      backgroundImage: `url("${dudProps.attachments[0].url}")`
    })

    fireEvent.click(getAllByClass("left")[0])
    expect(offerImage).toHaveStyle({
      backgroundImage: `url("${dudProps.attachments[1].url}")`
    })
  })
})
