/**
 * TIPOS_HABITACIONES.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      type: 'number',
      columnType: 'int',
      columnName: 'id_tipo',
      autoIncrement: true,
      allowNull: false
    },

    nombre_tipo: {
      type: 'string',
      columnType: 'varchar(50)',
      required: true
    }
  },

};

