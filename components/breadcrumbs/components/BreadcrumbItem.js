//@flow
import React from "react";
import "../index.css";

type Props = {
  breadcrumb: { text: string, url: string },
  isLast: boolean,
  props: {
    dividers: boolean,
    dividerColor: string,
    linkUnderline: boolean,
  },
};

const formatUrl = (url) => {
  const params = new URL(window.location).searchParams;
  const subId = params.get("subId");

  if (subId) {
    return `${url}?subId=${params.get("subId")}`;
  } else {
    return url;
  }
};

const BreadcrumbItem = ({
  breadcrumb,
  isLast,
  props: { dividerColor, dividers, linkUnderline },
}: Props) => {
  return (
    <>
      <a href={formatUrl(breadcrumb.url)} className="Breadcrumb">
        <p style={{ borderBottom: linkUnderline ? `1px solid` : "none" }}>
          {breadcrumb?.text}
        </p>
      </a>
      {dividers && !isLast ? (
        <span
          style={{ color: dividerColor }}
          className="breadcrumb__divider"
        >
          {"/"}
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default BreadcrumbItem;
