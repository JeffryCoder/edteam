const url = require('url');
const {bodyParser} = require('./libs/bodyParser');

const database = [
    {
        "id": 1,
        "name": "Juan",
        "lastname": "Perez",
        "email": "jeffrycoder@gmail.com",
        "country": "Colombia"
    }
];

//Obtener usuarios
exports.getUsers = (req, res) => {

    let response = [

        {
            "message": "Get all users"
        },
        database

    ]

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));

};
// Crear usuarios

exports.createUsers = async (req, res) => {


    await bodyParser(req);
    database.push(req.body);
    let response = [

        {
            "message": "Create users"
        },
        database

    ]

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));

};

// Actualizar usuarios

exports.updateUsers = async (req, res) => {

    // database.push(req.body);

    const urlParser = url.parse(req.url, true);
    // console.log(urlParser)


    const idQuery = urlParser.path.split("?")[1];
    const key = idQuery.split("=")[0];
    const value = idQuery.split("=")[1];

    // console.log(key, value);

    if (key === "id") {

        await bodyParser(req);
        database[value - 1] = req.body;
        let response = [

            {
                "message": "Update users"
            },
            database
    
        ];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"message" : "key is wrong"}));
    }

    


};



// Borrando usuarios

exports.deleteUsers = async (req, res) => {

    // database.push(req.body);

    const urlParser = url.parse(req.url, true);
    // console.log(urlParser)


    const idQuery = urlParser.path.split("?")[1];
    const key = idQuery.split("=")[0];
    const value = idQuery.split("=")[1];

    // console.log(key, value);

    if (key === "id") {


        database.splice(value - 1, 1);
        let response = [

            {
                "message": "Delete users"
            },
            database
    
        ];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"message" : "key is wrong"}));
    }

    


};