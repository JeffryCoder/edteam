const express = require('express');
const path = require('path');
const connection = require('./connection');
const app = express();
const user = require('./routes/users');

//settings

app.set('title', 'Aplicacion hecha en Node');
app.set('port', 3000);

app.set('view engine', 'ejs'); // Motor de plantilla 
app.set('views', path.join(__dirname, 'views'))


// Middlewares
//const loggedMiddleware = require('./middlewares/logged')
//app.use(loggedMiddleware.isLogged);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users/css/styles.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public', 'css', 'styles.css'));
  });

app.use(express.urlencoded({extended:false}))

// Rutas

app.get('/', (req, res)=> {

    res.render('index');

});

app.use('/users',user);


app.get('/items', (req, res)=>{

    res.send("Accediendo a items")
})


app.listen(app.get('port'), ()=>{
    console.log('Mi '+ app.get('title') + ' esta corriendo en el puerto ' + app.get('port'))
})