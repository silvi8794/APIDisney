'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  //class User extends Model {}
  
  const User = sequelize.define('User',{
    id:{
      type:DataTypes.BIGINT(11), 
      autoIncrement:true, 
      primaryKey : true, 
      //unique : true
     },
  
    username: {
     type: DataTypes.STRING(50),
     allowNull: false,
     unique : true,
     /* validate: {
       isAlpha:{
         msg: "El nombre solo puede tener letras"
       }
     } */
   },
   email: {
     type: DataTypes.STRING(50),
     allowNull: false,
     unique : true,
     // allowNull defaults to true
   },
   password: {
     type: DataTypes.STRING(100),
     allowNull: false,
     // allowNull defaults to true
   }
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};




