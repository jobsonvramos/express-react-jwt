const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const testRoutes = require('./routes/test');

const app = express();

app.use(bodyParser.json());

// Rotas de API
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);
app.use('/test', testRoutes);

// Servir arquivos estáticos da aplicação React
app.use(express.static(path.join(__dirname, 'client/build')));

// Rota para servir a aplicação React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
