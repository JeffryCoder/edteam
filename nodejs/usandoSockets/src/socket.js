module.exports = (io) => {

    console.log('El archivo socket.js se ha cargado correctamente')


    var messages = []

    io.on('connection', (socket) => {
        console.log('Un usuario se ha conectado')
        io.emit('messages', messages)


        socket.broadcast.emit('new_user', 'Se ha conectado un nuevo usuario')

        socket.on('writing', (username) => {

            socket.broadcast.emit('writing', username)


        })

        socket.on('message', (data) => {

            messages.push(data)

            io.emit('messages', messages)
            console.log(messages)

        })


        socket.on('disconnect', () => {



            console.log("Un usuario se ha desconectado")
        })
    })

}
