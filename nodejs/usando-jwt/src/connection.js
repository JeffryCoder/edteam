const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://127.0.0.1:27017/jwtdb')

.then((db) => {
    console.log('Conexion exitosa a la base de datos')
})
.catch((err) =>{
    console.log('Ha ocurrido un erro al conectarser a la base de datos'+ err)
})

module.exports = connection;