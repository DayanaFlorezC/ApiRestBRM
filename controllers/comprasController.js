const db = require('../config/database')
const Compra = require('../models/compra')

const comprasController = {

    async createCompra(req, res) {

        const { description, total, productos, user } = req.body

        const infoCompra = {
            description,
            total,
            productos,
            user,
            fecha: new Date()
        }

        console.log(infoCompra, 'infoCompra')

        const newCompra = new Compra(infoCompra)

        const resp = await newCompra.save()

        res.json({ succes: true, msg: 'Compra creada', compra: resp })
    },


    async getCompraById(req, res) {
        const id = req.params.id;

        const { rows } = await db.query('SELECT * FROM compras WHERE id = $1', [id])

        const compra = rows[0]

        if (!compra) return res.json({ success: false, msg: 'No se encontro esta compra' })

        return res.json({
            success: true,
            msg: 'ok',
            compra: compra
        })

    },

    async getAllCompras(req, res) {

        const { rows } = await db.query('SELECT * from compras')

        res.json({
            success: true,
            compras: rows
        })

    },

    async getComprasBatch(req, res) {

        const { limit, page } = req.query

        const query = 'SELECT * FROM compras LIMIT $1 OFFSET $2'

        const values = [limit, (page - 1) * limit]

        const { rows } = await db.query(query, values)

        res.json({
            success: true,
            compras: rows
        })

    },

    //get compras by user

    async getComprasByUser(req, res) {

        const { userId } = req.params

        console.log(userId, 'userId')
        const { rows } = await db.query('SELECT * FROM compras WHERE user_id = $1', [userId])

        res.json({
            success: true,
            compras: rows
        })

    },


    


}

module.exports = comprasController