import React, { useState, useEffect, useRef } from "react"
import { useLimio } from "@limio/sdk"
import xss from "xss"
import { Quantity } from "./Quantity"

export const MoreInfo = props => {
  const [currentImage, setCurrentImage] = useState(0)
  const LimioPageContext = useLimio()
  const { item, attachments, onClose } = props
  const { data } = item
  const sanitizeString = string => {
    const xssOptions = {
      whitelist: [],
      stripIgnoreTag: true,
      stripIgnoreTagBody: ["script"]
    }

    return xss(string, xssOptions)
  }
  const ref = useRef()

  useEffect(() => {
    const escHandler = ({ key }) => {
      if (key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", escHandler)
    window.addEventListener("keyup", escHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", escHandler)
      window.removeEventListener("keyup", escHandler)
    }
  }, [onClose])

  const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target) && e.target.className !== "dropdown-item") {
        callback()
      }
    }

    React.useEffect(() => {
      document.addEventListener("click", handleClick)

      return () => {
        document.removeEventListener("click", handleClick)
      }
    })
  }

  useOutsideClick(ref, () => props.onClose())

  return (
    <div className="more-info-outer-container">
      <div className="more-info-container" ref={ref}>
        <div className="heading">
          <div className="buttons">
            <div className="close-button" onClick={() => props.onClose()}>
              +
            </div>
          </div>
        </div>
        <div className="more-info-body">
          {attachments && attachments.length > 0 && (
            <div className="more-info-photos">
              <div
                className="more-info-photo"
                style={{ backgroundImage: `url("${LimioPageContext.endpoint ? LimioPageContext.endpoint : ""}${encodeURI(attachments[currentImage].url)}")` }}
              />
              <div className={`more-info-photo-thumbnails${attachments.length <= 1 ? " hidden" : ""}`}>
                {attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className={`more-info-photo-thumbnail${index === currentImage ? " current" : ""}`}
                    style={{
                      backgroundImage: `url("${LimioPageContext.endpoint ? LimioPageContext.endpoint : ""}${encodeURI(attachment.url)}")`
                    }}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="more-info-text">
            <h2 className="title">{data.attributes.display_name__limio || item.name}</h2>
            <div className="display-price" dangerouslySetInnerHTML={{ __html: sanitizeString(data.attributes.display_price__limio) }} />
            <div className={`add-to-basket-group${data.attributes.allow_multibuy__limio ? " multibuy" : ""}`}>
              {data.attributes.allow_multibuy__limio && (
                <Quantity
                  className={"quantity-button"}
                  primaryColor={props.primaryColor}
                  invertCTA={props.invertCTA}
                  quantity={props.quantity}
                  setQuantity={props.setQuantity}
                />
              )}
              <button
                onClick={() => LimioPageContext.shop.addToBasket(item, props.selection, props.quantity, props.redirectUrl)}
                style={{
                  color: "#ffffff",
                  borderColor: props.primaryColor,
                  backgroundColor: props.primaryColor,
                  minHeight: "48px"
                }}
                className="btn btn-lg btn-block btn-outline-light add add-to-basket"
              >
                {data.attributes.cta_text__limio}
              </button>
            </div>
            <div className="detailed-display-price" dangerouslySetInnerHTML={{ __html: sanitizeString(data.attributes.display_price__limio) }} />
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: sanitizeString(data.attributes.description ? data.attributes.description : data.attributes.offer_features__limio)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
