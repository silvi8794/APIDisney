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
                peliculasSerie: peliculaSerie,
            });
        }).catch( err => {
            res.status(500).json(err);
        });
    },

    //Actualiza la pelicula
    async actualizaPelicula(req, res) {
   
            peliculasSeries.update({
 
                titulo: req.body.titulo,
                imagen: req.body.imagen,
                fecha_creacion: req.body.fecha_creacion,
                calificacion: req.body.calificacion,
                genero_id: req.body.genero_id,
 
            },{ where: {
                id: req.params.id,
            }})
         .then(peliculaActualizada => {


            res.json({
                pelicula: peliculaActualizada,
            })
         .catch(err => {
             res.status(500).send(err);
         });    
         
     }); },



     
    // Realiza una baja fisica de la pelicula o serie
  async borrarPeliculaoSerie( req, res) {
    let peliculaoserie = await peliculasSeries.findOne({where: {id: req.params.id}})
    .catch(err=> 
     { res.json(err)}
     )
     if( !peliculaoserie){
         res.json("El personaje no existe")
     }else {
         peliculaoserie.destroy();
     }

         
}

    }