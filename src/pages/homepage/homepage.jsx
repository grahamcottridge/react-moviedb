import React, { useState, useEffect } from "react";

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";

import Grid from "../../components/grid/grid.component";
import HeroImage from "../../components/hero-image/hero-image.component";
import LoadMoreBtn from "../../components/load-more-btn/load-more-btn.component";
import MovieThumb from "../../components/movie-thumb/movie-thumb.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import Spinner from "../../components/spinner/spinner.component";

import { useHomeFetch } from "../../hooks/useHomeFetch";

const HomePage = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);

  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default HomePage;
