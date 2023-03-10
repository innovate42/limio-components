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
import OfferCards from "../../components/offer-cards";
import { LimioProvider } from "@limio/sdk";
import "./App.css";

const props = {
  external_pricing_link: "/long-term",
  external_pricing_text: "View multi-year pricing",
  offerWidth: 3,
  offerOverflowLayout: "stretch",
  ineligibleMessage:
    "You are not eligible for a trial offer. Please select a different offer to continue.",
  includedFeaturesTitle: "Whats Included?",
  groupLabels: [
    {
      id: "digital",
      label: "Digital",
    },
    {
      id: "bundle",
      label: "Print + Digital",
    },
  ],
  maxCards: "",
  showOfferImages: false,
  offerGrouping: false,
  alwaysMinimise: false,
  hideCardBreak: false,
  cardAlignment: "vertical",
};

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
    OfferCards,
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
                <Component key={i} {...props} />
              </Provider>
            ))}
          </LimioProvider>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
