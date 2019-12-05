import React from "react";

import Actor from "../../components/actor/actor.component";
import MovieInfo from "../../components/movie-info/movie-info.component";
import MovieInfoBar from "../../components/movie-info-bar/movie-info-bar.component";
import Navigation from "../../components/navigation/navigation.component";
import Grid from "../../components/grid/grid.component";
import Spinner from "../../components/spinner/spinner.component";

const Movie = ({ movieId }) => (
  <>
    <Navigation />
    <MovieInfo />
    <MovieInfoBar />
    <Grid>
      <Actor />
    </Grid>
    <Spinner />
  </>
);

export default Movie;
