const db = require('../config/database')

class Orden {constructor({total, valorunitario, cantidad, producto, compra, }) {
    this.total = total;
    this.valorunitario = valorunitario;
    this.cantidad = cantidad;
    this.producto_id = producto; // relacion con productos
    this.compra_id= compra; // relacion con compra
}

async save(){

    try {
        const text = 'INSERT INTO ordenes(total, valorunitario, cantidad, producto_id, compra_id) VALUES($1, $2, $3, $4, $5) RETURNING *';
        const values = [this.total, this.valorunitario, this.cantidad, this.producto_id, this.compra_id];

        const { rows } = await db.query(text, values);

        return rows[0];
        
    } catch (error) {
        console.error('Error al guardar orden:', error);
        throw error;
    }

}

}

module.exports = Orden