// @flow
import React, { useEffect, useState } from "react";
import { NavTabs } from "@limio/design-system";
import { useCampaign } from "@limio/sdk";
import * as R from "ramda";
import { groupOffers } from "@limio/utils/offers";
import { checkActiveOffers } from "@limio/utils/offers";
import Offer from "./components/Offer.js";
import { useSelector } from "react-redux";
import "./index.css";

type Props = {
  external_pricing_link: string,
  external_pricing_text: string,
  offerWidth: string,
  offerOverflowLayout: string,
  ineligibleMessage: string,
  includedFeaturesTitle: string,
  groupLabels: Array<{ id: string, label: string }>,
  offerGrouping: boolean,
  maxCards: number | string,
  showOfferImages: boolean,
  cardAlignment: "vertical" | "horizontal",
  alwaysMinimise: boolean,
};

export const OfferCards = ({
  external_pricing_link,
  external_pricing_text,
  offerWidth,
  offerOverflowLayout,
  ineligibleMessage,
  includedFeaturesTitle,
  groupLabels,
  maxCards,
  showOfferImages,
  offerGrouping,
  alwaysMinimise,
  cardAlignment = "vertical",
}: Props) => {

  const { offers = [] } = useCampaign;

  useEffect(() => {
    typeof performance !== "undefined" && performance?.mark?.("offers-init");
  }, []);

  const renderGroupedOffers = () => {
    let offerGroups = groupOffers(offers, groupLabels);

    return (
      <NavTabs
        content={offerGroups}
        renderContent={(offerGroup) => {
          return renderOfferCards(offerGroup.offers, true);
        }}
        initialIndex={0}
      />
    );
  };

  const renderOfferCards = (offers, hideCardBreak = false) => (
    <div
      className={"offer_cards__wrapper"}
      style={{ flexWrap: maxCards ? "wrap" : undefined }}
    >
      {offers.length > 0 ? (
        offers.map((offer) => (
          <Offer
            showOfferImages={showOfferImages}
            ineligibleMessage={ineligibleMessage}
            alignItems={offerOverflowLayout}
            width={offerWidth}
            key={offer.path + "/parent"}
            offer={offer}
            maxCards={maxCards}
            alwaysMinimise={alwaysMinimise}
            external_pricing_link_default={external_pricing_link}
            external_pricing_text_default={external_pricing_text}
            hideCardBreak={hideCardBreak}
            includedFeaturesTitle={includedFeaturesTitle}
            cardAlignment={cardAlignment}
          />
        ))
      ) : (
        <p>No offers to display...</p>
      )}
    </div>
  );

  return (
    <section
      data-testid="section"
      className={`offer_cards__section ${offerGrouping ? "tabbed" : ""}`}
    >
      {offerGrouping ? renderGroupedOffers() : renderOfferCards(offers)}
    </section>
  );
};

export default OfferCards;
