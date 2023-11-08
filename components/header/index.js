// @flow
import React from "react";
import "./index.css";

type Props = {
  logo: string,
  componentId: string,
};

export default function Header({ logo, componentId }: Props) {

  return (
    <div className="header" id={componentId}>
      <a href="/">
        <img className="logo" src={logo}></img>
      </a>
    </div>
  );
}
