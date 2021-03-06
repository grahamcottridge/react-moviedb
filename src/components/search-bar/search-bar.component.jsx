import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import FontAwesome from "react-fontawesome";

import { StyledSearchBar, StyledSearchBarContent } from "./search-bar.styles";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const onSearch = event => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 250);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search Movies"
          onChange={onSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func
};

export default SearchBar;
