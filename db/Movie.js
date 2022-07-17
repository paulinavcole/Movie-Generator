const { conn } = require('./conn');
const { STRING, INTEGER } = conn.Sequelize;

const Movie = conn.define('movie', {
  name: {
    type: STRING,
    allowNull:false
  },
  ranking: {
    type: INTEGER,
    defaultValue: 3
  },
});

Movie.beforeUpdate(movie => {
  if (movie.ranking > 5 || movie.ranking < 0) {
    throw new Error("You can't update the rating of this movie!");
  }
});

module.exports = { Movie };