/**
 * BookingService.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "RESERVA_SERVICIO",
  attributes: {
    id: {
      columnName: "id_reserva",
      type: "number",
      allowNull: false,
      required: true,
    },
    userId: {
      columnName: "id_usuario",
      type: "number",
      allowNull: false,
      required: true,
    },
  },
};
