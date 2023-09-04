const {Router} = require('express');
const Movies = require("../models/movies");

const router = Router();

router.get("/api/movies", async (req, res) => {


    res.json(await Movies.find());



});


router.post("/api/movies", async (req, res) => {

    try {
        const {title, year, rate, director} = req.body;
    
        const newMovies = await Movies({
            title: title,
            year: year,
            rate: rate,
            director: req.body.director // Otra forma de hacerlo
        })

        newMovies.save();
        res.json({"mensaje":"Pelicula guardada con exito"});
    } catch (error) {
        res.status(500).json({"mensaje":"Error al acceder a peliculas por metodo post"});
    }

    


});




module.exports = router;