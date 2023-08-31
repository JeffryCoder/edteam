const Message = require('../models/messageModel');

class MessageService{

    constructor(){}

    // Metodo para obtener todos los usuarios

    async getAll(){

        const messages = await Message.find({})
        
        return messages
    }
    
    // Metodo para crear usuarios
    async create(msg){

        const message = new Message(msg)
        return await message.save()

    }



}

module.exports = MessageService