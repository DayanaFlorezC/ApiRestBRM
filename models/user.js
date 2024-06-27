//const db = require('../config/database')

class User {
    constructor(id, name, email, phone_number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone_number = phone_number;
        this.role = 'client'
    }

    save(){
        console.log('kkas', User.email)

        //y aqui hago los movimientos en la base de datos que aun no instalo
    }

    async findUserByEmail(email, password){
        return {
            name: 'mar',
            email: 'martu',
            password: '12345',
            role: 'ldkld'
        }
    }
}


module.exports = User