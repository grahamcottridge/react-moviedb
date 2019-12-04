import React from "react";

import { StyledLoadMoreBtn } from "./load-more-btn.styles";

const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
);
export default LoadMoreBtn;
