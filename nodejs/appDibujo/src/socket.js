module.exports = (io) => {
    console.log('Socket.io esta listo para usarse')

    var data = []

    io.on('connection', (socket) => {

        for (let i = 0; i < data.length; i++) {
            
            io.emit('show_drawing', data[i])
            
        }

        socket.on('delete', () => {
                
                data = []
                io.emit('show_drawing', null)
        })


        socket.on('drawing', (drawing) => {

            data.push(drawing)
            io.emit('show_drawing', drawing)

        })


    })


}