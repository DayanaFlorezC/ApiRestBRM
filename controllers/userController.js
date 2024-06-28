const bcrypt = require('bcryptjs')
const db = require('../config/database')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const userController = {

    async createUser(req, res) {
        const { nombre, email, phone, password } = req.body;

        const userInfo = { nombre, email, phone, password };

        userInfo.password = bcrypt.hashSync(password, 10);
    
        try {
            const newUser = new User(userInfo);
            const user = await newUser.save();
        
            res.json({ success: true, msg: 'Usuario creado con éxito' });
        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).json({ success: false, msg: 'Error al crear usuario' });
        }
    },
    

   async LoginUser(req, res){
        
        const {email, password} = req.body  
        const { rows } = await db.query('SELECT * FROM usuarios WHERE email = $1', [email])

        const user = rows[0]

       if(!user){
        return res.json({success: false, msg: 'Usuario invalido'})
       }

        const validPassword = bcrypt.compareSync(password, user.password)

        if(!validPassword){
            return res.json({success: false, msg: 'Usuario invalido'})
        }

        delete user.password
        const secretKey = 'tuClaveSecreta';

        const token = jwt.sign(user, secretKey, { expiresIn: 60 * 60 * 24 })

       res.json({success: true, user, token, msg: 'Usuario encontrado'})

    },


    async getUserById(req, res){

        const {id} = req.params

        const { rows } = await db.query('SELECT * FROM usuarios WHERE id = $1', [id])

        const user = rows

        delete user.password

        if(!user){
            return res.json({success: false, msg: 'Usuario no encontrado'})
        }

        res.json({success: true, user, msg: 'Usuario encontrado con exito'})

    },

    async getAllUsers(req, res){

        const {rows} = await db.query('SELECT * FROM usuarios')

        const users = rows

        if(!users){
            return res.json({success: false, msg: 'No se encontraron usuarios'})
        }

        users.map(u =>{
            delete u.password
            return u
        })

        res.json({success: true, users, msg: 'Usuarios encontrados con exito', total: users.length})


    },

    async updateUser(req, res){

        const {id} = req.params

        const {nombre, email, phone} = req.body

        const { rows } = await db.query('SELECT * FROM usuarios WHERE id = $1', [id])

        const exist = rows?.[0]

        if(!exist){
            return res.json({success: false, msg: 'Usuario no encontrado'})
        }

        const userinfo = {
            nombre: nombre || exist.nombre,
            email: email || exist.email,
            phone: phone || exist.telefono
        }

        const userUpdated = new User(userinfo)

        const user = await userUpdated.updateUser(id)

        res.json({success: true, user, msg: 'Usuario actualizado con exito'})
        
    }

}


module.exports = userController