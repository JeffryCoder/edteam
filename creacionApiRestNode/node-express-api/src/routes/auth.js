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

        jwt.sign({user:user}, secretKey, (err, token) => {


            res.json({token:token});
        });

    }else{

        res.json({mensaje: "Usuario o contraseña incorrectos"})
    }

    
});


module.exports = router;