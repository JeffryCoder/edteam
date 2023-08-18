const path = require('path')
const root = path.join(__dirname, '../public')

const getUsers = (req, res)=>{
    res.sendFile('/html/users.html', {root: root })
}

const createUser = (req, res)=>{
    res.sendFile('/html/create-user.html', {root: root })
}

const updateUser = (req, res)=>{
    res.sendFile('/html/update-user.html', {root: root })
}

const deleteUser = (req, res)=>{
    res.sendFile('/html/delete-user.html', {root: root })
}

const chivoMelaPela = (req, res)=>{
    res.send("Me la pela con canela")
}
module.exports = {getUsers, createUser, updateUser, deleteUser, chivoMelaPela}