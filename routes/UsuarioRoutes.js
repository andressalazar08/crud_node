const express= require('express');
const router = express.Router();
const controlador = require('../controllers/UsuarioController');

router.get("/usuarios/todos",controlador.obtenerUsuarios);
router.get("/usuarios/buscar/:id", controlador.obtenerUsuarioId);
router.post("/usuarios/crear",controlador.crearUsuario);
router.put("/usuarios/actualizar/:id", controlador.actualizarUsuario);

module.exports=router;//exporto para usar en index



// //ruta para obtener un usuario especifico
// app.get("/usuarios/buscar/:id",(req,res)=>{
//     const id=parseInt(req.params.id);
//     console.log(typeof(id))
//     const usuario=usuarios.find(user=>user.id===id)
//     //console.log(usuario)

//     if(!usuario){
//         return res.status(404).json({
//             mensaje:"Usuario no encontrado"
//         })
//     }

//     res.json(usuario)
// })







// //ruta para obtener todos los usuario de la api
// app.get("/usuarios/todos", (req,res)=>{
//     res.json(usuarios)
// })
