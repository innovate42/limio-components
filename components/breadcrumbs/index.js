//@flow
import React from "react";
import BreadcrumbItem from "./components/BreadcrumbItem";
import "./index.css";

type Props = {
  linkUnderline: boolean,
  header: string,
  dividers: boolean,
  dividerColor: string,
  dividerWeight: string,
  breadcrumbs: Array<BreadcrumbItemProps>,
  componentId: string,
};

type BreadcrumbItemProps = {
  text: string,
  url: string,
};

export default function Breadcrumbs(props: Props) {
  const { breadcrumbs, componentId, header } = props;

  function isLast(index) {
    return index === breadcrumbs.length - 1;
  }

  return (
    <div className="BreadcrumbList" id={componentId}>
      {header?.length > 0 && (
        <span className="BreadcrumbListHeader">{header}</span>
      )}
      <div className="BreadcrumbListWrapper">
        <div className="Breadcrumbs">
          {breadcrumbs.map((breadcrumb, i) => {
            return (
              <BreadcrumbItem
                key={JSON.stringify(breadcrumb)}
                breadcrumb={breadcrumb}
                isLast={isLast(i)}
                props={props}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
