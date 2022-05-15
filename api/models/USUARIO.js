/**
 * USUARIO.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'USUARIO',
  attributes: {
    updatedAt: false,
    createdAt: false,

    id:{
      type: 'number',
      allowNull: false,
      autoIncrement: true,
      unique: true,
      columnName: 'id_usuario',
      columnType: 'int'
    },

    nombre: {
      type: 'string',
      columnType: 'varchar(20)'
    },

    appat: {
      type: 'string',
      columnType: 'varchar(20)'
    },
    
    apmat: {
      type: 'string',
      columnType: 'varchar(20)'
    },

    clienteFrequente: {
      type: 'boolean',
      defaultsTo: false,
      columnType: 'bit',
      columnName: 'cliente_frecuente'
    },

    email: {
      type: 'string',
      columnType: 'varchar(40)',
      isEmail: true
    },

    tipo: {
      type: 'number',
      columnName: 'tipo_usuario',
      columnType: 'int',
      defaultsTo: 1
    },
    password: {
      type: 'string',
      required: true,
      columnName: 'password',
      columnType: 'varchar(500)'
    },
  },

};

