/**
 * UserType.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "TIPO_USUARIO",
  attributes: {
    id: {
      type: "number",
      columnType: "int",
      columnName: "id_tipo_usuario",
      autoIncrement: true,
    },
    description: {
      type: "string",
      required: true,
      columnName: "desc_usuario",
      columnType: "varchar(15)",
    },
  },
};
