const getUsers = (req, res)=>{
    res.send("Mostrando todos los usuarios")
}

const createUser = (req, res)=>{
    res.send("Creando usuario")
}

const updateUser = (req, res)=>{
    res.send("Modificando usuario")
}

const deleteUser = (req, res)=>{
    res.send("Eliminando usuario")
}

const chivoMelaPela = (req, res)=>{
    res.send("Me la pela con canela")
}
module.exports = {getUsers, createUser, updateUser, deleteUser, chivoMelaPela}