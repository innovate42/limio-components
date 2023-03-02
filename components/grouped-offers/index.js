// @flow
import * as React from "react"
import { useMemo, useState } from "react"
import { useLimio } from "@limio/sdk"
import { getCookie } from "@limio/utils/cookie"
import { groupOffers } from "@limio/utils/offers"
import type { Group } from "@limio/types/offers"
import OfferGroup from "./components/OfferGroup.js"
import "./index.css"

type Props = {
  ineligibleHeading: string,
  ineligibleMessage: string,
  componentId: string,
  fullPriceUrl: string,
  fullPriceLabel: string,
  groupLabels: Group[],
  bestValueText: string,
  buttonText: string,
  buttonUrl: string,
  preselectFirstOfferInGroup: boolean
}

export function GroupedOffers({
                                ineligibleHeading, 
                                ineligibleMessage,
                                componentId,
                                fullPriceUrl,
                                fullPriceLabel,
                                groupLabels = [],
                                bestValueText,
                                buttonText,
                                buttonUrl,
                                preselectFirstOfferInGroup
                              }: Props): React.Node {
  const {
    shop: { offers }
  } = useLimio()
  const offerEligibility = getCookie("limio-invalid")

  // i'm pretty sure offers is awalys defined
  const offerItems = useMemo(() => {
    const filterTrial = offerEligibility.includes("trial")

    if (filterTrial) {
      const filteredOffers = offers.filter(offer => offer?.data?.attributes?.trial__limio !== true)
      return filteredOffers
    }

    return offers
  }, [offers, offerEligibility])

  const offerGroups = useMemo(() => {
    return groupOffers(offerItems, groupLabels)
  }, [offerItems, groupLabels])

  const [selectedGroup, setSelectedGroup] = useState(preselectFirstOfferInGroup ? offerGroups.map(group => group.groupId) : [offerGroups[0].groupId])

  return (
      <div id={componentId || "grouped-offers-component"} className="grouped-offers">
        <div className={`offer-trial-alert`}>
          {offerEligibility.includes("trial") && (
              <>
                <h2>{ineligibleHeading || "Please pick another offer"}</h2>
                <h3>
                  {ineligibleMessage || "You’ve already used your free trial."}
                  {fullPriceUrl ? <a href={fullPriceUrl}>{fullPriceLabel || "here"}</a> : ""}
                </h3>
              </>
          )}
        </div>
        <div className="grouped-offers-wrapper">
          {offerGroups.map((offerGroup, index) => {
            const { groupId, id, label, offers, thumbnail } = offerGroup

            return (
                <OfferGroup
                    key={`offer-group-${index}`}
                    groupId={groupId}
                    id={id}
                    label={label}
                    offers={offers}
                    bestValueText={bestValueText}
                    buttonText={buttonText}
                    buttonUrl={buttonUrl}
                    thumbnail={thumbnail}
                    preselectFirstOfferInGroup={preselectFirstOfferInGroup}
                    selectedGroup={selectedGroup}
                    setSelectedGroup={setSelectedGroup}
                />
            )
          })}
        </div>
      </div>
  )
}

GroupedOffers.whyDidYouRender = true

export default GroupedOffers
