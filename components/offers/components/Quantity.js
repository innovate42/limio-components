// @flow
import React, { useState } from "react"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "@limio/design-system"

export const Quantity = ({ invertCTA, primaryColor, quantity, setQuantity }) => {
  const [isOpen, setIsOpen] = useState()
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle
        caret
        style={
          invertCTA
            ? { color: "#ffffff", borderColor: primaryColor, backgroundColor: primaryColor }
            : { color: primaryColor, borderColor: primaryColor, backgroundColor: "transparent" }
        }
      >
        {quantity}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Quantity</DropdownItem>
        {quantities.map(quant => (
          <DropdownItem key={"quantity-selector-" + quant} onClick={() => setQuantity(quant)}>
            {quant}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
