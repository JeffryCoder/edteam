const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const secretKey = process.env.SECRET_KEY || "secretKey";
router.post("/api/login", (req, res) => {
    
    const { email, password } = req.body;

    const user = {
        id: 1,
        name: "Jeffry",
        email: "jeffry@frixzito.com",
        password: "test"
    };

    if (email === user.email && password === user.password) {

        jwt.sign({user:user}, secretKey, {expiresIn: "1h"} , (err, token) => {


            res.json({token:token});
        });

    }else{

        res.json({mensaje: "Usuario o contraseña incorrectos"})
    }

    
});


router.post("/api/users", verifyToken , (req, res) =>{

    jwt.verify(req.token, secretKey, (err, data) => {
        if (err){
            res.sendStatus(403);
        }else {
            res.json({
                mensaje: "Accediendo a usuarios por metodo post y autenticado con jwt",
                data: data
            });
        }
    });

    // res.json({message: "Obteniendo todos los usuarios desde el API"})

});

function verifyToken(req, res, next) {

    const header = req.headers["authorization"];

    if (header !== undefined) {

        const token = header.split(" ")[1];
        req.token = token;
        next();
    }else {
        res.sendStatus(403);
    }

}

module.exports = router;