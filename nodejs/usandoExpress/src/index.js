const express = require('express');
const app = express();
const port = 3000;
const user = require('./routes/users');

const isLogged = (req, res, next) =>{

    let logged = false;

    if (logged){
        next();
    }else {
        res.send('No puede acceder, debe loguearse')
    }
};

app.use(isLogged);

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