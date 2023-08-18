const users = [

    { id: 1, nombre: 'Jeffry', edad: 19},
    { id: 2, nombre: 'Anderson', edad: 19},
    { id: 3, nombre: 'Shantal', edad: 19},
    { id: 4, nombre: 'Nelson', edad: 19},
    { id: 5, nombre: 'Nelson', edad: 19},

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

    const param = req.params.id ;

    //const usersToUpdate = users.find(x => x.id === param)

    //console.log(usersToUpdate);

    for( let i = 0; i < users.length; i++){

        if (param == users[i].id){

            users[i].nombre = req.body.nombre;
            users[i].edad = req.body.edad;
            break;
        }
        

    }
    res.render('users', {users: users});
}
const deleteUser = (req, res) => {


}

module.exports = {getUsers, getCreateUser, getUpdateUser, getDeleteUser, createUser, updateUser, deleteUser}