/**
 * USUARIO_METODOS_PAGO.js
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
      columnName: 'id_usuario',
      autoIncrement: true,
      allowNull: false
    },

    metodo_pago: {
      type: 'string',
      columnType: 'varchar(50)',
      required: true
    }
  },

};

