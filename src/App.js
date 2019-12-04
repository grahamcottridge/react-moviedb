import React from "react";
import { Router } from "@reach/router";

import { GlobalStyle } from "./global-styles";

import Header from "./components/header/header.component";
import Home from "./pages/home/home";
import Movie from "./pages/movie/movie";
import NotFound from "./pages/not-found/not-found";

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
