const {Router} = require('express');
const Movies = require("../models/movies");

const router = Router();

router.get("/api/movies", async (req, res) => {

    const movies = await Movies.find();
    res.json({mensaje: "Peliculas encontradas con exito", movies});



});


// Para buscar peliculas por id

router.get("/api/movies/:id", async (req, res) => {

    

    try {
        const movie = await Movies.findById(req.params.id);
        res.json({mensaje: "Pelicula encontrada con exito", movie});
    } catch (error) {
        res.json({mensaje: "Error al buscar pelicula por id", error});
    }


});

// Para buscar peliculas por titulo


router.get("/api/movies/title/:title", async (req, res) => {

    const {title} = req.params;

    try {
        const movies = await Movies.find({title: title});
        res.json({mensaje: "Pelicula encontrada con exito", movies})
    } catch (error) {
        res.json({mensaje: "Error al buscar pelicula por titulo", error});
    }


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
// Para actualizar peliculas por id

router.put("/api/movies/:id", async (req, res) => {



    try {
        const { id } = req.params;

        await Movies.findByIdAndUpdate(id, req.body);
        const movies = await Movies.find();

        res.json({"mensaje":"Pelicula actualizada con exito", movies});
    } catch (error) {
        res.status(500).json({"mensaje":"Error al actualizar pelicula. Este ID no existe"});
    }

    


});  



module.exports = router;