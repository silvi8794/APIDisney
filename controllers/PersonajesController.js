const {Personajes} = require('../models/index');


module.exports = {
    // Inserta un personaje en la base de datos
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
    },


   // Actualiza el Personaje 
   async actualizaPersonaje(req, res) {
     
       // const personaje = req.body;
        //const {id}= req.params
        
           

           Personajes.update({

                nombre: req.body.nombre,
                edad: req.body.edad,
                peso: req.body.peso,
                historia: req.body.historia,
                imagen: req.body.imagen,

           },{ where: {
               id: req.params.id,
           }})
        .then(personajeActualizado => {
            res.json({personaje: personajeActualizado});
        })
        .catch(err => {
            res.status(500).send(err);
        });    
        
    } ,

    // Realiza una baja fisica
  async borrarPersonaje( req, res) {
       let personaje = await Personajes.findOne({where: {id: req.params.id}})
       .catch(err=> 
        { res.json(err)}
        )
        if( !personaje){
            res.json("El personaje no existe")
        }else {
            personaje.destroy();
        }

            
   }
  
}