// @flow
import React from "react";
import { Button } from "@limio/design-system";
import { StaticImage } from "@limio/sdk/src/components";
import "./index.css";

type Props = {
  header: string,
  subheader: string,
  squareTheme: Boolean,
  imageFit: string,
  features: Array<{
    image: string,
    header: string,
    text:  string,
    showButton: boolean,
    buttonText: string,
    buttonLink: string
  }>,
  componentId: string,
};

export const Features = ({
  header,
  subHeader,
  features = [],
  imageFit,
  componentId,
  squareTheme,
}: Props) => {

  return (
    <div
      className={`Features ${squareTheme ? "square-theme" : ""}`}
      id={componentId}
    >
      <div className={`FeaturesWrapper`}>
        {header && (
          <h2
            data-limio-prop="header"
            className={`FeaturesHeader ${subHeader ? " mainHeader" : ""}`}
          >
            {header}
          </h2>
        )}
        {subHeader && (
          <h3 data-limio-prop="subHeader" className="FeaturesHeader subHeader">
            {subHeader}
          </h3>
        )}
        <div
          className={`FeaturesContainer`}
          data-testid="FeaturesContainer"
        >
          {features.map((feature, i) => (
            <div
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
              {feature.showButton && feature.buttonLink && (
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
      </div>
    </div>
  );
};

export default Features;
