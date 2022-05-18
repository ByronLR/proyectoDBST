/**
 * RESERVA.js
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
      columnName: 'id_reserva',
      autoIncrement: true,
      allowNull: false
    },

    fecha_inicio: {
      type: 'string',
      columnType: 'datetime',
      required: true,
      allowNull: false
    },

    fecha_final: {
      type: 'string',
      columnType: 'datetime',
      required: true,
      allowNull: false
    },
    
    fecha_reserva: {
      type: 'string',
      columnType: 'datetime',
      required: true
    },

    edo_final: {
      type: 'boolean',
      columnType: 'bit',
      required: true,
      allowNull: false
    },

    costo: {
      type: 'number',
      columnType: 'int',
      required: true,
    },

    id_usuario: {
      type: 'number',
      columnType: 'int',
      allowNull: false
    },

    num_habitacion: {
      type: 'number',
      columnType: 'int',
      allowNull: false
    }

  },

};

