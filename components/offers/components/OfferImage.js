// @flow
import React, { useState } from "react"
import { useLimio } from "@limio/sdk"

export const OfferImage = ({ attachments = [], showAllImages, imageShape, thumbnailPosition }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const LimioPageContext = useLimio()
  const showArrows = showAllImages && attachments.length > 1

  const handleNext = () => {
    const new_index = currentImage === attachments.length - 1 ? 0 : currentImage + 1
    setCurrentImage(new_index)
  }

  const handleBack = () => {
    const new_index = currentImage === 0 ? attachments.length - 1 : currentImage - 1
    setCurrentImage(new_index)
  }

  return (
    <div className={"offer-images"}>
      <div
        className={`offer-img ${imageShape}`}
        style={{
          backgroundImage: `url("${LimioPageContext.endpoint ? LimioPageContext.endpoint : ""}${encodeURI(attachments[currentImage].url)}")`
        }}
        alt="offerImg"
      >
        {showArrows && (
          <>
            <div className="offer-img-arrow" onClick={() => handleBack()}>
              <div className="offer-img-arrow-icon">
                <span className="chevron left"></span>
              </div>
            </div>
            <div className="offer-img-arrow right" onClick={() => handleNext()}>
              <div className="offer-img-arrow-icon">
                <span className="chevron right"></span>
              </div>
            </div>
          </>
        )}
      </div>
      {showAllImages && (
        <div className={`image-thumbnails${attachments.length <= 1 ? " hidden" : ""} ${thumbnailPosition}`}>
          {attachments.map((attachment, index) => (
            <div
              key={index}
              className={`image-thumbnail${index === currentImage ? " current" : ""}`}
              style={{ backgroundImage: `url("${LimioPageContext.endpoint ? LimioPageContext.endpoint : ""}${encodeURI(attachment.url)}")` }}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
