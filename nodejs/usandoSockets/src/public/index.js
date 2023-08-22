const socket = io()

const username = document.getElementById('username')
const write_message = document.getElementById('write_message')


write_message.addEventListener('keyup', (event) => {


    if (event.code == 'Enter') {
        
        if (username.value != ''  && write_message.value != '') {
            
            socket.emit('message', {
                username: username.value, 
                message: write_message.value.slice(0, -1)
            })


        }else{
            console.log("No se puede enviar el mensaje, verifique los campos")
        }

    }
})