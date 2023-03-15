// @flow
import React, { useState } from "react";
import { Button } from "@limio/design-system";
import "./index.css";
//import { sendGoogleAnalyticsEvent } from "@i42/shared/src/shop/helpers/analytics"
// import { useAppConfig } from "@i42/shared/src/components/helpers.js";
import { StaticImage } from "@limio/sdk/components";

export const ArrowIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="chevron-right"
    className="svg-inline--fa fa-chevron-right fa-w-10"
    role="img"
    viewBox="0 0 320 512"
  >
    <path
      fill={color}
      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
    />
  </svg>
);

type Props = {
  header: string,
  subheader: string,
  mobileSwipe: boolean,
  showSwipeArrows: boolean,
  arrowColor__limio_color: string,
  squareTheme: Boolean,
  imageFit: string,
  features: Array,
  componentId: string,
};

export const Features = ({
  header,
  subHeader,
  features = [],
  mobileSwipe,
  imageFit,
  showSwipeArrows,
  arrowColor__limio_color,
  componentId,
  squareTheme,
}) => {
  const [featureIndex, setFeatureIndex] = useState(0);
  const [position, setPosition] = useState({
    startX: 0,
    startY: 0,
    currentX: 0,
  });

  const threshold = 50;

  const handleNext = () => {
    if (mobileSwipe) {
      const new_index =
        featureIndex === features.length - 1 ? 0 : featureIndex + 1;
      setFeatureIndex(new_index);
    }
  };

  const handleBack = () => {
    if (mobileSwipe) {
      const new_index =
        featureIndex === 0 ? features.length - 1 : featureIndex - 1;
      setFeatureIndex(new_index);
    }
  };

  const touchStart = (e) => {
    if (mobileSwipe) {
      const touchObj = e.touches[0];
      setPosition({
        startX: touchObj.clientX,
        startY: touchObj.clientY,
        currentX: touchObj.clientX,
      });
    }
  };

  const touchMove = (e) => {
    if (mobileSwipe) {
      const touchObj = e.touches[0];
      setPosition({
        ...position,
        currentX: touchObj.clientX,
      });
    }
  };

  const touchEnd = () => {
    if (mobileSwipe) {
      if (Math.abs(position.startX - position.currentX) > threshold) {
        position.startX > position.currentX ? handleNext() : handleBack();
      }
    }
  };

  return (
    <div
      className={`Features ${squareTheme ? "square-theme" : ""}`}
      id={componentId}
    >
      <div className={`FeaturesWrapper ${mobileSwipe ? " mobile-swipe" : ""}`}>
        {header?.length > 0 && (
          <h2
            data-limio-prop="header"
            className={`FeaturesHeader ${subHeader ? " mainHeader" : ""}`}
          >
            {header}
          </h2>
        )}
        {subHeader?.length > 0 && (
          <h3 data-limio-prop="subHeader" className="FeaturesHeader subHeader">
            {subHeader}
          </h3>
        )}
        {mobileSwipe && showSwipeArrows && (
          <div className="swipe-arrows-container">
            <div
              data-testid="arrowBack"
              className="swipe-arrow back"
              onClick={() => handleBack()}
            >
              <ArrowIcon color={arrowColor__limio_color} />
            </div>
            <div
              data-testid="arrowNext"
              className="swipe-arrow next"
              onClick={() => handleNext()}
            >
              <ArrowIcon color={arrowColor__limio_color} />
            </div>
          </div>
        )}
        <div
          className={`FeaturesContainer`}
          style={{ transform: `translateX(calc(-${featureIndex * 100}%))` }}
          data-testid="FeaturesContainer"
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        >
          {features.map((feature, i) => (
            <div
              style={{ width: `calc(${100 / features.length}% - 3em)` }}
              className="Feature"
              key={feature.image + feature.header + i}
            >
              {feature.image !== "" ? (
                <StaticImage
                  src={feature.image}
                  alt={feature.header}
                  style={{ objectFit: imageFit }}
                />
              ) : null}
              <div className="FeatureTextWrapper">
                {feature.header && (
                  <h3 dangerouslySetInnerHTML={{ __html: feature.header }} />
                )}
                {feature.text && (
                  <p dangerouslySetInnerHTML={{ __html: feature.text }} />
                )}
              </div>
              {feature.showButton__limio_boolean && feature.buttonLink && (
                <a
                  onClick={() =>
                    (window.location =
                      feature.buttonLink + window.location.search)
                  }
                >
                  <Button
                    className="feature-button"
                    minor
                    type="link-with-arrow"
                    text={feature.buttonText}
                  >
                    {feature.buttonText}
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>
        {mobileSwipe && (
          <div className="feature-steps">
            {features.map((feat, index) => (
              <div
                className={`feature-step${
                  index === featureIndex ? " current-feature-step" : ""
                }`}
                key={JSON.stringify(feat) + index}
                onClick={() => setFeatureIndex(index)}
              >
                &#x25CF;
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
