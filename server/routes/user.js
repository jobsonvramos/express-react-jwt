const express = require('express')
const router = express.Router()
const { authenticateJWT, authorizeRole } = require('./middlewares/JWTMiddlewares.js')

router.get('/user-role-protected-endpoint', authenticateJWT, authorizeRole('USER'), async (req, res) => {
    res.status(200).json({ message: 'Você está autorizado a acessar dados da role USER' })
})

router.get('/admin-role-protected-endpoint', authenticateJWT, authorizeRole('ADMIN'), async (req, res) => {
    res.status(200).json({ message: 'Você está autorizado a acessar dados da role ADMIN' })
})

module.exports = router