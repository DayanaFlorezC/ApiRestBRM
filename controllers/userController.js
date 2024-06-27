const User = require('../models/user')

const userController = {

    createUser(req, res) {

        const infoUser = {
            name: req.body.name,
            email: req.body.email,
            phone_number: req.body.phone,
            role: 'client',
            password: req.body.password //encript
        }
        console.log(infoUser, 'informacion del usuario')

        const newUser = new User(infoUser)
        newUser.save()

        res.json({success: true, msg: 'Usuario creado con exito'})

    },

   async LoginUser(req, res){

        // primero se busaca el email si existe
        
        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        })
       const user = await newUser.findUserByEmail()

       if(!user){
        return res.json({success: false, msg: 'Usuario invalido'})
       }

               //se compara la clave esto hay que arregalralo con bcryp

               if(user.password !== req.body.password){
                return res.json({success: false, msg: 'Usuario invalido'})
               }

       console.log(user, 'veamos')

       res.json({success: true, user, token:'aqui va token', msg: 'Usuario encontrado'})


    },
    getUserById(){

    },

    getAllUsers(){

    },

    updateUser(){
        
    }

}


module.exports = userController