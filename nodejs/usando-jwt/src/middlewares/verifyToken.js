const verifyToken = (req, res, next) => {

    console.log('Accediendo al middleware')
    console.log("Tamo verificando que ute' tenga acceso")

    const authorization_header = req.headers.authorization;

    if (authorization_header !== undefined){
        console.log(authorization_header)
    }else{
        console.log('No hay token')
    }
    
    next()

}


exports.verifyToken = verifyToken;