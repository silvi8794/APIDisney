'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('peliculasseries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      imagen: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      fecha_creacion: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      calificacion: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      genero_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "generos",
            key: "id"
        }},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('peliculasseries');
  }
};