const { conn } = require('./conn');
const { MOVIES } = require('./seed-data');
const { Movie } = require('./Movie');

const seeder = async() => {

  try {
    await conn.sync({force: true});
    await Promise.all(MOVIES.map((movie) => Movie.create(movie)));

  } catch (ex) {
    console.log(ex);
  }
};

module.exports = {
  seeder
};