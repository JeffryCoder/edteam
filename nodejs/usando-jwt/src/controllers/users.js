const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/users')


const getAdmin = (req,res) => {

    
}
const login = async (req,res) => {

    try {
        const result = await User.findOne({ email: req.body.email });
        if (result) {
          

          if (bcrypt.compareSync(req.body.password, result.password)){
            res.send('Usuario encontrado. Password correcto');
          }else{
            res.send('Usuario encontrado. Password incorrecto');
          }
        } 
        
        else {
          res.status(404).json({ message: 'Usuario no encontrado' });
        }
      } catch (err) {
        res.status(500).json({ message: 'Ha ocurrido un error de login' });
      }

}

// Manera en que se hace actualmente en Mongodb
const register = async  (req,res) => {

    
    try{
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

}

module.exports = {getAdmin, login, register}