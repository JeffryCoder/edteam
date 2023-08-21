const verifyToken = (req, res, next) => {

    console.log('Accediendo al middleware')
    console.log("Tamo verificando que ute' tenga acceso")

    const authorization_header = req.headers.authorization;

    if (authorization_header !== undefined){
        console.log(authorization_header)

        const token = authorization_header.split(' ')[1]
        req.token = token
        next()

    }else{
        console.log('No hay token')
        console.log('Sin token no hay acceso papi')
    }

    

}


exports.verifyToken = verifyToken;