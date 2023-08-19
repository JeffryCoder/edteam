const mongoose = require('mongoose')
const {mongodb} = require('./config')


const connection= mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`).then(()=>{
    console.log("Conexion exitosa com mongoDB")
}).catch((err)=>{
    console.log("Ha ocurrido un erro al conectarse a mongodb" + err)
})




module.exports = connection;