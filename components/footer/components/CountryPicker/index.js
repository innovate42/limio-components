// @flow
import React, { useState } from "react"
import type { CountryPickerProps } from "../../types"
import "./country-select.css"

const CountryPicker = ({ countries, selected }: CountryPickerProps) => {
  const [countryPickerOpen, setCountryPickerOpen] = useState(false)

  return (
    <div className="country-picker">
      <div className="country-select">
        <div className="country-selected" onClick={() => setCountryPickerOpen(!countryPickerOpen)}>
          <span className={`country-icon flag ${selected.countryCode.toLowerCase()}`} />
          <p className="country-label">{selected.label}</p>
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 255 255">
            <g id="arrow-drop-up">
              <polygon points="0,191.25 127.5,63.75 255,191.25" />
            </g>
          </svg>
        </div>
        {countryPickerOpen && (
          <div className="country-selection">
            {countries.map(
              country =>
                country.countryCode !== selected.countryCode && (
                  <a className="country-link" href={country.link} key={country.countryCode}>
                    <span className={`country-icon flag ${country.countryCode.toLowerCase()}`} />
                    <p className="country-label">{country.label}</p>
                  </a>
                )
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CountryPicker
