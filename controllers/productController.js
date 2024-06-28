const db = require('../config/database')
const Product = require('../models/product')

const productController = {

    async createProduct(req, res) {

        if(req.user.role !== 'admin') return res.json({success: false, msg: 'No tienes permisos para crear productos'})

        const { nombre, precio, disponibles, lote } = req.body

        const infoProduct = {
            nombre,
            precio,
            disponibles,
            lote,
            fecha: new Date()
        }

        const newProduct = new Product(infoProduct)

        const resp = await newProduct.save()

        res.json({ succes: true, msg: 'Producto creado', product: resp })

    },

    async getProductById(req, res) {
        const id = req.params.id;

        const { rows } = await db.query('SELECT * FROM productos WHERE id = $1', [id])

        const product = rows[0]

        if (!product) return res.json({ success: false, msg: 'No se encontro este producto' })

        return res.json({
            success: true,
            msg: 'ok',
            producto: product
        })

    },

    async getAllProducts(req, res) {

        const { rows } = await db.query('SELECT * from productos')

        res.json({
            success: true,
            productos: rows
        })


    },

    async getProductsBatch(req, res) {

        const { limit, page } = req.query

        const query = 'SELECT * FROM productos LIMIT $1 OFFSET $2'

        const values = [limit, (page - 1) * limit]

        const { rows } = await db.query(query, values)

        res.json({
            success: true,
            productos: rows,
            msg: 'ok'
        })
    },

    updateProducts(req, res) {

        if(req.user.role !== 'admin') return res.json({success: false, msg: 'No tienes permisos para actualizar productos'})

        const { id } = req.params

        const { nombre, precio, disponibles, lote } = req.body

        const product = new Product({ nombre, precio, disponibles, lote })

        product.updateProduct(id)

        res.json({
            success: true,
            msg: 'Producto actualizado'
        })

    },

    deleteProducts(req, res) {

        if(req.user.role !== 'admin') return res.json({success: false, msg: 'No tienes permisos para eliminar productos'})

        const { id } = req.params

        const query = 'DELETE FROM productos WHERE id = $1'

        const values = [id]

        db.query(query, values)

        res.json({
            success: true,
            msg: 'Producto eliminado'
        })

    }
}


module.exports = productController