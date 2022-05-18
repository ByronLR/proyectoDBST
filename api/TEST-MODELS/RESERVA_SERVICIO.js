/**
 * RESERVA_SERVICIO.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      columnName: 'id_reserva',
      type: 'number',
      allowNull: false,
      required: true
    },
    id_usuario: {
      columnName: 'id_usuario',
      type: 'number',
      allowNull: false,
      required: true
    }
    
  },

};

