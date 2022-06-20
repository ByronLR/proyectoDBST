/**
 * user.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "USUARIO",
  attributes: {
    id: {
      type: "number",
      autoIncrement: true,
      unique: true,
      columnName: "id_usuario",
      columnType: "int",
    },
    name: {
      type: "string",
      allowNull: true,
      columnName: "nombre",
      columnType: "varchar(20)",
    },
    lastName: {
      type: "string",
      allowNull: true,
      columnName: "appat",
      columnType: "varchar(20)",
    },
    secondLastName: {
      type: "string",
      allowNull: true,
      columnName: "apmat",
      columnType: "varchar(20)",
    },
    clientFrecuently: {
      type: "boolean",
      defaultsTo: false,
      columnType: "bit",
      columnName: "cliente_frecuente",
    },
    email: {
      type: "string",
      allowNull: true,
      columnType: "varchar(40)",
      isEmail: true,
    },
    type: {
      type: "number",
      columnName: "tipo_usuario",
      columnType: "int",
      defaultsTo: 1,
    },
    password: {
      type: "string",
      allowNull: true,
      columnName: "password",
      columnType: "varchar(500)",
      encrypt: true,
    },
  },
  customToJSON: function () {
    return _.omit(this, ["password"]);
  },
};
