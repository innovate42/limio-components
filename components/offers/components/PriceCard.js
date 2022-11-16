// @flow
import React, { useState, useEffect } from "react"
import { useLimio } from "@limio/sdk"
import { MoreInfo } from "./MoreInfo"
import { OfferImage } from "./OfferImage"
import { AddToBasketButton } from "./AddToBasketButton"
import { sanitizeString } from "@i42/shared/src/shop/offers/helpers"

type Props = {
  item: any,
  setUseTransform: boolean => any,
  redirectUrl: string,
  inBasket: boolean,
  textAlign: string,
  offerWidth: string | number,
  buttonColor: string,
  primaryColor: string,
  useTransform: boolean,
  productSelectText: string,
  border: boolean,
  showAllImages: boolean,
  shadow: boolean,
  roundCorners: boolean,
  offerOverflowLayout: string,
  imagePosition: string,
  imageShape: string,
  thumbnailPosition: string,
  invertCTA: boolean,
  showLearnMore: boolean,
  learnMoreText: string,
  removeText: string
}

const displayProducts = (productString: string) => {
  const sanitizeString = string => (!string || string.includes("</script>") || string.includes("onload=") || string.includes("onerror=") ? "" : string)

  return <div style={{ display: "flex", flexDirection: "column" }} dangerouslySetInnerHTML={{ __html: sanitizeString(productString) }} />
}

export const PriceCard = (props: Props) => {
  const LimioPageContext = useLimio()
  const { item, setUseTransform, redirectUrl } = props
  const itemData = item.data

  const attachments = itemData.attachments ? itemData.attachments.filter(x => x.type.includes("image")) : []
  const hasAttachments = attachments.length > 0

  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const [selection, setSelection] = useState({})
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setUseTransform(!showMoreInfo)
  }, [setUseTransform, showMoreInfo])

  const push_to_checkout__limio = itemData.attributes.push_to_checkout__limio

  const inBasket = push_to_checkout__limio === false && props.inBasket

  let priceCardStyle = {
    textAlign: props.textAlign,
    maxWidth: `${props.offerWidth * 10}em`,
    minWidth: `${props.offerWidth * 10}em`
  }

  if (inBasket) {
    priceCardStyle.border = `1px solid ${props.buttonColor}`
  }

  if (props.border) {
    priceCardStyle.border = `2px solid ${props.primaryColor}`
  }

  function addToBasket() {
    LimioPageContext.shop.addToBasket(props.item, selection, quantity, redirectUrl)
  }

  return (
    <>
      {!props.useTransform && showMoreInfo && (
        <MoreInfo
          item={item}
          primaryColor={props.primaryColor}
          onClose={() => setShowMoreInfo(false)}
          attachments={attachments}
          selection={selection}
          setSelection={setSelection}
          productSelectText={props.productSelectText}
          quantity={quantity}
          setQuantity={setQuantity}
          redirectUrl={redirectUrl}
        />
      )}
      <div
        style={priceCardStyle}
        className={`price-card mb-5${props.shadow ? " shadow-sm" : ""}${props.showAllImages ? " show-thumbs" : ""}${
          props.roundCorners ? " round-corners" : ""
        }`}
      >
        <div className={`card-body ${props.offerOverflowLayout}`}>
          {hasAttachments && props.imagePosition === "top" && (
            <OfferImage
              attachments={attachments}
              imageShape={props.imageShape}
              showAllImages={props.showAllImages}
              thumbnailPosition={props.thumbnailPosition}
            />
          )}

          <div className="display-name">
            <h2 className="my-0">{itemData.attributes.display_name__limio ? itemData.attributes.display_name__limio : props.item.name || itemData.name}</h2>
            <h3
              className="display-price"
              style={{ color: props.primaryColor }}
              dangerouslySetInnerHTML={{ __html: sanitizeString(itemData.attributes.display_price__limio) }}
            />
          </div>

          {(hasAttachments && props.imagePosition) === "middle" && (
            <OfferImage
              attachments={attachments}
              imageShape={props.imageShape}
              showAllImages={props.showAllImages}
              thumbnailPosition={props.thumbnailPosition}
            />
          )}

          <div className="products">{itemData.attributes.offer_features__limio && displayProducts(itemData.attributes.offer_features__limio)}</div>
          <div className="buttons">
            <p className="detailed-price" dangerouslySetInnerHTML={{ __html: sanitizeString(itemData.attributes.detailed_display_price__limio) }} />

            {hasAttachments && props.imagePosition === "bottom" && (
              <OfferImage
                attachments={attachments}
                imageShape={props.imageShape}
                showAllImages={props.showAllImages}
                thumbnailPosition={props.thumbnailPosition}
              />
            )}

            <AddToBasketButton
              addToBasket={addToBasket}
              inBasket={inBasket}
              invertCTA={props.invertCTA}
              item={props.item}
              primaryColor={props.primaryColor}
              quantity={quantity}
              removeText={props.removeText}
              selection={selection}
              setQuantity={setQuantity}
            />
            {props.showLearnMore && (
              <button
                onClick={() => setShowMoreInfo(true)}
                style={
                  props.invertCTA
                    ? { color: "#ffffff", borderColor: props.primaryColor, backgroundColor: props.primaryColor }
                    : { color: props.primaryColor, borderColor: props.primaryColor }
                }
                className="btn btn-lg btn-block btn-outline-light add"
              >
                {props.learnMoreText}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
