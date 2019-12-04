import React from "react";

import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from "./header.styles";

import RMDBLogo from "../../images/reactMovie_logo.png";
import TMDBLogo from "../../images/tmdb_logo.svg";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
      <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
    </div>
  </StyledHeader>
);

export default Header;
