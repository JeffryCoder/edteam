const AuthService = require('../services/authService')

const authService = new AuthService()

exports.register = async (req, res) => {

    try {
        await authService.register(req.body)
        res.status(201).json({"message": "Usuario administrador creado correctamente"})
    } catch (error) {
        res.status(500).json({"error": error.message})
    }

}


exports.login = (req, res) => {




}