module.exports = {
    development: {
      username: process.env.DB_USER || 'youruser',
      password: process.env.DB_PASSWORD || 'yourpassword',
      database: process.env.DB_NAME || 'yourdb',
      host: process.env.DB_HOST || 'db',
      dialect: 'postgres'
    }
  };
  