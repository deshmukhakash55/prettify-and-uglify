import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = () => (
  <Menus>
    <Link to="/prettify-json">Prettify JSON</Link>
    <Link to="/uglify-json">Uglify JSON</Link>
  </Menus>
);

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-right: 1px solid #545e70;
  height: 100%;
  padding: 1rem;
`;
