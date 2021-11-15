const dbConfig = require('../config/db.config.js'); //se extra los datos de configuracion de la bd

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  //se asignan a sequelize las credenciales a la bd
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./turorial.model.js')(sequelize, Sequelize); //tutorials se anade a db.
// tabla de tutoriales de extra de tutorial,model.js
module.exports = db;
//reciben los datos de las cendenciales a la bd y y el modelo de bd.
//se anaden a db.tutorials ambos parametros
