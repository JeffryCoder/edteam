const express = require('express')

const app = express()

const morgan = require('morgan')

const path = require('path')

const socket = require('socket.io')




// const userRouter = require('./routers/userRouter')

// const authRouter = require('./routers/authRouter')

// const dashboardRouter = require('./routers/dashboardRouter')

// const userLogged = require('./middlewares/userLogged')

const connection = require('./database/connection')



app.use(express.static(path.join(__dirname, 'public')));

app.get('/styles.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public', 'css', 'styles.css'));
  });

app.use(express.urlencoded({extended:false}))



app.get('/', (req, res)=>{


    // const data = {
    //     "title": "JeffryCoder",
    //     "message": "Bienvenido a mi sitio web",
    //     "showMessage": true,
    //     "administradores": ['Jeffry', 'Juan', 'Pedro', 'Maria', 'Jose', 'Luis', 'Carlos', 'Jorge', 'Raul', 'Ricardo', 'Rosa', 'Luisa', 'Ana', 'Lorena']
    // }


    res.render('index')


})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')





app.use(express.json())
app.use(morgan('dev'))
// CODIGO PARA INCLUIR MIDDLEWARE DE LOGUEO AL SISTEMA
// app.use(userLogged)
// app.use('/users', userRouter)

// app.use('/auth', authRouter)

// app.use('/dashboard', dashboardRouter)

const server = require('http').createServer(app)

const io = socket(server)

require('./socket')(io)

server.listen(3000, ()=>{

    console.log("Aplicacion ejecutandose correctamente en el puerto 3000")
})





module.exports = app