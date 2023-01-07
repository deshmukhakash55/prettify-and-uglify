import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App/App";

const rootNode = document.getElementById("main");

(window as any).renderJsonUglify = () => {
  if (!!rootNode) {
    const root = createRoot(rootNode);
    root.render(<App />);

    (window as any).unmountJsonUglify = () => root.unmount();
  }
};
