// implement MovieList component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list ">
        {
          movies.map((movie) => (<MovieCard
            key={ movie.title }
            movie={ movie }
          />))
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieList;
