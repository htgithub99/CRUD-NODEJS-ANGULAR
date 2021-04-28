const env = require('./env');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: 0,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

let db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require('../app/models/Student')(sequelize, Sequelize);

module.exports = db;