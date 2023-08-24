// Requerir modulo para instalar el servidor http
const http = require('http')

const url = require('url')

//Crear el servidor 

// Todo lo que se envie en @res@ sera enviado al cliente
const server = http.createServer((req, res) =>{

    try {

        const parsedURL = url.parse(req.url, true)


        const { name } = parsedURL.query
        
        if (req.url == '/' && req.method == "GET"){

            res.statusCode = 200
            res.end(JSON.stringify({"message" : 'Accediendo al servidor'}))
    
        }
    
        else if (req.url == '/home' && req.method == "GET"){
    
            res.statusCode = 300
            res.end(JSON.stringify({"message" : "Accediendo al directorio principal"}))
    
        }

        else if (parsedURL.pathname === "/profile" && name){

            res.statusCode = 200
            res.end(JSON.stringify({"message" : "Accediendo a ruta con parametro:"+name}))

        }

        else if (req.url == '/register' && req.method =="POST"){

            let body = ''

            req.on('data', (data)=>{
                body += data
            })


            req.on('end', ()=>{

                const parsedData = JSON.parse(body)
                const { username, email } = parsedData
                console.log(username, email)

                res.statusCode = 201
                res.end(JSON.stringify({"message" : "Datos registrados correctamente..."}))
        

            })
        }

        else{
            //console.log(req.url)
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


