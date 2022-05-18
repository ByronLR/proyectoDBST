/**
 * SERVICIOS.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    updatedAt: false,
    createdAt: false,
    id:{
      type: 'number',
      columnType: 'int',
      columnName: 'id_servicio',
      autoIncrement: true,
      allowNull: false
    },

    nombre_servicio: {
      type: 'string',
      columnType: 'varchar(40)',
      required: true
    },

    costo_servicio: {
      type: 'number',
      columnType: 'int',
      required: true
    }
  },

};

