/**
 * USUARIO_TELEFONO.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "USUARIO_TELEFONO",
  attributes: {
    id: {
      columnName: "id_usuario",
      type: "number",
      allowNull: false,
    },

    phone: {
      type: "string",
      columnName: "telefono",
      columnType: "varchar(11)",
    },
  },
};
