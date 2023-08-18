const express = require('express');
const app = express();
const port = 3000;
const user = require('./routes/users');

// Middlewares
const loggedMiddleware = require('./middlewares/logged')
app.use(loggedMiddleware.isLogged);

app.use(express.static(__dirname+'./public'));

// Rutas

app.get('/', (req, res)=> {

    res.send("Bienvenido al sistema");

});

app.use('/users',user);


app.get('/items', (req, res)=>{

    res.send("Accediendo a items")
})


app.listen(port, ()=>{
    console.log('Mi aplicacion esta corriendo en el puerto ' + port)
})