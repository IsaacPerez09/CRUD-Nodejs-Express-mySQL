module.exports = {
  //credenciales a la base de datos que nos vallamos a conectar
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '123Root+',
  DB: 'Prueba',
  dialect: 'mysql',
  pool: {
    //opcional, configuracion del grupo de conexiones
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
//credenciales se exportan al index.js
