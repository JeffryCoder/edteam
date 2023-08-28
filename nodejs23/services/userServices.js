const { getAllUsers } = require('../controllers/userController');
const User = require('../models/userModel');

class UserService{

    constructor(){}

    // Metodo para obtener todos los usuarios

    async getAll(){

        const users = await User.find({})
        
        return users
    }

    async filterById(id){

        const user = await User.findOne({_id: id})
        
        return user
    }



    
    // Metodo para crear usuarios
    async create(data){

        const user = new User(data)
        return await user.save()

    }


}

module.exports = UserService