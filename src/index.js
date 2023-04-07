import React from "react";
import ReactDOM from "react-dom/client";
import { SearchProvider } from "./context/searchContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
     <SearchProvider>
    <App />
    </SearchProvider>
  </React.StrictMode>
);

