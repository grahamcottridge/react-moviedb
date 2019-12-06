import React from "react";
import PropTypes from "prop-types";

import { StyledGrid, StyledGridContent } from "./grid.styles";

const Grid = ({ header, children }) => (
  <StyledGrid>
    <h1>{header.toUpperCase()}</h1>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
);

Grid.propTypes = {
  header: PropTypes.string
};

export default Grid;
