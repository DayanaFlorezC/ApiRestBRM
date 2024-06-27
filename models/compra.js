//model de pr
//const db = require('../config/database')

class Compra {constructor(id, description, total, products, user, date) {
    this.id = id;
    this.description = description;
    this.total = total;
    this.products = products;
    this.user=user;
    this.date= date
}

save(){
    console.log('sdsd')
}
}


module.exports = Compra