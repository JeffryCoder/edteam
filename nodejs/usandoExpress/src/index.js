const express = require('express');
const path = require('path');
const app = express();
const user = require('./routes/users');

//settings

app.set('title', 'Aplicacion hecha en Node');
app.set('port', 3000);

// Middlewares
//const loggedMiddleware = require('./middlewares/logged')
//app.use(loggedMiddleware.isLogged);

app.use(express.static(path.join(__dirname, 'public')));

// Rutas

app.get('/', (req, res)=> {

    res.send("Bienvenido al sistema");

});

app.use('/users',user);


app.get('/items', (req, res)=>{

    res.send("Accediendo a items")
})


app.listen(app.get('port'), ()=>{
    console.log('Mi '+ app.get('title') + ' esta corriendo en el puerto ' + app.get('port'))
})