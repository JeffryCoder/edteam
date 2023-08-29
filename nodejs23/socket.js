module.exports = (io)=> {

    io.on('connection', (socket)=>{

        console.log("Se ha conectado un nuevo cliente en el servidor")
        socket.on('disconnect', ()=>{


            console.log('Se ha desconectado un cliente del servidor')
        })
    })

}