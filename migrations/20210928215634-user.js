'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.createTable('users',  {
    id:{
      type:Sequelize.BIGINT(11), 
      autoIncrement:true, 
      primaryKey : true, 
      //unique : true
     },
  
    username: {
     type: Sequelize.STRING(50),
     allowNull: false,
     unique : true,
   },
   email: {
     type: Sequelize.STRING(50),
     allowNull: false,
     unique : true,
     // allowNull defaults to true
   },
   password: {
     type: Sequelize.STRING(100),
     allowNull: false,
     // allowNull defaults to true
   },
   createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
  });


  
} 
}