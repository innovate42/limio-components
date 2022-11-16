// @flow
import React, { useState } from "react"
import { useLimio } from "@limio/sdk"
import { PriceCard } from "./components/PriceCard"
import { Alert } from "@limio/design-system"
import { getCookie } from "@i42/shared/src/helpers"
import { groupOffers, filterTrials } from "@i42/shared/src/shop/offers/helpers"
import MobileOffers from "./components/MobileOffers"
import * as R from "ramda"
import * as qs from "query-string"
import "./index.css"

export const Offers = props => {
  const LimioPageContext = useLimio()
  const offerEligibility = getCookie("limio-invalid")

  const { shop: shopContext } = LimioPageContext
  const { offers = [], groups = [] } = shopContext

  const offerItems = filterTrials(offers, offerEligibility.includes("trial"))
  const offerGroups = groupOffers(offerItems, groups)

  const [useTransform, setUseTransform] = useState(true)
  const [showTrialAlert, setShowTrialAlert] = useState(offerEligibility.includes("trial"))

  let redirect_url = ""
  if (typeof window !== "undefined") {
    const search = qs.parse(window?.location?.search)
    redirect_url = search["redirect_url"] || ""
  }

  const renderPriceCards = groupItems => {
    if (!offerItems.length || (props.splitByGroups && !groupItems)) {
      return <div className="no-offers mb-5">No offers to display...</div>
    }

    return (groupItems || offerItems).map((item, index) => {
      const { trial__limio, sales_channel__limio } = item.data.attributes

      if (trial__limio && offerEligibility.includes("trial")) {
        return
      }

      return (
        <PriceCard
          endpoint={props.endpoint}
          key={item.path + index}
          item={item}
          inBasket={!!LimioPageContext?.shop?.basketItems?.find(basketItem => basketItem?.offer?.path === item.path && basketItem?.offer?.id === item.id)} // @TODO: Tidy this
          primaryColor={props.primaryColor__limio_color}
          offerOverflowLayout={props.offerOverflowLayout}
          removeFromBasket={item => LimioPageContext.shop.removeFromBasket(item)}
          imageShape={props.imageShape}
          imagePosition={props.imagePosition}
          showAllImages={props.showAllImages}
          showLearnMore={props.showLearnMore}
          shadow={props.shadow}
          border={props.border}
          roundCorners={props.roundCorners}
          learnMoreText={props.learnMoreText}
          setUseTransform={setUseTransform}
          useTransform={props.mobileSwipe ? useTransform : false}
          invertCTA={props.invertCTA}
          thumbnailPosition={props.thumbnailPosition}
          productSelectText={props.productSelectText}
          offerWidth={props.offerWidth}
          removeText={props.removeText}
          redirectUrl={redirect_url}
        />
      )
    })
  }

  return (
    <div id={props.componentId || "offers-component"} className="offers py-2 container-fluid">
      <Alert
        color="info"
        variant={"warning"}
        isOpen={showTrialAlert}
        toggle={() => setShowTrialAlert(false)}
        text={props.ineligibleMessage}
        style={{ margin: "1em" }}
      >
        {props.ineligibleMessage}
      </Alert>
      <div className="container mb-2">
        {props.splitByGroups ? (
          offerGroups ? (
            offerGroups.map(({ id: groupName, label: groupLabel, offer: groupItems }) => (
              <div className="offer-group-container" key={groupName}>
                <h2 className="offer-group-heading">{groupLabel}</h2>
                <>
                  <div className={`offer-container card-deck mt-4 text-center ${props.layout}`} style={{ alignItems: props.offerOverflowLayout }}>
                    {renderPriceCards(groupItems)}
                  </div>
                  <MobileOffers items={groupItems} {...props}>
                    {renderPriceCards(groupItems)}
                  </MobileOffers>
                </>
              </div>
            ))
          ) : (
            <>
              <div className={`offer-container card-deck mt-4 text-center ${props.layout}`} style={{ alignItems: props.offerOverflowLayout }}>
                <div className="no-offers mb-5">No offers to display...</div>
              </div>
              <div className={`offer-container mobile card-deck mt-4 text-center ${props.layout}`} style={{ alignItems: props.offerOverflowLayout }}>
                <div className="no-offers mb-5">No offers to display...</div>
              </div>
            </>
          )
        ) : (
          <>
            <div className={`offer-container card-deck mt-5 text-center ${props.layout}`} style={{ alignItems: props.offerOverflowLayout }}>
              {renderPriceCards()}
            </div>
            <MobileOffers items={offerItems} {...props}>
              {renderPriceCards()}
            </MobileOffers>
          </>
        )}
      </div>
    </div>
  )
}

export default Offers
