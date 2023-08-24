exports.getAllUsers = (req, res)=>{

    console.log("Accediendo a todos los usuarios")
}

exports.getUser = (req, res)=>{

    // Parametros de ruta y parametros Query
    //console.log(req.query.enabled)
    console.log("Accediendo al usuario con id "+ req.params.id)
}