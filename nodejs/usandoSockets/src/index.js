const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const app = express()

app.set('port', 3000)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {

    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`)
})
