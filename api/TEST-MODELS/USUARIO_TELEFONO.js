/**
 * USUARIO_TELEFONO.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      columnName: 'id_usuario',
      type: 'number',
      allowNull: false,
    },
  
    telefono: {
      type: 'string',
      columnName: 'telefono',
      columnType: 'varchar(11)'
    }
  
},

};

