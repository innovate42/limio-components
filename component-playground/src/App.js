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
import Breadcrumbs from "../../components/breadcrumbs";
import { LimioProvider } from "@limio/sdk";
import "./App.css";

const props = {
  linkUnderline: false,
  dividers: true,
  dividerColor__limio_color: "#000000",
  header: "my Account",
  breadcrumbs: [
    { text: "Manage My Account", url: "/mma" },
    { text: "Cancel", url: "/cancel" },
    { text: "Change Payment Method", url: "/change-payment" },
  ],
  componentId: "breadcrumbs-limio",
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
    Breadcrumbs,
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
