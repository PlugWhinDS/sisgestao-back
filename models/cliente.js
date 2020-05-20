'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    tel: DataTypes.STRING,
    cel: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {});
  Cliente.associate = function(models) {
    // associations can be defined here
  };
  return Cliente;
};