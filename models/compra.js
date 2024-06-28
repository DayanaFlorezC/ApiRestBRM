//model de pr
const db = require('../config/database')

class Compra {constructor({description, total, user, fecha}) {
    this.description = description;
    this.total = total;
    this.user_id=user; // relacion con usuario
    this.fecha= fecha
}

async save(){

    try {
        const text = 'INSERT INTO compras(description, total, user_id, fecha) VALUES($1, $2, $3, $4) RETURNING *';
        const values = [this.description, this.total, this.user_id, this.fecha];

        const { rows } = await db.query(text, values);

        return rows[0];
        
    } catch (error) {
        console.error('Error al guardar compra:', error);
        throw error;
    }

}
}


module.exports = Compra