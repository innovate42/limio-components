// @flow
import React, { useState } from "react"
import { useCampaign, useBasket} from "@limio/sdk"
import { PriceCard } from "./components/PriceCard"
import MobileOffers from "./components/MobileOffers"
import queryString from "query-string"


export const Offers = props => {

  const { basketItems, removeFromBasket } = useBasket()
  const { offers = [], groups = [] } = useCampaign()
  const [useTransform, setUseTransform] = useState(true)

  let redirect_url = ""
  if (typeof window !== "undefined") {
    const search = queryString.parse(window?.location?.search)
    redirect_url = search["redirect_url"] || ""
  }

const renderPriceCards = groupItems => {
    if (offers.length === 0) {
      return <div className="no-offers mb-5">No offers to display...</div>
    }

    return (offers).map((item, index) => {
      return (
        <PriceCard
          key={item.path + index}
          item={item}
          inBasket={!!basketItems?.find(basketItem => basketItem?.offer?.path === item.path && basketItem?.offer?.id === item.id)} // @TODO: Tidy this
          offerOverflowLayout={props.offerOverflowLayout}
          removeFromBasket={item => removeFromBasket(item)}
          showLearnMore={props.showLearnMore}
          roundCorners={props.roundCorners}
          learnMoreText={props.learnMoreText}
          redirectUrl={redirect_url}
          showImage={props.showImage}
        />
      )
    })
  }

  return (
    <div id="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <div className="container mb-2">
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {renderPriceCards()}
            </div>
      </div>
    </div>
  )
}

export default Offers
