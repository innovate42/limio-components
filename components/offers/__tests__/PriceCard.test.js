import React from "react"
import { render, screen, fireEvent, waitFor, getAllByClass } from "@limio/test-harness-shop"
import { externalOffers, testProps, offers } from "./helpers"
import PriceCard from "../index"

describe("PriceCard", () => {
  const { attributes } = offers[0].data
  it("renders correctly", async () => {
    const { internalAppState } = render(<PriceCard {...testProps} />, { pageContext: { offers } })
    await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

    const offerName = screen.getAllByText(attributes.display_name__limio)[0]
    expect(offerName.tagName).toEqual("H2")

    const offerPrice = screen.getAllByText(attributes.display_price__limio)[0]
    expect(offerPrice.tagName).toEqual("H3")

    const priceCard = getAllByClass("price-card")[0]
    expect(priceCard).toHaveStyle({
      maxWidth: testProps.offerWidth * 10 + "em",
      minWidth: testProps.offerWidth * 10 + "em"
    })
    expect(priceCard).toHaveClass("round-corners")

    const detailedPrice = screen.getAllByText(attributes.detailed_display_price__limio)[0]
    expect(detailedPrice.tagName).toEqual("P")
    expect(detailedPrice).toHaveClass("detailed-price")

    const subscribeButton = screen.getAllByText(attributes.cta_text__limio)[0]
    expect(subscribeButton.tagName).toEqual("BUTTON")
  })

  describe("adds to basket correctly", () => {
    it("redirects to external url", () => {
      render(<PriceCard {...testProps} />, { pageContext: { offers: externalOffers } })
      fireEvent.click(screen.getAllByText(attributes.cta_text__limio)[0])
      waitFor(() => expect(window.location.href).toEqual(attributes.checkout__limio.external_url))
    })

    it("adds offer to basket", async () => {
      const { internalAppState, internalStore } = render(<PriceCard {...testProps} />, { pageContext: { offers: externalOffers } })
      await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

      expect(internalStore.getState().basket.basketItems).toHaveLength(0)
      expect(internalStore.getState().order.orderItems).toHaveLength(0)

      await fireEvent.click(screen.getAllByText(attributes.cta_text__limio)[0])

      // expect item to be added to the basket
      expect(internalStore.getState().basket.basketItems).toHaveLength(1)

      // not sure why we also add to the order
      expect(internalStore.getState().order.orderItems).toHaveLength(1)
      expect(internalStore.getState().order.orderItems[0]).toMatchObject({
        id: expect.any(String),
        offer: { data: { attributes: { checkout__limio: { checkout_type: "external", external_url: "http://www.limio.com" } } } },
        price: { amount: 0, currency: "GBP" },
        products: [],
        quantity: 1,
        selectedProducts: {}
      })
    })
  })
})
