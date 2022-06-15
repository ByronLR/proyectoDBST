/**
 * Booking.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "RESERVA",
  attributes: {
    id: {
      type: "number",
      columnType: "int",
      columnName: "id_reserva",
      autoIncrement: true,
      allowNull: false,
    },

    startDate: {
      type: "string",
      columnType: "datetime",
      columnName: "fecha_inicio",
      required: true,
      allowNull: false,
    },

    endDate: {
      type: "string",
      columnType: "datetime",
      columnName: "fecha_final",
      required: true,
      allowNull: false,
    },

    bookingDate: {
      type: "string",
      columnType: "datetime",
      columnName: "fecha_reserva",
      required: true,
    },

    finalState: {
      type: "boolean",
      columnType: "bit",
      columnName: "edo_final",
      required: true,
      allowNull: false,
    },

    cost: {
      type: "number",
      columnType: "int",
      columnName: "costo",
      required: true,
    },

    userId: {
      type: "number",
      columnType: "int",
      columnName: "id_usuario",
      allowNull: false,
    },

    roomNumber: {
      type: "number",
      columnType: "int",
      columnName: "num_habitacion",
      allowNull: false,
    },
  },
};
