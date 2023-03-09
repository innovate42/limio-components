// @flow
import React from "react"
import type { LogoProps } from "../../types"

const Logo = ({ logo, logoSize }: LogoProps) => (
  <img
    src={logo}
    alt="logo"
    className="FooterLogo"
    style={{
      width: `${logoSize}em`
    }}
  />
)

export default Logo
