const express = require('express')

const app = express()

const userRouter = require('./routers/userRouter')

app.get('/', (req, res)=>{

    console.log("Servidor creado con express corriendo correctamente")


})
app.use(express.json())
app.use('/users', userRouter)

app.listen(3000, ()=>{

    console.log("Aplicacion ejecutandose correctamente en el puerto 3000")
})