const {User} = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')


module.exports = {

    //Login
    login( req, res){

        let {email, password} = req.body;

        //Primero hay que buscar al usuario
        User.findOne({
             
            where: {
                email: email
            }
        }).then( user => {

                    if(!user) {
                        res.status(404).json({ msg: "Usuario no encontrado"})
                    } else{

                        //Se comparan las contraseñas
                       if( bcrypt.compareSync(password, user.password)) {

                        // Se devuelve el token
                         // crear token
                        let token = jwt.sign({ user: user}, authConfig.secret, {
                        //Tiempo que durara el token = Tiempo autorizados en la app
                        expiresIn: authConfig.expires
                         });
                    
                         res.json({
                             user: user,
                             token: token
                             });
                       } else {
                           //Acceso no autorizado
                           res.status(401).json({msg: "Contraseña incorrecta"})
                       }
                    }
        }).catch( error => {
                            res.status(500).json(error);
        });

    },

    //Registro de Usuarios
    register(req, res) {

        //Se encripta la contraseña
        let password = bcrypt.hashSync( req.body.password, Number.parseInt(authConfig.rounds));

        //Crea al usuario
       User.create({
            username: req.body.username,
            email: req.body.email,
            password: password,
        }).then( user => {

            // crear token
            let token = jwt.sign({ user: user}, authConfig.secret, {
                //Tiempo que durara el token = Tiempo autorizados en la app
                expiresIn: authConfig.expires
            });
            res.json({
                user: user,
                token: token
            });
        }).catch( err => {
            res.status(500).json('No se registro usuario',err);
        });
    }
}