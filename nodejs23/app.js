const express = require('express')

const app = express()

const morgan = require('morgan')

const userRouter = require('./routers/userRouter')

const userLogged = require('./middlewares/userLogged')

app.get('/', (req, res)=>{

    console.log("Servidor creado con express corriendo correctamente")


})
app.use(express.json())
app.use(morgan('dev'))
// CODIGO PARA INCLUIR MIDDLEWARE DE LOGUEO AL SISTEMA
// app.use(userLogged)
app.use('/users', userRouter)

app.listen(3000, ()=>{

    console.log("Aplicacion ejecutandose correctamente en el puerto 3000")
})