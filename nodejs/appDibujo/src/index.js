const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const cors = require('cors')

// Para inicializar el app
const app = express()

//Para crear servidor http
const server = http.createServer(app)
const io = socketio(server)
require('./socket')(io)



// Para habilitar el puerto
app.set('port',process.env.PORT || 5000)

// Para tener acceso a los archivos estaticos
app.use(express.static(path.join(__dirname,'public')))
app.use(cors())


server.listen(app.get('port'),()=>{
    console.log('Aplicacion corriendo correctamente en el puerto '+ app.get('port'))
})