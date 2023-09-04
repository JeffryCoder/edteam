const {Router} = require('express');
const Movies = require("../models/movies");

const router = Router();


router.post("/api/movies", async (req, res) => {


    const {title, year, rate, director} = req.body;
    
    const newMovies = await Movies({
        title: title,
        year: year,
        rate: rate,
        director: req.body.director // Otra forma de hacerlo
    })

    newMovies.save();
    res.json({"mensaje":"Accediendo a peliculas por metodo post"});


});




module.exports = router;