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


module.exports = { Movie };