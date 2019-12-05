import React from "react";

import Actor from "../../components/actor/actor.component";
import MovieInfo from "../../components/movie-info/movie-info.component";
import MovieInfoBar from "../../components/movie-info-bar/movie-info-bar.component";
import Navigation from "../../components/navigation/navigation.component";
import Grid from "../../components/grid/grid.component";
import Spinner from "../../components/spinner/spinner.component";

import { useMovieFetch } from "../../hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);
  console.log(movie);

  if (error) return <div>Oops ... something went wrong!</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar />
      <Grid>
        <Actor />
      </Grid>
    </>
  );
};

export default Movie;
