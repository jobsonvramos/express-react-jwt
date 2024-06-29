const { Sequelize } = require('sequelize');
const config = require('../config/config.js');
const sequelize = new Sequelize(config.development);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./user.js')(sequelize, Sequelize);

module.exports = db;
