const mongoose = require('mongoose')

const {db} = require('../config')

const connection =  mongoose.connect(`mongodb://${db.host}:${db.port}/${db.database}`)
.then(()=>{

    console.log('Conexion a la base de datos exitosa')
}).catch(()=>{

    console.log('Error al conectarse a la base de datos')
})

module.exports = connection