const db = require('../config/database')

class Product {
    constructor({ nombre, precio, disponibles, lote, fecha}) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponibles = disponibles;
        this.lote=lote;
        this.fecha= fecha
    }

    async save(){
        console.log('sdsd')
        try {
            const text = 'INSERT INTO productos(nombre, precio, disponibles, lote, fecha) VALUES($1, $2, $3, $4, $5) RETURNING *';
            const values = [this.nombre, this.precio, this.disponibles, this.lote, this.fecha];

            console.log(values, 'ksk')

            const { rows } = await db.query(text, values);

            return rows[0];
            
        } catch (error) {
            console.error('Error al guardar:', error);
            throw error;
        }
    }

    async updateProduct(id){
        try {
            const text = 'UPDATE productos SET nombre=$1, precio=$2, disponibles=$3, lote=$4 WHERE id=$5 RETURNING *';
            const values = [this.nombre, this.precio, this.disponibles, this.lote, id];

            console.log(values, 'ksk')

            const { rows } = await db.query(text, values);

            console.log(rows, 'kaks')

            return rows[0];
        } catch (error) {
            console.error('Error al actualizar:', error);
            throw error;
        }
    }
}


module.exports = Product