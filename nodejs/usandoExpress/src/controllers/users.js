

const getUsers = (req, res)=>{
    res.render('users')
}

const createUser = (req, res)=>{
    res.render('create-user')
}

const updateUser = (req, res)=>{
    res.render('update-user')
}

const deleteUser = (req, res)=>{
    res.render('delete-user')
}

module.exports = {getUsers, createUser, updateUser, deleteUser}