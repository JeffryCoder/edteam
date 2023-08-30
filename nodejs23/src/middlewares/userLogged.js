const userLogged = (req, res, next)=>{

    let isLogged = true;

    if (!isLogged){
        return res.status(401).json({'message': "Usuario no logueado"})
    }

    next()

}

module.exports = userLogged