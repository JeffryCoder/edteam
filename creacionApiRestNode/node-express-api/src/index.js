const express = require("express");
const morgan = require("morgan");


const app = express();

// CONSTANTES GLOBALES
app.set("port", process.env.PORT || 3000)
app.use(morgan("dev"));

//ENDPOINTS

app.get("/", (req, res) => {

    res.send("Hola mundo");

});





// SERVIDOR
app.listen(app.get("port"), () => {

    console.log(`Servidor corriendo en el puerto ${app.get("port")}`)
});