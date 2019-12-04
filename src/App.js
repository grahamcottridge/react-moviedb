import React from "react";

import { GlobalStyle } from "./global-styles";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage";

const App = () => (
  <>
    <Header />
    <HomePage />
    <GlobalStyle />
  </>
);

export default App;
