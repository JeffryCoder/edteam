const socket = io()

const username = document.getElementById('username')
const write_message = document.getElementById('write_message')

const all_messages = document.getElementById('all_messages')
const new_user = document.getElementById('new_user')
const writing = document.getElementById('writing')


write_message.addEventListener('keyup', (event) => {


    if (event.code == 'Enter' || event.keyCode === 13) {
        
        if (username.value != '' && write_message.value != '') {
            
            if(  write_message.value != `\n` && write_message.value[0] != ` ` && write_message.value[0] != `\n`){
                socket.emit('message', {
                    username: username.value, 
                    message: write_message.value.slice(0, -1)
                })

                
            }else{
                console.log("Debe de enviar un mensaje valido")
            }
            

            write_message.value = ''


        }else{
            console.log("No se puede enviar el mensaje, verifique los campos")
        }

    }
})

write_message.addEventListener('keydown', (event) => {

    if (username.value != ''){

        socket.emit('writing', username.value)
    }
})


socket.on('writing', (username) => {

    writing.innerHTML = `${username} esta escribiendo...`

    setTimeout(() => {

        writing.innerHTML = ''

    }, 3000)

})


socket.on('new_user', (message) => {

    console.log(message)

    new_user.innerHTML = message

    // Mensaje de broadcast de conexion nuevo usuaruio
    setTimeout(() => {

        new_user.innerHTML = ''

    }, 3000)
})

socket.on('messages', (messages) => {

    var content = ''


    for (let i = 0; i < messages.length; i++) {
        
        content += `
            <div id='message'> 
                ${messages[i].username}: 
                ${messages[i].message}
            </div>
            <br>
        `
        
    }

    all_messages.innerHTML = content
    all_messages.scrollTop = all_messages.scrollHeight



})