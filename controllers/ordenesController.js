const db = require('../config/database')
//const Orden = require('../models/compra')

const ordenesController = {

    async createOrden(req, res) {

        const { description, total, productos, user } = req.body

        const infoOrden = {
            description,
            total,
            productos,
            user,
            fecha: new Date()
        }

        console.log(infoOrden, 'infoOrden')

        const newOrden = new Orden(infoOrden)

        const resp = await newOrden.save()

        res.json({ succes: true, msg: 'Orden creada', orden: resp })
    },

    async getOrdenesByCompra (req, res) {
        const id = req.params.compraId;

        const { rows } = await db.query('SELECT * FROM ordenes WHERE id = $1', [id])

        const orden = rows[0]

        if (!orden) return res.json({ success: false, msg: 'No se encontro esta orden' })

        return res.json({
            success: true,
            msg: 'ok',
            orden: orden
        })
    },


    async getAllOrdenes(req, res) {

        const { rows } = await db.query('SELECT * from ordenes')

        res.json({
            success: true,
            ordenes: rows
        })

    },


    async deleteOrden(req, res) {

        const { id } = req.params

        const { rows } = await db.query('DELETE FROM ordenes WHERE id = $1', [id])

        res.json({ success: true, msg: 'Orden eliminada' })

    }
    
        
}


module.exports = ordenesController
