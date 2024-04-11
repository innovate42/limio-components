// @flow
import * as React from "react"
import { useState } from "react"
import { ShowMoreInfoModal } from "./ShowMoreInfoModal"
import { AddToBasketButton } from "./AddToBasketButton"
import { sanitizeString } from "@limio/utils/string";
import { formatDisplayPrice } from "@limio/utils/string";


export function PriceCard(props): React.Node {

  const { item, redirectUrl, showImage } = props
  const itemData = item.data

  const attachments = itemData.attachments ? itemData.attachments.filter(x => x.type.includes("image")) : []
  const hasAttachments = attachments.length > 0

  const [showMoreInfoModal, setShowMoreInfoModal] = useState(false)
  const [quantity, setQuantity] = useState(item.data.attributes.default_quantity_options__limio?.minimum_quantity || 1)


const {
  display_name__limio,
  display_price__limio,
  price__limio,
  offer_features__limio,
  cta_text__limio,
} = props.item.data.attributes


  const push_to_checkout__limio = itemData.attributes.push_to_checkout__limio
  const inBasket = push_to_checkout__limio === false && props.inBasket


  const formatBulletPoints = (string) => {
    const sanitised = sanitizeString(string)

    const features = document.createElement("div")
    features.innerHTML = sanitised

    return [].slice.call(features.children).map(feature => (
        <li className="flex items-center space-x-3">
            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
            </svg>
            <span>{feature.innerText}</span>
        </li>
    ))
}

  return (
    <>
      <div
        className="flex flex-col p-6 mx-auto max-w-lg min-h-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">{display_name__limio}</h3>
{showImage && (
      <div className="flex flex-row justify-center">
    <div style={{maxWidth: "40%"}}>
      <img src={item.data.attachments[0].url} alt="modal-image" className="rounded-lg object-scale-down"/>
      </div>
      </div>
)}
           <div className="flex justify-center items-baseline my-4">
              <span className="mr-2 text-3xl font-extrabold"
                    dangerouslySetInnerHTML={{ __html: sanitizeString(formatDisplayPrice(display_price__limio, [{currencyCode: price__limio[0].currencyCode, value: price__limio[0].value,}])) }}
              />
            </div>
       
            <ul role="list" className="mb-8 space-y-4 text-left">
                  {offer_features__limio && formatBulletPoints(offer_features__limio)}
              </ul>
            <AddToBasketButton
              inBasket={inBasket}
              item={props.item}
              quantity={quantity}
              setQuantity={setQuantity}
              redirectUrl={redirectUrl}
            />
            {props.showLearnMore && (
              <>
              <button
                onClick={() => setShowMoreInfoModal(true)}
                className="w-full mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-lg">
                {props.learnMoreText}
              </button>
              <ShowMoreInfoModal 
              showMoreInfoModal={showMoreInfoModal} 
              setShowMoreInfoModal={setShowMoreInfoModal} 
              item={props.item}
              formatBulletPoints={formatBulletPoints}
              showImage={showImage}
              />
              </>
            )}
         
       
      </div>
    </>
  )
}
