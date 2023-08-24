exports.getAllUsers = (req, res)=>{

    console.log("Accediendo a todos los usuarios")
}

exports.getUser = (req, res)=>{

    // Parametros de ruta y parametros Query
    //console.log(req.query.enabled)
    console.log("Accediendo al usuario con id "+ req.params.id)
}

exports.createUser = (req, res) =>{

    let data = req.body

    const {name, lastname, email, phone} = data

    console.log(name, lastname, email, phone)
}
exports.updateUser = (req, res) =>{

    let data = req.body

    const {name, lastname, email, phone} = data
    console.log(req.params.id)
    console.log(name, lastname, email, phone)
    
}
exports.deleteUser = (req, res) =>{

    console.log(req.params.id)
}