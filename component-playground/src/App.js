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
import Section from "../../components/section";
import { LimioProvider } from "@limio/sdk";
import "./App.css";

const props = {
  bgColor__limio_color: "#ECECEC",
  wrapperBgColor__limio_color: "#FFFFFF",
  image: "https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png",
  imageShape: "Rounded",
  header: "Test",
  text__limio_richtext: "Test",
  reverse: "test",
  imageCaption__limio_richtext: "test",
  showButtons: true,
  buttons: [
    { buttonText: "test", buttonLocation: "http://limio.com" },
    { buttonText: "test", buttonLocation: "https://limio.com" },
  ],
  imagePosition: "Right",
  secondaryTextImage: "",
  componentId: "test",
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
    Section,
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
