module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('usuarios', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: 'USER'
      }
    });
  
    return User;
  };
  