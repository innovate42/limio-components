import React from "react"
import { render, screen, fireEvent } from "@limio/test-harness-shop"
import { testProps } from "./helpers"
import { Quantity } from "../components/Quantity"

const props = {
  primaryColor: testProps.primaryColor,
  invertCTA: testProps.invertCTA,
  quantity: 1,
  setQuantity: jest.fn()
}

describe("Quantity", () => {
  it("works as expected", () => {
    render(<Quantity {...props} />)
    expect(screen.getAllByText(`${props.quantity}`)[0]).toHaveStyle({
      color: props.primaryColor,
      borderColor: props.primaryColor
    })
    fireEvent.click(screen.getByText("7"))
    expect(props.setQuantity).toHaveBeenCalledWith(7)
  })
})
