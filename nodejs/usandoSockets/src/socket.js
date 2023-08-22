module.exports = (io) => {

    console.log('El archivo socket.js se ha cargado correctamente')

    io.on('connection', (socket) => {
        console.log('Un usuario se ha conectado')


        socket.on('message', (data) => {

            console.log(data)

        })


        socket.on('disconnect', () => {



            console.log("Un usuario se ha desconectado")
        })
    })

}
