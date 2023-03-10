// @flow
import React, { useState } from "react";
import { sanitizeString } from "@limio/utils/string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLimio } from "@limio/sdk";
import { formatDisplayPrice } from "@limio/utils/string";

const Offer = ({
  offer,
  maxCards,
  external_pricing_link_default,
  external_pricing_text_default,
  showOfferImages,
  width,
  alignItems,
  ineligibleMessage,
  hideCardBreak,
  includedFeaturesTitle,
  cardAlignment,
  alwaysMinimise,
}) => {
  const {
    display_name__limio,
    display_price__limio,
    display_equivalent_price,
    detailed_display_price__limio,
    cta_text__limio,
    offer_features__limio,
    external_pricing_link,
    external_pricing_text,
    best_value__limio,
    display_description__limio,
    price__limio,
  } = offer.data.attributes;

  const offerImage = offer.data.attachments
    ? offer.data.attachments.find((x) => x.type.includes("image"))
    : [];

  const [featuresOpen, setFeaturesOpen] = useState(false);
  const {
    shop: { addToBasket },
  } = useLimio();

  const cardStyles = maxCards
    ? {
        flexGrow: 1,
        flexShrink: 0,
        width: `calc(${parseInt(100 / maxCards) - 1}% - 40px)`,
        maxWidth: `calc(${parseInt(100 / maxCards) - 1}% - 40px)`,
        alignSelf: alignItems,
        marginBottom: "1em",
      }
    : { width: `${width * 100}px`, alignSelf: alignItems };

  return (
    <div
      data-testid="offer"
      className={`offer_cards__card ${best_value__limio ? "best_value" : ""} ${
        alwaysMinimise ? "always_minimise" : ""
      }`}
      key={offer.path + "/child"}
      style={cardStyles}
      // eslint-disable-next-line react/no-unknown-property -- No idea if this should be here
      text={ineligibleMessage}
    >
      {/* Top right pill for best value offer */}
      {best_value__limio && (
        <p data-testid="best_value" className="offer_cards__best_value">
          {display_description__limio || "Best Value"}
        </p>
      )}

      <div className={`offer_cards__content ${cardAlignment}`}>
        {showOfferImages && (
          <div className={"offer_cards__image"}>
            <img src={offerImage.url} alt={""} />
          </div>
        )}
        <div className="offer_cards__text">
          <h2 data-testid="heading" className="offer_cards__heading">
            {display_name__limio}
          </h2>

          <div
            data-testid="display_price"
            className="offer_cards__price"
            dangerouslySetInnerHTML={{
              __html: sanitizeString(
                formatDisplayPrice(display_price__limio, [
                  {
                    currencyCode: price__limio[0].currencyCode,
                    value: price__limio[0].value,
                  },
                ])
              ),
            }}
          />
          <p data-testid="equivalent_price" className="offer_cards__equivalent">
            {display_equivalent_price}
          </p>
          <div
            data-testid="detailed_display_price"
            className="offer_cards__detailed_price"
            dangerouslySetInnerHTML={{
              __html: sanitizeString(
                formatDisplayPrice(detailed_display_price__limio, [
                  {
                    currencyCode: price__limio[0].currencyCode,
                    value: price__limio[0].value,
                  },
                ])
              ),
            }}
          />

          {/* Wrapped features and cta in div as the order needs to flip on mobile */}
          <div className="offer_cards__button_features_wrapper">
            <button
              data-testid="cta"
              className="offer_cards__button ds-button"
              onClick={() => addToBasket(offer)}
            >
              {cta_text__limio || "Subscribe"}
            </button>

            <div className="offer_cards__included_wrapper">
              {/* Rule for stacked view only */}
              {offer_features__limio && (
                <>
                  <hr className="offer_cards__feature_rule ds-rule" />
                  <button
                    data-testid="whats_included_toggle"
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                    className={`offer_cards_included ${
                      featuresOpen ? "open" : "closed"
                    }`}
                  >
                    <p>{includedFeaturesTitle}</p>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                  <div
                    data-testid="features"
                    className="offer_cards__features"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeString(offer_features__limio),
                    }}
                  />
                  {/* Rule for stacked view only */}
                  <hr className="offer_cards__feature_rule ds-rule" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rule for 3 card row view */}
      {!hideCardBreak && <hr className="offer_cards__end_rule ds-rule" />}

      {(external_pricing_text || external_pricing_text_default) && (
        <div className="offer_cards__end">
          <a
            data-testid="external_link"
            className="offer_cards__cta ds-pagination__nav-link"
            href={external_pricing_link || external_pricing_link_default}
            target="_top"
          >
            {external_pricing_text || external_pricing_text_default}
          </a>
        </div>
      )}
    </div>
  );
};

export default Offer;
