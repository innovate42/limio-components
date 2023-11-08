import React from "react";
import "./index.css";

const headingStyle = (color, weight) => ({
  color,
  fontWeight: weight,
});

const subheadingStyle = (color, weight) => ({
  color,
  fontWeight: weight,
});

type Props = {
  heading: string,
  headingColor__limio_color: string,
  headingWeight: string,
  subheading: string,
  subheadingColor__limio_color: string,
  subheadingWeight: string,
  componentId: string,
};

export default function Headings({
  heading,
  headingColor__limio_color,
  headingWeight,
  subheading,
  subheadingColor__limio_color,
  subheadingWeight,
  componentId,
}: Props) {

  return (
    <div className="Headings" id={componentId}>
      <div className="HeadingsWrapper">
        {heading?.length > 0 && (
          <h2 style={headingStyle(headingColor__limio_color, headingWeight)}>
            {heading}
          </h2>
        )}
        {subheading?.length > 0 && (
          <h3
            style={subheadingStyle(
              subheadingColor__limio_color,
              subheadingWeight
            )}
          >
            {subheading}
          </h3>
        )}
      </div>
    </div>
  );
}
