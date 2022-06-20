/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async get(req, res) {
    try {
      const email = req.params["0"];

      const [_user] = await User.find({ email });

      if (!_user)
        return res.badRequest({
          message: `El usuario ${email} no fue encontrado`,
        });

      const _userPhone = await UserPhone.findOne({ id: _user.id });

      _user.phone = _userPhone ? _userPhone.phone : "None";

      return res.ok(_user);
    } catch (error) {
      console.log(`get user error on UserController, info: `, error);

      return res.serverError({
        message: "Ha ocurrido un error, intente mas tarde",
      });
    }
  },

  async getAll(req, res) {
    try {
      const users = await User.find({});

      for (const e of users) {
        const _userPhone = await UserPhone.findOne({ id: e.id });

        e.phone = _userPhone ? _userPhone.phone : "S/A";

        const reservationsByUser = await sails.sendNativeQuery(
          `EXEC NumVisitasCliente @IdUsuario = $1, @fecha = $2`,
          [e.id, new Date()]
        );

        e.visits = reservationsByUser.recordsets?.[0]?.[0]?.[""];
        e.reservations = await Booking.count({ userId: e.id });
      }

      return res.ok(users);
    } catch (error) {
      console.log(`get user error on UserController, info: `, error);

      return res.serverError({
        message: "Ha ocurrido un error, intente mas tarde",
      });
    }
  },

  async create(req, res) {
    try {
      const { body } = req;

      const [_userExists] = await User.find({ email: body.email });

      if (_userExists)
        return res.badRequest({
          message: `El correo indicado ya existe`,
        });

      let phone = body.phone || "None";

      delete body.phone;

      const userCreated = await User.create(body).fetch();

      await UserPhone.create({ id: userCreated.id, phone });

      userCreated.phone = phone;

      return res.ok(userCreated);
    } catch (error) {
      console.log(`create user error on UserController, info: `, error);

      return res.serverError({
        message: "Ha ocurrido un error, intente mas tarde",
      });
    }
  },

  async update(req, res) {
    try {
      const email = req.params["0"],
        { body } = req;

      const [_user] = await User.find({ email });

      if (!_user)
        return res.badRequest({
          message: `El usuario ${email} no fue encontrado`,
        });

      if (body.email)
        if (body.email != _user.email) {
          const [_userDuplicated] = await User.find({ email });

          if (_userDuplicated)
            return res.badRequest({
              message: `El correo indicado ya existe`,
            });
        }

      if (body.phone)
        await UserPhone.update({ id: _user.id }, { phone: body.phone });

      delete body.phone;

      await User.update({ id: _user.id }, body);

      return res.ok(_user);
    } catch (error) {
      console.log(`update user error on UserController, info: `, error);

      return res.serverError({
        message: "Ha ocurrido un error, intente mas tarde",
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!password || !email)
        return res.badRequest({
          message: "Correo y contraseña son requeridos",
        });

      const [_user] = await User.find({ email }).decrypt();

      if (!_user)
        return res.badRequest({
          message: `El usuario ${email} no fue encontrado`,
        });

      if (password != _user.password)
        return res.badRequest({
          message: `Contraseña incorrecta`,
        });

      await sails.sendNativeQuery(
        `EXEC bitacoraIncioSesion @IdUsuario = $1, @IdTipoUsuario = $2`,
        [_user.id, _user.type]
      );

      return res.ok(_user);
    } catch (error) {
      console.log(`Login error on UserController, info: `, error);

      return res.serverError({
        message: "Ha ocurrido un error, intente mas tarde",
      });
    }
  },
};
