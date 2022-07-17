import React from 'react';
import { connect } from 'react-redux';

const Movies = ({ movies }) => {
let sumRanks = 0;
 return (
    <ul>
      {movies.map((movie) => {
        sumRanks += movie.ranking *1
        return (
          <div>
          <li key={movie.id}>
            <button>X</button>
            <h2>
              Movie: {movie.name}
            </h2>
            Rank: {movie.ranking}
            <button>+</button>
            <button>-</button>
          </li>
          </div>
        );
      })}
      <h2>The average movie ranking is {sumRanks/ movies.length} !</h2>
    </ul>
  );
};

const mapStateToProps = ({ movies }) => ({
  movies
});


export default connect(mapStateToProps)(Movies);