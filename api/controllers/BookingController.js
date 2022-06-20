/**
 * BookingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const moment = require("moment");

module.exports = {
  async get(req, res) {
    try {
      const email = req.params["0"],
        [_user] = await User.find({ email });

      if (!_user)
        return res.badRequest({
          message: `El usuario ${email} no fue encontrado`,
        });

      const bookings = await Booking.find({ userId: _user.id });

      for (const booking of bookings) {
        const bookingServices = await BookingService.find({
            id: booking.id,
          }),
          [room] = await Room.find({ id: booking.roomNumber });

        booking.room = room;

        booking.services = bookingServices;

        if (room) {
          const [roomType] = await RoomType.find({ id: room.type });

          if (roomType) booking.room.type = roomType;
        }
      }
      return res.ok(bookings);
    } catch (error) {
      console.log(`get booking error on BookingController, info: `, error);

      return res.serverError({
        message: "Ha ocurrido un error, intente mas tarde",
      });
    }
  },
  async getAll(req, res) {
    try {
      const bookings = await Booking.find({});

      for (const booking of bookings) {
        const bookingServices = await BookingService.find({
            id: booking.id,
          }),
          [room] = await Room.find({ id: booking.roomNumber }),
          [_user] = await User.find({ id: booking.userId });

        booking.room = room;

        booking.user = _user;

        booking.services = bookingServices;

        if (room) {
          const [roomType] = await RoomType.find({ id: room.type });

          if (roomType) booking.room.type = roomType;
        }
      }
      return res.ok(bookings);
    } catch (error) {
      console.log(`get booking error on BookingController, info: `, error);

      return res.serverError({
        message: "Ha ocurrido un error, intente mas tarde",
      });
    }
  },
  async create(req, res) {
    try {
      const email = req.params["0"],
        { body } = req;

      const [_user] = await User.find({ email });

      if (!_user)
        return res.badRequest({
          message: `El usuario ${email} no fue encontrado`,
        });

      const rooms = await Room.find({ type: body.roomType?.id });

      let roomNumber;

      for (const e of rooms) {
        const bookings = await Booking.find({ roomNumber: e.id });

        let isAvailable = true;

        for (const b of bookings) {
          if (
            moment(body.startDate).isBetween(
              b.startDate,
              b.endDate,
              undefined,
              "[]"
            ) ||
            moment(body.endDate).isBetween(
              b.startDate,
              b.endDate,
              undefined,
              "[]"
            )
          )
            isAvailable = false;
        }

        if (isAvailable) {
          roomNumber = e.id;

          break;
        }
      }

      if (!roomNumber)
        return res.badRequest({
          message: `No hay habitaciones '${body.roomType?.name}' disponibles, seleccione otro tipo`,
        });

      const bookingCreated = await Booking.create({
        userId: _user.id,
        startDate: body.startDate,
        endDate: body.endDate,
        bookingDate: new Date(),
        finalState: true,
        cost: body.cost,
        roomNumber,
      }).fetch();

      return res.ok(bookingCreated);
    } catch (error) {
      console.log(`create booking error on BookingController, info: `, error);

      return res.serverError({
        message: "Ha ocurrido un error, intente mas tarde",
      });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params,
        { servicesChecked } = req.body,
        servicesToCreate = [];

      const _booking = await Booking.findOne({ id });

      if (!_booking)
        return res.badRequest({
          message: `La reserva no fue encontrada`,
        });

      await BookingService.destroy({ id });

      for (const e of servicesChecked)
        servicesToCreate.push({ id, serviceId: e });

      await BookingService.createEach(servicesToCreate);

      return res.ok({ message: "SUCCESS" });
    } catch (error) {
      console.log(`create booking error on BookingController, info: `, error);

      return res.serverError({
        message: "Ha ocurrido un error, intente mas tarde",
      });
    }
  },
};
