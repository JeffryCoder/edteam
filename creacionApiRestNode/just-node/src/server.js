const http = require('http');


const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {


    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({

        "message": "Servidor con nodejs puro funcionando correctamente..."


    }));

});

server.listen(port, hostname, ()=>{

    console.log(`Servidor corriendo en http://${hostname}:${port}/`)


});
