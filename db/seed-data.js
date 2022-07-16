const { faker } = require('@faker-js/faker');

const MOVIES = [];

function createRandomMovie() {
  return {
    name: `${faker.company.catchPhrase()}`,
  };
};

Array.from({ length: 10 }).forEach(() => MOVIES.push(createRandomMovie()));

module.exports = { MOVIES, createRandomMovie }