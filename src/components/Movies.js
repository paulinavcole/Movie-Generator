import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie } from '../store/movies';

const Movies = ({ movies, deleteMovie }) => {
let sumRanks = 0;
 return (
    <ul>
      {movies.map((movie) => {
        sumRanks += movie.ranking *1
        return (
          <li key={movie.id}>
            Movie: {movie.name} Rank: {movie.ranking}
            <button onClick={ () => deleteMovie(movie)}>X</button>
            <button>+</button>
            <button>-</button>
          </li>
        );
      })}
      <h2>The average movie ranking is {sumRanks/ movies.length} !</h2>
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movies);