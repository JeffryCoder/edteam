module.exports = (io)=> {

    io.on('connection', (socket)=>{

        console.log("Se ha conectado un nuevo cliente en el servidor")

        socket.on('add-information', (data)=>{

            console.log(data.info)


            io.emit('show-information', data)
        })

        socket.broadcast.emit('new-connection', 'Nuevo cliente conectado')
        
        socket.on('disconnect', ()=>{


            console.log('Se ha desconectado un cliente del servidor')
        })
    })

}