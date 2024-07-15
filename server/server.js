const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./models/')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

const app = express();

app.use(bodyParser.json())

app.use('/auth', authRoutes)
app.use('/user', userRoutes)

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const serverPort = process.env.SERVER_PORT ?? 3000


db.sequelize.sync().then(() => {
    app.listen(serverPort, () => {
        console.log("server running on port:"+serverPort)
    })
})
