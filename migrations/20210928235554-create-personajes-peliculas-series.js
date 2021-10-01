'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('personajesPeliculasSeries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personaje_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "personajes",
            key: "id"
        }
      },
      peliculasSeries_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "peliculasSeries",
            key: "id"
        }
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('personajesPeliculasSeries');
  }
};