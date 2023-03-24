import React from "react";
import "./index.css";
import { StaticImage } from "@limio/sdk/src/components/";
// import { useComponentStaticProps } from "./componentStaticProps";

const bannerStyle = (bgColor) => ({
  backgroundColor: `${bgColor}`,
});

const wrapperStyle = (wrapperBgColor) => ({
  backgroundColor: `${wrapperBgColor}`,
});

const textContainerStyle = (image) => ({
  width: !image ? "100%" : "60%",
  marginTop: !image ? "3rem" : null,
});

type Props = {
  bgColor__limio_color: string,
  wrapperBgColor__limio_color: string,
  componentId: string,
  image: string,
  imageShape: string,
  imagePosition: string,
  imageCaption__limio_richtext: string,
  showButtons: boolean,
  buttons: Array<{
    buttonText: string,
    buttonLocation: string,
  }>,
  header: string,
  text__limio_richtext: string,
  secondaryTextImage: string,
  componentId: string,
};

export default function Section(props: Props): React.Node {
  //   const {
  //     bgColor__limio_color,
  //     wrapperBgColor__limio_color,
  //     image,
  //     imageShape,
  //     header,
  //     text__limio_richtext,
  //     reverse,
  //     imageCaption__limio_richtext,
  //     showButtons,
  //     buttons,
  //     imagePosition,
  //     secondaryTextImage,
  //     componentId,
  //   } = useComponentStaticProps();

  const {
    bgColor__limio_color,
    wrapperBgColor__limio_color,
    image,
    imageShape,
    header,
    text__limio_richtext,
    reverse,
    imageCaption__limio_richtext,
    showButtons,
    buttons,
    imagePosition,
    secondaryTextImage,
    componentId,
  } = props;

  return (
    <div
      className="Section"
      id={componentId}
      style={bannerStyle(bgColor__limio_color)}
    >
      <div
        className={`SectionWrapper ${imagePosition}`}
        style={wrapperStyle(wrapperBgColor__limio_color, reverse)}
      >
        {image && (
          <div className="ImageContainer">
            <StaticImage src={image} className={`Image ${imageShape}`} />
            {imageCaption__limio_richtext && (
              <div
                className="ImageCaption"
                dangerouslySetInnerHTML={{
                  __html: imageCaption__limio_richtext,
                }}
              />
            )}
          </div>
        )}
        <div className="BodyContainer">
          <div className="TextContainer" style={textContainerStyle(image)}>
            {secondaryTextImage?.length > 0 && (
              <div className="ImageContainer TextImage ">
                <img src={secondaryTextImage} className="Image" />
              </div>
            )}
            {header && (
              <h2 className="Header" data-limio-prop="header">
                {header}
              </h2>
            )}
            {text__limio_richtext && (
              <div
                className="Text"
                data-limio-prop="text__limio_richtext"
                dangerouslySetInnerHTML={{
                  __html: text__limio_richtext,
                }}
              />
            )}
          </div>
          {showButtons && (
            <div className="ButtonsContainer">
              {buttons.map(({ buttonText, buttonLocation }, index) => (
                <a key={index} href={buttonLocation}>
                  <button>{buttonText}</button>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
