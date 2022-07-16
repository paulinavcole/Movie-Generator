const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/the_acme_movie_generator_db');

module.exports = {conn};