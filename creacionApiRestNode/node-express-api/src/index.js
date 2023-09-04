const express = require("express"); // Para importar capacidades de servidor
const morgan = require("morgan"); // Para ver las peticiones en consola


const app = express(); // Para crear el servidor
// Base de datos

require("dotenv").config(); // Para que el servidor entienda las variables de entorno
require("./database"); // Para que el servidor entienda la base de datos


// CONSTANTES GLOBALES
app.set("port", process.env.PORT || 3000) // Para que el puerto sea el que nos de el servidor o el 3000 si no nos da ninguno

// CONFIGURACIONES
app.use(morgan("dev")); // Para que muestre las peticiones en consola
app.use(express.json()); // Para que el servidor entienda los formatos json


//ENDPOINTS

app.use(require("./routes/index")); // Para que el servidor entienda las rutas
app.use(require("./routes/auth")); // Para que el servidor entienda de autenticacion


// SERVIDOR
app.listen(app.get("port"), () => {

    console.log(`Servidor corriendo en el puerto ${app.get("port")}`)
});