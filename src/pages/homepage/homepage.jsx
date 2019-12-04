import React, { useState } from "react";

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../config";
import NoImage from "../../images/no_image.jpg";

import Grid from "../../components/grid/grid.component";
import HeroImage from "../../components/hero-image/hero-image.component";
import LoadMoreBtn from "../../components/load-more-btn/load-more-btn.component";
import MovieThumb from "../../components/movie-thumb/movie-thumb.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import Spinner from "../../components/spinner/spinner.component";

import { useHomeFetch } from "../../hooks/useHomeFetch";

const HomePage = () => {
  const [
    {
      state: { movies, heroImage, currentPage, totalPages },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const loadMoreMovies = () => {
    const searchEndPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage +
      1}`;
    const popularEndPoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage +
      1}`;

    const endPoint = searchTerm ? searchEndPoint : popularEndPoint;
    fetchMovies(endPoint);
  };

  if (error) return <div>Oops ... something went wrong!</div>;
  if (!movies[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </>
  );
};

export default HomePage;
