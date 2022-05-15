/**
 * TIPO_USUARIO.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'TIPO_USUARIO',
  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      type: 'number',
      columnType: 'int',
      columnName: 'id_tipo_usuario',
      autoIncrement: true
    },
    
    desc_usuario: {
      type: 'string',
      required: true,
      columnType: 'varchar(15)'
    }
  },

};

