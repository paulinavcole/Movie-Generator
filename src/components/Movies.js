import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie, updateMovie } from '../store/movies';

const Movies = ({ movies, deleteMovie, updateMovie }) => {
let sumRanks = 0;
 return (
    <ul>
      {movies.map((movie) => {
        sumRanks += movie.ranking *1
        return (
          <li key={movie.id}>
            Movie: {movie.name} Rank: {movie.ranking}
            <button onClick={ () => deleteMovie(movie)}>X</button>
            <button onClick={ ()=> updateMovie(movie, +1)}>+</button>
            <button onClick={ ()=> updateMovie(movie, -1)}>-</button>
          </li>
        );
      })}
      <h2>The average movie ranking is {sumRanks===0 ? '0' : Math.floor(sumRanks/ movies.length) }!</h2>
    </ul>
  );
};

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (movie) => {
      dispatch(deleteMovie(movie))
    },
    updateMovie: (movie, rank) => {
      movie = {...movie, ranking: movie.ranking + rank};
      dispatch(updateMovie(movie));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Movies);