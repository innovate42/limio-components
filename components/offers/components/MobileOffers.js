import React, { useState } from "react"

export const MobileOffers = ({ items = [], mobileArrows, mobileArrowsColor, mobileSwipe, useTransform, children, layout, offerOverflowLayout }) => {
  const [offerIndex, setOfferIndex] = useState(0)
  const [position, setPosition] = useState({
    startX: 0,
    startY: 0,
    currentX: 0
  })
  const threshold = 50

  const offerBack = () => {
    setOfferIndex(offerIndex !== 0 ? offerIndex - 1 : items.length - 1)
  }

  const offerForward = () => {
    setOfferIndex(offerIndex < items.length - 1 ? offerIndex + 1 : 0)
  }

  const handleNext = () => {
    if (mobileSwipe) {
      const new_index = offerIndex === items.length - 1 ? 0 : offerIndex + 1

      setOfferIndex(new_index)
    }
  }

  const handleBack = () => {
    if (mobileSwipe) {
      const new_index = offerIndex === 0 ? items.length - 1 : offerIndex - 1

      setOfferIndex(new_index)
    }
  }

  const touchStart = e => {
    if (mobileSwipe) {
      const touchObj = e.touches[0]
      setPosition({
        startX: touchObj.clientX,
        startY: touchObj.clientY,
        currentX: touchObj.clientX
      })
    }
  }

  const touchMove = e => {
    if (mobileSwipe) {
      const touchObj = e.touches[0]
      setPosition({
        ...position,
        currentX: touchObj.clientX
      })
    }
  }

  const touchEnd = () => {
    if (mobileSwipe) {
      if (Math.abs(position.startX - position.currentX) > threshold) {
        position.startX > position.currentX ? handleNext() : handleBack()
      }
    }
  }

  const mobileStyle =
    mobileSwipe && useTransform
      ? {
          transform: `translateX(calc(-${offerIndex * 100}% - ${offerIndex * 3.75}em))`
        }
      : {}

  return (
    <>
      <div
        className={`offer-container mobile ${mobileSwipe ? "swipe" : ""} ${useTransform ? "" : "no-transition"} card-deck mt-4 text-center ${layout}`}
        style={{
          alignItems: offerOverflowLayout,
          ...mobileStyle
        }}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {children}
      </div>

      {/* Mobile offer arrows */}
      {mobileSwipe && items.length > 1 && (
        <>
          {mobileArrows && (
            <div className="offer-arrows container" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
              <svg onClick={offerBack} viewBox="0 0 284.935 284.936">
                <path
                  d="M110.488,142.468L222.694,30.264c1.902-1.903,2.854-4.093,2.854-6.567c0-2.474-0.951-4.664-2.854-6.563L208.417,2.857   C206.513,0.955,204.324,0,201.856,0c-2.475,0-4.664,0.955-6.567,2.857L62.24,135.9c-1.903,1.903-2.852,4.093-2.852,6.567   c0,2.475,0.949,4.664,2.852,6.567l133.042,133.043c1.906,1.906,4.097,2.857,6.571,2.857c2.471,0,4.66-0.951,6.563-2.857   l14.277-14.267c1.902-1.903,2.851-4.094,2.851-6.57c0-2.472-0.948-4.661-2.851-6.564L110.488,142.468z"
                  data-original="#000000"
                  className="active-path"
                  data-old_color="#000000"
                  fill={mobileArrowsColor}
                />
              </svg>
              <svg onClick={offerForward} viewBox="0 0 284.935 284.936">
                <path
                  d="M222.701,135.9L89.652,2.857C87.748,0.955,85.557,0,83.084,0c-2.474,0-4.664,0.955-6.567,2.857L62.244,17.133   c-1.906,1.903-2.855,4.089-2.855,6.567c0,2.478,0.949,4.664,2.855,6.567l112.204,112.204L62.244,254.677   c-1.906,1.903-2.855,4.093-2.855,6.564c0,2.477,0.949,4.667,2.855,6.57l14.274,14.271c1.903,1.905,4.093,2.854,6.567,2.854   c2.473,0,4.663-0.951,6.567-2.854l133.042-133.044c1.902-1.902,2.854-4.093,2.854-6.567S224.603,137.807,222.701,135.9z"
                  data-original="#000000"
                  className="active-path"
                  data-old_color="#000000"
                  fill={mobileArrowsColor}
                />
              </svg>
            </div>
          )}
          <div className="offer-steps">
            {items.map((offer, index) => (
              <div
                className={`offer-step${index === offerIndex ? " current-offer-step" : ""}`}
                key={JSON.stringify(offer) + index}
                onClick={() => setOfferIndex(index)}
              >
                &#x25CF;
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default MobileOffers
