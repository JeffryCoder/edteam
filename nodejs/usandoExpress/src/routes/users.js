const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/all', userController.getUsers)
router.get('/create', userController.createUser)
router.get('/update', userController.updateUser)
router.get('/delete', userController.deleteUser)
router.get('/chivo', userController.chivoMelaPela)

module.exports = router