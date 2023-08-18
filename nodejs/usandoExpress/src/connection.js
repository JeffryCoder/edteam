const mysql = require('mysql');
const {mysql_database} = require('./config')
//console.log(mysql_database);
const connection = mysql.createConnection(mysql_database);


connection.connect((err, conn) => {

    if (err){

        console.log("Ha ocurrido un error al conectarse a la base de datos")
        console.log(err)
    }else{

        console.log("Conexion exitosa")
        return conn
    }


})

module.exports = connection;