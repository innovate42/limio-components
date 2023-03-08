// @flow
import React, { useState } from "react";
import { ComponentSelector } from "./ComponentSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { ErrorBoundary } from "./ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header as PageHeader } from "./Header";
import { Provider } from "react-redux";
import { createStore } from "redux";
import GroupedOffers from "../../components/grouped-offers";
import Header from "../../components/header";
import Headings from "../../components/heading";
import { LimioProvider } from "@limio/sdk";
import "./App.css";

const logo = "https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png";
const componentId = "header-limio";

function createLocalStore(initialState) {
  const store = createStore((x) => x, {});
  return store;
}

const appStore = createLocalStore({ appConfig: { mode: "production" } });

function App() {
  let params = new URL(document.location).searchParams;

  const [user, setUser] = useState({});
  const [endpoint, setEndpoint] = useState(
    params.get("endpoint") || "https://localhost:9002"
  );
  const [key, setKey] = useState(0);
  const [selectedComponents, setSelectedComponents] = useState([
    Header,
    Headings,
    GroupedOffers,
  ]);

  return (
    <div>
      <PageHeader
        onSetUser={setUser}
        endpoint={endpoint}
        setEndpoint={setEndpoint}
      >
        <ComponentSelector
          onSelect={setSelectedComponents}
          components={[]}
          selectedComponents={selectedComponents}
        />
        <button
          className="btn"
          onClick={() => {
            setKey(key + 1);
          }}
        >
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </PageHeader>

      <div>
        <ErrorBoundary>
          <LimioProvider key={key}>
            {selectedComponents.map((Component, i) => (
              <Provider store={appStore}>
                <Component
                  key={i}
                  logo={logo}
                  componentId={componentId}
                  heading={"Test"}
                  headingColor__limio_color={"#444444"}
                  headingWeight={"700"}
                  subheading={"SubHeading Test"}
                  subheadingColor__limio_color={"#444444"}
                  subheadingWeight={"400"}
                />
              </Provider>
            ))}
          </LimioProvider>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
