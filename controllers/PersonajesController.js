const {Personajes} = require('../models/index');

module.exports = {

    guardarPersonaje( req, res){
        Personajes.create({
                nombre: req.body.nombre,
                edad: req.body.edad,
                peso: req.body.peso,
                historia: req.body.historia,
                imagen: req.body.imagen,
            }
        ).then( personaje => {


            res.json({
                personaje: personaje,
            });
        }).catch( err => {
            res.status(500).json('No se guardo al personaje',err);
        });
    }
}