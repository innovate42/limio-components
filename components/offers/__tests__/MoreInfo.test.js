import React from "react"
import { render, screen, fireEvent, getAllByClass, waitFor } from "@limio/test-harness-shop"
import { offers } from "./helpers"
import { MoreInfo } from "../components/MoreInfo"

const props = {
  item: offers[0],
  primaryColor: "#c03467",
  onClose: jest.fn(),
  attachments: offers[0].data.attachments,
  quantity: 1,
  redirectUrl: "http://www.limio.com"
}

describe("MoreInfo", () => {
  it("displays attachments correctly", async () => {
    const { internalAppState } = render(<MoreInfo {...props} />)
    await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

    await fireEvent.click(screen.getByText("+"))
    expect(props.onClose).toHaveBeenCalled()
    console.dir(getAllByClass("more-info-photo")[0])
    console.dir(props.attachments[0].url)
    expect(getAllByClass("more-info-photo")[0]).toHaveStyle({
      backgroundImage: `url("${props.attachments[0].url}")`
    })
  })

  it("adds product to basket", async () => {
    const { internalAppState, internalStore } = render(<MoreInfo {...props} />)
    await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

    const subscribeButton = screen.getByText(props.item.data.attributes.cta_text__limio)

    expect(subscribeButton).toHaveStyle({
      borderColor: props.primaryColor,
      backgroundColor: props.primaryColor
    })

    expect(internalStore.getState().basket.basketItems).toHaveLength(0)
    expect(internalStore.getState().order.orderItems).toHaveLength(0)

    await fireEvent.click(subscribeButton)

    // expect item to be added to the basket
    expect(internalStore.getState().basket.basketItems).toHaveLength(1)

    // not sure why we also add to the order
    expect(internalStore.getState().order.orderItems).toHaveLength(1)
  })
})
