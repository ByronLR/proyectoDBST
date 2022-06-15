/**
 * PymentMethod.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "USUARIO_METODOS_PAGO",
  attributes: {
    id: {
      type: "number",
      columnType: "int",
      columnName: "id_usuario",
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: "string",
      columnName: "metodo_pago",
      columnType: "varchar(50)",
      required: true,
    },
  },
};
