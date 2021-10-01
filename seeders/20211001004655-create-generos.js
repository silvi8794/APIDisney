'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('generos', [
        {nombre: 'Romance', imagen: '  ', createdAt: new Date(), updatedAt: new Date()},
        {nombre: 'Drama', imagen: '  ', createdAt: new Date(), updatedAt: new Date()},
        {nombre: 'Accion', imagen: '  ', createdAt: new Date(), updatedAt: new Date()},
        {nombre: 'Comedia', imagen: '  ', createdAt: new Date(), updatedAt: new Date()},
        {nombre: 'Aventuras', imagen: '  ', createdAt: new Date(), updatedAt: new Date()},
      ], {})
    ]);
  },

  down: async (queryInterface, Sequelize) => {
     return Promise.all([
       queryInterface.bulkDelete('generos', null, {})
     ])
  }
};
