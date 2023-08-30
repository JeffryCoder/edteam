const UserService = require('../services/userServices')

const userService = new UserService()

exports.getAllUsers = async (req, res)=>{

    const users =  await userService.getAll()
    res.status(200).json(users)
}

exports.getUser = async (req, res)=>{


    try {
        const id = req.params.id

        const user = await userService.filterById(id)

        
        // Parametros de ruta y parametros Query
        //console.log(req.query.enabled)
        res.status(200).json(user)
    } catch (error) {
        
        return res.status(404).json({"message": "Usuario no encontrado"})

    }
    

    


    

    
}

exports.createUser = async (req, res) =>{



    try {
        let data = req.body
        

        await userService.create(data)




        res.status(201).send("Usuario registrado")

    } catch (error) {
        res.status(500).json({"error": error.message})
    }





    
}
exports.updateUser = async (req, res) =>{

    let data = req.body

    try {
        const id = req.params.id

        const user = await userService.filterById(id)

        await userService.update(id, data)
        // Parametros de ruta y parametros Query
        //console.log(req.query.enabled)
        res.status(200).send("Usuario modificado")
    } catch (error) {
        
        return res.status(404).json({"message": "Usuario no encontrado"})

    }

    
    
}
exports.deleteUser = async (req, res) =>{


    try {
        const id = req.params.id

        const user = await userService.filterById(id)

        await userService.delete(id)
        // Parametros de ruta y parametros Query
        //console.log(req.query.enabled)
        
        res.status(200).send("Usuario eliminado")
    } catch (error) {
    
        return res.status(404).json({"message": "Usuario no encontrado"})

    }

}