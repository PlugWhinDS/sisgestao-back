'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Clientes',[
      {
        nome:'Cristian Madeira de Souza Pereira',
        email:'cristianmadeira1106@gmail.com',
        senha:'123',
        cpf:'1111111111',
        tel: '(21)1111-1111',
        cel: '(21)9.9999-99999',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Clientes',null,{});
  }
};
