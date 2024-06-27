//aqui debo hacer la conexion a la base de datos

const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_de_datos'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', 'err.stack');
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;
