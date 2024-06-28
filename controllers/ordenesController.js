const db = require('../config/database')
const Orden = require('../models/orden')

const ordenesController = {

    async createOrden(req, res) {

        const { producto, compra, cantidad, valorunitario, total } = req.body

        const infoOrden = {
            total,
            valorunitario,
            cantidad,
            producto,
            compra
        }

        const newOrden = new Orden(infoOrden)

        const resp = await newOrden.save()

        res.json({ succes: true, msg: 'Orden creada', orden: resp })
    },

    async getOrdenesByCompra (req, res) {
        const id = req.params.compraId;

        const { rows } = await db.query('SELECT * FROM ordenes WHERE compra_id = $1', [id])

        const ordenes = []

        for (const orden of rows) {
            const { rows } = await db.query('SELECT * FROM productos WHERE id = $1', [orden.producto_id])
            orden.infoProducto = rows[0] 
            ordenes.push(orden)
            
        }

        if (!ordenes) return res.json({ success: false, msg: 'No se encontro esta orden' })

        return res.json({
            success: true,
            msg: 'ok',
            ordenes: ordenes
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
