const express = require('express')

const app = express()

const morgan = require('morgan')

const path = require('path')

const userRouter = require('./routers/userRouter')

const userLogged = require('./middlewares/userLogged')

const connection = require('./database/connection')

app.get('/', (req, res)=>{


    const data = {
        "title": "JeffryCoder",
        "message": "Bienvenido a mi sitio web",
        "showMessage": true,
        "administradores": ['Jeffry', 'Juan', 'Pedro', 'Maria', 'Jose', 'Luis', 'Carlos', 'Jorge', 'Raul', 'Ricardo', 'Rosa', 'Luisa', 'Ana', 'Lorena']
    }


    res.render('index', data)


})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(morgan('dev'))
// CODIGO PARA INCLUIR MIDDLEWARE DE LOGUEO AL SISTEMA
// app.use(userLogged)
app.use('/users', userRouter)

app.listen(3000, ()=>{

    console.log("Aplicacion ejecutandose correctamente en el puerto 3000")
})