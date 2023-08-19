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
    const param = req.params.id
    const sql = 'select * from users where id=?'

    connection.query(sql, param, (err, result)=> {
        if (err){
            console.log("Ha ocurrido un error modificando el usuario. " + err)
        }else{
            console.log(result)
            res.render('update-user', {user:result})
        }
    })
    // busqueda en db con los datos obtenidos


    //console.log(param);
    
    
}

const getDeleteUser = (req, res)=>{
    const param = req.params.id
    const sql = 'select * from users where id=?'

    connection.query(sql, param, (err, result)=> {
        if (err){
            console.log("Ha ocurrido un error modificando el usuario. " + err)
        }else{
            console.log(result)
            res.render('delete-user', {user:result})
        }
    })
}

const createUser = (req, res) => {

    const sql = 'insert into users SET ?'
    const data = req.body
    connection.query(sql, data, (err,result) => {
        
        if (err){
            console.log('Ha ocurrido un error al registrar usuario')
        }else{
            console.log('Usuario registrado')

            res.redirect('/users/all')
        }
    })
    //console.log(req.body)
    //res.render('users', {users: users});

    //console.log(req.body)



}
const updateUser = (req, res) => {

    const param = req.params.id

    const sql = `update users SET name='${req.body.name}', age= ${req.body.age} where id=${param}`

    connection.query(sql, (err, result)=>{

        if (err){
            console.log('Ha ocurrido un error al actualizar el usuario en la base de datos')
        }else{
            console.log('Usuario actualizado correctamente')
            res.redirect('/users/all')
        }

    })
    //console.log(param)
    


    //res.render('users', {users: users});
}
const deleteUser = (req, res) => {
    
    const param = req.params.id

    const sql = `delete from users where id = ${param}`

    connection.query(sql, (err, result)=>{

        if (err){
            console.log('Ha ocurrido un error al actualizar el usuario en la base de datos')
        }else{
            console.log('Usuario eliminado correctamente')
            res.redirect('/users/all')
        }

    })


}

module.exports = {getUsers, getCreateUser, getUpdateUser, getDeleteUser, createUser, updateUser, deleteUser}