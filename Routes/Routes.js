const express = require('express');
const {Personajes} = require('../models/index');
const {peliculasSeries} = require('../models/index')
const router = express.Router();

//Controlador Auth
const AuthController = require('../controllers/AuthController');
const PersonajesController = require('../controllers/PersonajesController');
const PeliculasSeriesController = require('../controllers/PeliculasSeriesController');

//home
router.get('/', (req,res) => res.json({ hello: "World"}));

// Rutas de login y register 
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);





//Rutas para CRUD personajes
///Ruta para la creacion de Personajes
router.post('/characters', PersonajesController.guardarPersonaje);

//Ruta para el Listado de personajes, solo devuelve el nombre y las imagenes del mismo
router.get('/characters', (req, res) => { 
                        Personajes.findAll({attributes: ['nombre', 'imagen']})
                        .then( personajes => res.json(personajes))
                        .catch(
                            err => console.log(err)
                        ); 
                    } );

//Actualizar a un personaje
router.put(`/characters/:id`, PersonajesController.actualizaPersonaje);


                    
//Rutas para CRUD de peliculas y series
///Ruta para cargar las peliculas o Series
router.post('/movies', PeliculasSeriesController.guardarPeliculaSerie);


// Ruta para el listado de peliculas
router.get('/movies', (req, res) => { 
    peliculasSeries.findAll()
    .then( peliculaSerie => res.json(peliculaSerie))
    .catch(
        err => console.log(err)
    ); 
} );

//Actualizar a una pelicula
router.put(`/movies/:id`, PeliculasSeriesController.actualizaPelicula);

module.exports = router;