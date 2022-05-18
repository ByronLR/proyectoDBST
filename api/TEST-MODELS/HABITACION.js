/**
 * HABITACION.js
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
      columnName: 'num_habitacion',
      autoIncrement: true,
      allowNull: false
    },

    tipo_habitacion: {
      type: 'number',
      columnType: 'int',
      defaultsTo: 1
    },

    capacidad: {
      type: 'number',
      columnType: 'int',
      required: true,
      allowNull: false
    },

    precio_habitacion: {
      type: 'number',
      columnType: 'int',
      required: true,
      allowNull: false
    },

    edo_limpieza: {
      type: 'boolean',
      columnType: 'bit',
      required: true,
      allowNull: false
    }

  },

};

