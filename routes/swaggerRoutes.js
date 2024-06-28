const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-1.0.0-resolved.json');

const router = express.Router();

// Usar swaggerUi.serve para servir los archivos estáticos y swaggerUi.setup para configurar Swagger con el documento JSON
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
