'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  //class Personajes_peliculas extends Model {}

    const Personajes_peliculas = sequelize.define('personajesPeliculasSeries',{
   id:{
    type:DataTypes.BIGINT(11), 
    autoIncrement:true, 
    primaryKey : true, 
    unique : true
   }}, {
    sequelize,
    modelName: 'personajesPeliculasSeries',
  });
  return Personajes_peliculas;
};
