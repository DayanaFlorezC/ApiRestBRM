const jwt = require('jsonwebtoken')

const authFuction = (req, res, next) => {

    const token = req.headers['authorization']

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No hay token proporcionado.' });
    }

    try {
        const tokenSinBearer = token.split(' ')[1]
        const decoded = jwt.verify(tokenSinBearer, 'tuClaveSecreta');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Acceso denegado. Token no válido.' });
    }
}


module.exports = authFuction;