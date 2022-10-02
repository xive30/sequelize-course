module.exports = {
    development: {
        username: process.env.DB_USERNAME || 'postgres',
        passowrd: process.env.DB_PASSWORD || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || '5432',
        database: process.env.DB_DATABASE || 'postgres',
        dialect: 'postgre'
    },
    test: {
        username: process.env.DB_TEST_USERNAME || 'postgres',
        passowrd: process.env.DB_TEST_PASSWORD || 'postgres',
        host: process.env.DB_TEST_HOST || 'localhost',
        port: parseInt(process.env.DB_TEST_PORT) || '5433',
        database: process.env.DB_TEST_DATABASE || 'postgres',
        dialect: 'postgre'
    }
}