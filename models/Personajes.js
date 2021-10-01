'use strict';
const PeliculasSeries = require('./index');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  //class Personajes extends Model {}
    

    const Personajes = sequelize.define('Personajes' ,  { 
    id:{
      type:DataTypes.BIGINT(11), 
      autoIncrement:true, 
      primaryKey : true, 
      unique : true
     },
    nombre: {
    type: DataTypes.STRING(30),
    allowNull: false,
    
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
    // allowNull defaults to true
  },
  peso: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    
    // allowNull defaults to true
  },
  historia: {
    type: DataTypes.STRING(100),
    allowNull: false,
    
    // allowNull defaults to true
  },
  imagen: {
    type: DataTypes.STRING(100),
    allowNull: false,
    
    // allowNull defaults to true
  }}, {
    sequelize,
    modelName: 'personajes',
  });

  Personajes.associate = function(models){
    Personajes.belongsToMany(models.peliculasSeries, 
      {as: "peliculasSeries", through:"personajesPeliculasSeries", foreignKey:"personajes_id"});
  };

  PeliculasSeries.associate = function(models){
    PeliculasSeries.belongsToMany(models.personajes, 
        {as: "personajes", through:"personajesPeliculasSeries", foreignKey:"peliculasSeries_id"});
  };
  return Personajes;
};
