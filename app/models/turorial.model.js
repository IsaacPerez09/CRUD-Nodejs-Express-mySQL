module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define('tutorial', {
    //tabla
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Tutorial;
};
//crear modelo para la base de datos, tablas columnas. se exportan al index.js
