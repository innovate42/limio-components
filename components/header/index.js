import React from "react";
import "./index.css";
import { useComponentStaticProps } from "./componentStaticProps";

type Props = {
  logo: string,
  componentId: string,
};

export default function Header({ logo, componentId }) {
  // const { logo, componentId } = useComponentStaticProps();
  return (
    <div className="header" id={componentId}>
      <a href="/">
        <img className="logo" src={logo}></img>
      </a>
    </div>
  );
}
