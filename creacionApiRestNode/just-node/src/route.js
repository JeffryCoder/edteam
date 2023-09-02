const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    const apiOptions = {


        




    }



    const urlParser = url.parse(req.url, true);


    console.log(`Petición recibida: ${urlParser.pathname}. Método: ${req.method}`)





    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"message": "Servidor con nodejs puro funcionando correctamente..."}));

});