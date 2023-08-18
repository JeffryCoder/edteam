const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/all', userController.getUsers)
router.get('/create', userController.getCreateUserreateUser)
router.get('/update', userController.getUpdateUserupdateUser)
router.get('/delete', userController.getDeleteUserdeleteUser)




module.exports = router