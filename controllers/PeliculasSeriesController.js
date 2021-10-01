const {peliculasSeries} = require('../models/index');

module.exports = {

    guardarPeliculaSerie( req, res){
        peliculasSeries.create({
                titulo: req.body.titulo,
                imagen: req.body.imagen,
                fecha_creacion: req.body.fecha_creacion,
                calificacion: req.body.calificacion,
                genero_id: req.body.genero_id,
            }
        ).then( peliculaSerie => {


            res.json({
                peliculaSerie: peliculaSerie,
            });
        }).catch( err => {
            res.status(500).json('Ocurrio un error',err);
        });
    }
}