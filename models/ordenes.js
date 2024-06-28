const db = require('../config/database')

class Orden {constructor({productos, cantidad, productos, user, fecha}) {
    this.description = description;
    this.total = total;
    this.products = productos; // relacion con productos
    this.user_id=user; // relacion con usuario
    this.fecha= fecha
}

}