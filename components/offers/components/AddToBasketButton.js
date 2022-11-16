import React from "react"
import { useLimio } from "@limio/sdk"
import { Quantity } from "./Quantity"

export const AddToBasketButton = ({ item, primaryColor, inBasket, invertCTA, quantity, setQuantity, addToBasket, selection, removeText }) => {
  const LimioPageContext = useLimio()
  const attributes = item?.data?.attributes

  if (attributes?.checkout__limio?.checkout_type !== "purchase-link") {
    return (
      <>
        {!inBasket ? (
          <div className={`add-to-basket-group${attributes.allow_multibuy__limio ? " multibuy" : ""}`}>
            {attributes.allow_multibuy__limio && (
              <Quantity className={"quantity-button"} primaryColor={primaryColor} invertCTA={invertCTA} quantity={quantity} setQuantity={setQuantity} />
            )}
            <button
              onClick={addToBasket}
              style={
                invertCTA ? { color: primaryColor, borderColor: primaryColor } : { color: "#ffffff", borderColor: primaryColor, backgroundColor: primaryColor }
              }
              className="btn btn-lg btn-block btn-outline-light add add-to-basket"
            >
              {attributes.cta_text__limio ? attributes.cta_text__limio : "Subscribe"}
            </button>
          </div>
        ) : (
          <button
            onClick={() => LimioPageContext.shop.removeFromBasket(item)}
            style={
              invertCTA ? { color: "#ffffff", borderColor: primaryColor, backgroundColor: primaryColor } : { color: primaryColor, borderColor: primaryColor }
            }
            className="btn btn-lg btn-block btn-outline-light remove"
          >
            {removeText || "Remove"}
          </button>
        )}
      </>
    )
  } else {
    return (
      <a
        href={`${LimioPageContext.shop?.shopUrl || ""}/checkout?purchase=${item.data.path}`}
        className="btn btn-lg btn-block btn-outline-light add add-to-basket"
        style={invertCTA ? { color: primaryColor, borderColor: primaryColor } : { color: "#ffffff", borderColor: primaryColor, backgroundColor: primaryColor }}
      >
        {attributes.cta_text__limio ? attributes.cta_text__limio : "Subscribe"}
      </a>
    )
  }
}
