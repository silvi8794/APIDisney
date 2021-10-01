'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const config = require('../config/database');
const db = {};
const { Sequelize, DataTypes } = require('sequelize');

// Se definen los parametros de conexion 
const sequelize = new Sequelize(config.database, config.username, config.password, config);
sequelize.authenticate();

//Asociaciones de los modelos



fs
  .readdirSync(__dirname) //Lee sincronicamente el directorio dado en su argumento
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model; //Cada archivo de modelo se teclea en el objeto de exportacion en esta linea
    
  });  

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
