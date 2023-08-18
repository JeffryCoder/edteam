const users = [
    { id: 1, nombre: 'Jeffry', edad: 21},
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

    users.push(req.body);
    res.render('users', {users: users});

    //console.log(req.body)



}
const updateUser = (req, res) => {


}
const deleteUser = (req, res) => {


}

module.exports = {getUsers, getCreateUser, getUpdateUser, getDeleteUser, createUser, updateUser, deleteUser}