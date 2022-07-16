const { conn } = require('./conn');
const { STRING, INTEGER } = conn.Sequelize;

const Movie = conn.define('movie', {
  name: {
    type: STRING,
  },
  ranking: {
    type: INTEGER,
    defaultValue: 1
  },
});


module.exports = { Movie };