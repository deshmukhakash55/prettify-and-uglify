import React from "react";
import { Route, Routes } from "react-router-dom";
import { JsonPrettify } from "../JsonPrettify/JsonPrettify";
import { JsonUglify } from "../JsonUglify/JsonUglify";
import { Menu } from "../Menu/Menu";

export const App = () => (
  <>
    <Menu />
    <Routes>
      <Route path="/prettify-json" element={<JsonPrettify />} />
      <Route path="/uglify-json" element={<JsonUglify />} />
    </Routes>
  </>
);
