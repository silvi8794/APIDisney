'use strict';
const {Generos} = require('../models/index');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  //class PeliculasSeries extends Model {}
  
    const PeliculasSeries = sequelize.define('peliculasSeries', {

    id:{
      type:DataTypes.BIGINT(11), 
      autoIncrement:true, 
      primaryKey : true, 
      unique : true
     },
 
    titulo: {
     type: DataTypes.STRING(50),
     allowNull: false,
     
   },
   imagen: {
     type: DataTypes.STRING(100),
     allowNull: false,
     
     // allowNull defaults to true
   },
   fecha_creacion: {
     type: DataTypes.DATE,
     allowNull: false,
     
     // allowNull defaults to true
   },
   calificacion: {
     type: DataTypes.INTEGER,
     allowNull: false,
     
     // allowNull defaults to true
 
   }
   
 }, {
    sequelize,
    modelName: 'peliculasSeries',
    tableName: 'peliculasseries'
  });

  
  PeliculasSeries.associate = function(models){
    PeliculasSeries.belongsTo(models.generos, 
        {as: "generos",  foreignKey:"genero_id"});
  };

/*   Generos.associate = function(models){
    Generos.belongsTo(models.peliculasSeries,
      {as: 'peliculasSeries', foreignKey:'generos_id'})
  } */
  
  return PeliculasSeries;
};

