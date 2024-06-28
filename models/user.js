const db = require('../config/database');

class User {
    constructor({ nombre, email, phone, password }) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = phone;
        this.role = 'client'; // }role por defecto
        this.password = password;
    }

    async save() {
        try {

            const text = 'INSERT INTO usuarios(nombre, email, telefono, role, password) VALUES($1, $2, $3, $4, $5) RETURNING *';
            const values = [this.nombre, this.email, this.telefono, this.role, this.password];

            const { rows } = await db.query(text, values);

            return rows[0];
        

        } catch (error) {
            console.error('Error al guardar usuario:', error);
            throw error;
        }
    }

   async updateUser() {
        try {
            const text = 'UPDATE users SET name=$1, email=$2, phone_number=$3 WHERE id=$4 RETURNING *';
            const values = [this.name, this.email, this.phone_number, this.id];

            const { rows } = await db.query(text, values);

            return rows[0];
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            throw error;
        }
    }
}

module.exports = User;
