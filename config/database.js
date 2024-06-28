const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

client.connect()
    .then(() => console.log('Conectado a PostgreSQL'))
    .catch(err => console.error('Error de conexión', err.stack));

module.exports = client;