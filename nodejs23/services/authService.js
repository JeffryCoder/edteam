const UserAuth = require('../models/authModel')

const bcrypt = require('bcrypt')




class AuthService {

    constructor(){}


    async register(data){

        data.password = bcrypt.hashSync(data.password, 10)
        const userAuth = new UserAuth(data)

        return await userAuth.save()
    }

    login(){


    }

}

module.exports = AuthService