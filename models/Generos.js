'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  //class Generos extends Model {}
  
  const Generos =  sequelize.define('generos', {
        id:{
          type:DataTypes.BIGINT(11), 
          autoIncrement:true, 
          primaryKey : true, 
          unique : true
         },
     
        nombre: {
         type: DataTypes.STRING(50),
         allowNull: false,
         
       },
       imagen: {
         type: DataTypes.STRING(100),
         allowNull: false,
         
         // allowNull defaults to true
       } },
       {
        sequelize,
        modelName: 'generos',
      });
  
      return Generos;
    };

