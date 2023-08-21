const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/users')


const getAdmin = (req,res) => {

    
}
const login = (req,res) => {


}
const register = async  (req,res) => {

    

    try{

        // const user = new User({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: bcrypt.hashSync(req.body.password, 10)
        // })

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        })

        res.json(user)
        console.log(user)
        
    
    }catch(err){
        console.error(err)

        res.status(500).json({message: 'Ha ocurrido un error'})
    }

    // user.save((err, result)=>{

    //     if (err){

    //         res.send('Ha ocurrido un error'+ err)

    //     }else{
    //         res.send('Usuario registrado correctamente')
    //     }
        
    // })

}

module.exports = {getAdmin, login, register}