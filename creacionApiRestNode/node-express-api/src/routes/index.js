const { Router } = require("express");
const router = Router();
//ENDPOINTS

router.get("/users", (req, res) => {
    let response = [
        {"name": "Juan", "age": 20},
        {"name": "Pedro", "age": 30},
        {"name": "Maria", "age": 40},
        {"name": "Jose", "age": 50},
        {"name": "Luis", "age": 60},
    ];
    res.json(response);
});

;

router.post("/users", (req, res) => {


    console.log(req.body)
    res.json({"mensaje":"Accediendo a usuarios por metodo post"});

});

module.exports = router;