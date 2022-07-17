import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Movies = ({ movies }) => {
 return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <h2>
              <Link to={`/movies/${movie.id}`}>Movie: {movie.name}</Link>
            </h2>
            Rank: {movie.ranking}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ movies }) => ({
  movies
});


export default connect(mapStateToProps)(Movies);