import * as React from "react"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

import { cn } from "../util/"

export interface IconProps extends FontAwesomeIconProps {}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(({className, ...props}, ref) => (
  <FontAwesomeIcon ref={ref} className={cn("", className)} {...props} />
))

export { Icon }