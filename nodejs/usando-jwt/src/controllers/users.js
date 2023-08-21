const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/users')


const getAdmin = async (req,res) => {

    try{
        const decoded = jwt.verify(req.token, 'claveSecretaJeffry')

    
        res.json({message: 'Datos de administrador correcto', userData: decoded})

    }catch(err){

        res.send('Ha ocurrido un error al validar el usuario')

    }


}
const login = async (req,res) => {

    try {
        const result = await User.findOne({ email: req.body.email });
        if (result) {
          

          if (bcrypt.compareSync(req.body.password, result.password)){
            //res.send('Usuario encontrado. Password correcto');

            // Creacion de tokens

            jwt.sign({user:result}, 'claveSecretaJeffry', (err, token)=>{
                res.send({token:token})
            })

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
        console.log('Usuario registrado correctamente')
        
    
    }catch(err){
        console.error(err)

        res.status(500).json({message: 'Ha ocurrido un error registrando al usuario'})
    }

}

module.exports = {getAdmin, login, register}