import React from "react";
import ReactDOM from "react-dom";
import { SearchProvider } from "./context/searchContext";

import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
    <App />
    </SearchProvider>
  </React.StrictMode>,
  rootElement
);
