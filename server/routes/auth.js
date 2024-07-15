const express = require('express')
const bcrypt = require('bcryptjs')
const db = require('../models/index.js')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/register', async (req, res) => {
    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const user = await db.User.create({
            username,
            password: hashedPassword
        })
        res.sendStatus(201).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    const user = await db.User.findOne({ where: { username } })

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, {expiresIn: '1m'})
        res.json({ token })
    } else {
        res.status(400).json({ error: 'invalid credentials' })
    }
})

router.post('/refresh-token', async (req, res) => {
    const { token } = req.body

    if (!token) {
        res.sendStatus(403)
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }

        const newToken = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' })
    })
})

module.exports = router