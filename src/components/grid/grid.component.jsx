import React from "react";

import { StyledGrid, StyledGridContent } from "./grid.styles";

const Grid = ({ header, children }) => (
  <StyledGrid>
    <h1>{header.toUpperCase()}</h1>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
);

export default Grid;
