exports.getAllUsers = (req, res)=>{

    res.status(200).send("Accediendo a todos los usuarios")
}

exports.getUser = (req, res)=>{

    // Parametros de ruta y parametros Query
    //console.log(req.query.enabled)
    res.send("Accediendo al usuario con id "+ req.params.id)

    
}

exports.createUser = (req, res) =>{



    try {
        let data = req.body
        console.log(name)

        const {name, lastname, email, phone} = data

        console.log(name, lastname, email, phone)

        res.status(201).send("Usuario registrado")

    } catch (error) {
        res.status(500).json({"error": error.message})
    }





    
}
exports.updateUser = (req, res) =>{

    let data = req.body

    const {name, lastname, email, phone} = data
    console.log(req.params.id)
    console.log(name, lastname, email, phone)

    res.status(200).send("Usuario modificado")
    
}
exports.deleteUser = (req, res) =>{


    console.log(req.params.id)
    res.status(200).send("Usuario eliminado")
}