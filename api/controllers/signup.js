module.exports = {
    friendlyName: 'SignUp',
    description: 'Registrar usuario',
    inputs: {
        nombre: {
            type: 'string',
            required: true
        },

        appat: {
            type: 'string',
            required: true
        },

        apmat: {
            type: 'string',
            required: true
        },

        email: {
            type: 'string',
            required: true,
            isEmail: true
        },

        password: {
            type: 'string',
            required: true
        }
    },

    exits: {
        success: {
          responseType: 'view',
          viewTemplatePath: 'assets/login'
        }    
      },

    fn: async function (inputs) {
        var usuario = await USUARIO.create({
            nombre: inputs.nombre,
            appat: inputs.appat,
            apmat: inputs.apmat,
            email: inputs.email,
            password: inputs.password
        });

        return;
    }

};

