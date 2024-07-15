const jwt = require('jsonwebtoken')

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    console.log("Iniciando autenticacao")

    if (token) {
        console.log("Checando Token:")
        console.log(token)
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            console.log("Token verificado")
            if (err) {
                console.log("ERRO:")
                console.log(err)
                return res.status(401).json({message: 'Token invalido'})
            }
            req.user = decoded
            console.log(decoded)
            next()
        })
    } else {
        console.log("Sem token!")
        return res.status(401).json({ message:'Token de autorização não fornecido' })
    }
}

const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role != role) {
            return res.sendStatus(403)
        }
        next()
    }
}

module.exports = {
    authenticateJWT,
    authorizeRole
}