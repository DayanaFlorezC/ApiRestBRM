const Product = require('../models/product')

const productController = {

    createProduct(req, res){
        const {name, prize, stock, available, lote} = req.body

        const newProduct = new Product({
            name, 
            prize,
            stock, 
            available,
            lote, 
            date: new Date()
        })

        newProduct.save()

        res.json({succes: true, msg: 'okoko'})

    },

    getProductById(req, res){
        const id= req.params.id
        console.log(id)

        return res.json({product: {
            name: 'pan',
            disponible: 6,
            precio: 1000,
            lote: 7,
            fechaIngreso: '23/09/2029'
        }})

    },

    getAllProducts(){
        
    },

    getProductsBatch(req, res){
        const { limit, page } = req.query


    },

    updateProducts(){

    },

    deleteProducts(){
        
    }
}


module.exports = productController