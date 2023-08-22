module.exports = (io) => {

    console.log('Socket.io esta listo para usarse')

    io.on('connection', (socket) => {

        socket.on('drawing', (drawing) => {

            io.emit('show_drawing', drawing)

        })


    })


}