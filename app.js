const express = require('express');
const app = express();



//Middleware para poder cargar el req.body(
app.use(express.json());
app.use( express.urlencoded({extended: false}));

 app.get('/', function(req, res) {
    res.json('Hola');
}); 



app.listen(4000, function() {
  console.log('Servidor iniciado en el puerto', 4000);
})

app.use(require('./Routes/Routes'));
