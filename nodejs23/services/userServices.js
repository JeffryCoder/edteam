const User = require('../models/userModel');

class UserService{

    constructor(){}


    async create(data){

        const user = new User(data)
        return await user.save()

    }


}

module.exports = UserService