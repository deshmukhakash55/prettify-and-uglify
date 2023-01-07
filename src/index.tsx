import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App/App";

import "./index.css";

const rootNode = document.getElementById("root");

if (rootNode) {
  const root = createRoot(rootNode);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
