/**
 * Room.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "HABITACION",
  attributes: {
    id: {
      type: "number",
      columnType: "int",
      columnName: "num_habitacion",
      autoIncrement: true,
      allowNull: false,
    },

    type: {
      type: "number",
      columnType: "int",
      columnName: "tipo_habitacion",
      defaultsTo: 1,
    },

    capacity: {
      type: "number",
      columnType: "int",
      required: true,
      columnName: "capacidad",
      allowNull: false,
    },

    price: {
      type: "number",
      columnType: "int",
      required: true,
      columnName: "precio_habitacion",
      allowNull: false,
    },

    stateCleaning: {
      type: "boolean",
      columnType: "bit",
      columnName: "edo_limpieza",
      required: true,
      allowNull: false,
    },
  },
};
