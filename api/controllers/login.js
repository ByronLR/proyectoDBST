module.exports = {
  friendlyName: 'Login',
  description: 'Login something.',
  inputs: {
    email: {
      description: "Email del usuario",
      type: "string",
      required: true,
      isEmail: true
    },

    password: {
      description: "Contraseña del usuario",
      type: "string",
      required: true
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'assets/reservas'
    },

    notFound: {
      description: 'No se encontro el usuario',
      responseType: 'notFound'
    },

  },


  fn: async function (inputs) {
    
    var usuario = await USUARIO.findOne({
      email: inputs.email
    });
    if(!usuario){
      throw 'notFound';
    }
    var usuario = await USUARIO.find({
      email: inputs.email,
      password: inputs.password
    });
    if(usuario.length==1){
      req.session.userId=usuario.id
      return success;
    } else {
      throw 'notFound';
    }

  }

};
