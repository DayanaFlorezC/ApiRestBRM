const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const comprasRouter = require('./routes/comprasRoutes')
const ordenesRouter = require('./routes/ordenesRouter')
const morgan = require('morgan');


const app = express()

//configurar cors
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(morgan('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

//agregar ruta swagger
app.use('/api-docs', require('./routes/swaggerRoutes'));

// Rutas principales
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', comprasRouter)
app.use('/api', ordenesRouter)

const port = 3000

app.listen(port, () => {
  console.log('Server Running in port ' + port)
})