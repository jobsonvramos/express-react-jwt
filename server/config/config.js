module.exports = {
    development: {
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'desafio',
        host: process.env.DB_HOST || 'database',
        dialect: 'postgres'
    }
}