
const hostname = "127.0.0.1";
const port = 3000;

const server = require('./route');

server.listen(port, hostname, ()=>{

    console.log(`Servidor corriendo en http://${hostname}:${port}/`)


});
