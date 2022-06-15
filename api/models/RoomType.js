/**
 * RoomType.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "TIPOS_HABITACIONES",
  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      type: "number",
      columnType: "int",
      columnName: "id_tipo",
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      columnName: "nombre_tipo",
      type: "string",
      columnType: "varchar(50)",
      required: true,
    },
  },
};
