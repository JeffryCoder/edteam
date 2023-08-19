const connection = require('../connection')


const getUsers = (req, res)=>{

    const sql = 'select * from users'
    connection.query(sql, (err, result) => {

        if (err){
            console.log('Ha ocurrido un error obteniendo usuarios de la base de datos')

        }else {
            console.log(result)
            res.render('users', {users: result})
        }
    })
    
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
    const param = req.params.id ;
    for( let i = 0; i < users.length; i++){

        if (param == users[i].id){

            users.splice(i, 1)
            break;
        }
    }
    res.render('users', {users: users});

}

module.exports = {getUsers, getCreateUser, getUpdateUser, getDeleteUser, createUser, updateUser, deleteUser}