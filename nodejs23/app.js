// Requerir modulo para instalar el servidor http
const http = require('http')

//Crear el servidor 

// Todo lo que se envie en @res@ sera enviado al cliente
const server = http.createServer((req, res) =>{

    try {
        
        if (req.url == '/' && req.method == "GET"){

            res.statusCode = 200
            res.end(JSON.stringify({"message" : 'Accediendo al servidor'}))
    
        }
    
        else if (req.url == '/home' && req.method == "GET"){
    
            res.statusCode = 300
            res.end(JSON.stringify({"message" : "Accediento al directorio principal"}))
    
        }
    
        else{
    
            res.statusCode = 404
            res.end(JSON.stringify({"message" : "No encontrado. Esta ruta no existe palomo"}))
    
        }
    } catch (error) {

        
        console.log(error.toString()) // Imprimiendo error por consola del servidor
        res.statusCode = 500
        res.end(JSON.stringify({"message" : "Ha ocurrido un error en el servidor"}))

    }



    

    


})

const port = 5000
const host = "localhost"


// Escuchar desde el puerto
server.listen(port, host, ()=>{

    console.log(`Servidor ejecutándose correctamente en http://${host}:${port}`)



})


