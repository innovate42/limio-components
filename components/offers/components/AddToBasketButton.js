// @flow
import * as React from "react"
import { useBasket } from "@limio/sdk"
import type { ElasticOffer } from "@limio/types"
import { handleQuantityChange, checkEmptyQuantityOnBlur } from "@limio/shop/src/components/helpers.js"

type Props = {
  item: ElasticOffer,
  quantity: number,
  setQuantity: number,
  inBasket: boolean,
  redirectUrl: string
}



export function AddToBasketButton({ item, inBasket, quantity, setQuantity, redirectUrl}: Props): React.Node {
  const { addToBasket, removeFromBasket } = useBasket()

  const  {
    allow_multibuy__limio,
    cta_text__limio,
    checkout__limio,
    default_quantity_options__limio
    } = item.data.attributes

  const { maximum_quantity: maxOfferQuantity = 100, increment = 1, minimum_quantity: minOfferQuantity = 1 } = default_quantity_options__limio || {}


    return (
      <>
        {!inBasket ? (
          <div className="flex mt-auto">
            {allow_multibuy__limio && (
              <label htmlFor="quantity" >
                <input
                  name="quantity"
                  min={minOfferQuantity}
                  max={maxOfferQuantity}
                  type="number"
                  step={increment}
                  value={quantity}
                  onChange={e => handleQuantityChange(e.target.value, maxOfferQuantity, item, setQuantity)}
                  onBlur={e => checkEmptyQuantityOnBlur(e.target.value, item, setQuantity, minOfferQuantity)}
                  className="rounded-l-lg"
                  style={{ paddingTop: "6px" }}
                />
              </label>
            )}
                 <button type="button"
             onClick={() => addToBasket(item, { quantity, redirectUrl: redirectUrl })}
                    className={`w-full mt-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${allow_multibuy__limio ? "rounded-r-lg h-12" : "rounded-lg"}`}
                    style={{ marginRight: "0" }} 
                    >
                      
                {cta_text__limio}
            </button>
          </div>
        ) : (
          <button
            onClick={() => removeFromBasket(item)}
            className="btn btn-lg btn-block btn-outline-light remove"
          >
            {"Remove"}
          </button>
        )}
      </>
    )

}
