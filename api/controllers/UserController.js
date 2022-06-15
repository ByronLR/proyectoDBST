/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
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

      return res.ok({ message: "Sesión iniciada correctamente" });
    } catch (error) {
      console.log(`Login error on UserController, info: `, error);

      return res.serverError({
        message: "Ha ocurrido un error, intente mas tarde",
      });
    }
  },
};
