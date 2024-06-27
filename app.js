const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const comprasRouter = require('./routes/comprasRoutes')
//const db= require('./config/database')


const app = express()

//cors 
//no me aacuerdo que va a aca

console.log('kakak')

// Conectar a la base de datos

/*db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', 'err');
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

*/

app.use(express.json()); // Para parsear JSON en las solicitudes

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Rutas principales
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', comprasRouter)



const port = 3000

app.listen(port, () => {
  console.log('Server Running in port ' + port)
})