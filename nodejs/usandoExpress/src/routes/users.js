const express = require('express')
const router = express.Router()

router.get('/users', (req, res)=>{

    res.send("Mostrando todos los usuarios")
})

router.get('/create', (req, res)=>{

    res.send("Creando usuario")
})

router.get('/update', (req, res)=>{

    res.send("Modificando usuario")
})

router.get('/delete', (req, res)=>{

    res.send("Eliminando usuario")
})

module.exports = router