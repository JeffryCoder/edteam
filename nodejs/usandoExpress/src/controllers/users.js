const users = [
    { id: 1, nombre: 'Jeffry', edad: 21},
    { id: 2, nombre: 'Vladimir', edad: 29},
    { id: 3, nombre: 'Anderson', edad: 22},
    { id: 4, nombre: 'Cleudy', edad: 23},
    { id: 5, nombre: 'Nelson', edad: 30},
    { id: 6, nombre: 'Miguelito', edad: 18},
    { id: 7, nombre: 'Shantal', edad: 30}
]

const getUsers = (req, res)=>{
    res.render('users', {users: users})
}

const getCreateUser = (req, res)=>{
    res.render('create-user')
}

const getUpdateUser = (req, res)=>{
    res.render('update-user')
}

const getDeleteUser = (req, res)=>{
    res.render('delete-user')
}

const createUser = (req, res) => {

    
}
const updateUser = (req, res) => {


}
const deleteUser = (req, res) => {


}

module.exports = {getUsers, getCreateUser, getUpdateUser, getDeleteUser}