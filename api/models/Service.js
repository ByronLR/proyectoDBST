/**
 * Service.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "SERVICIOS",
  attributes: {
    id: {
      type: "number",
      columnType: "int",
      columnName: "id_servicio",
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: "string",
      columnType: "varchar(40)",
      columnName: "nombre_servicio",
      required: true,
    },

    cost: {
      type: "number",
      columnType: "int",
      columnName: "costo_servicio",
      required: true,
    },
  },
};
