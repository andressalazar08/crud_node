const Usuario=require('../models/Usuario');

//controlador
exports.obtenerUsuarios= async (req, res)=>{
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
};

exports.obtenerUsuarioId = async (req,res)=>{
    const id=parseInt(req.params.id);
    
    const usuario= await Usuario.findByPk(id);

    if(!usuario){
        return res.status(404).json({
            mensaje:"Usuario no encontrado"
        })
    }
     res.json(usuario)

};

exports.crearUsuario = async (req,res)=>{

    //obtener los datos del json que llegarán por el body
    const {nombre,email} =req.body;
    //insertar el nuevo usuario a la BBDD
    const nuevoUsuario={
        nombre,
        correo:email
    }
    //entregar una respuesta al cliente
    const nuevo= await Usuario.create(nuevoUsuario)

    res.status(201).json({ mensaje: "Usuario creado correctamente"})
};

exports.actualizarUsuario =async(req,res)=>{
//capturar el id por params
const id= parseInt(req.params.id);
//capturar del body el nuevonombre
const nuevoNombre=req.body;
//buscar el usuario que tenga el id
const usuario=await Usuario.findByPk(id);
//si no se encuentra res. 404
if(!usuario){
    res.status(404).json({mensaje:"usuario no encontrado"})
}
//modificar el usuario con el id encontrado
await usuario.update({nombre:nuevoNombre})
res.status(214).json({mensaje:"usuario actualizado"})

};

// //ruta para modificar o actualizar un usuario
// app.put("/usuarios/modificar/:id",(req, res)=>{
//     const id =parseInt(req.params.id);
//     const {nuevoNombre}=req.body;
//     const usuario=usuarios.find(user=> user.id===id);
//     //console.log(usuario.nombre)//verificar el nombre actual
//     const nombreActual=usuario.nombre//Lina
//     usuario.nombre=nuevoNombre//modificación

//     res.status(214).json({
//         mensaje:`el usuario anterior era ${nombreActual}, el nuevo nombre es ${nuevoNombre} `,
//         datos:usuario
//     })
// });


// //ruta para crear un nuevo usuario
// app.post("/usuarios/crear", (req,res)=>{
//     const {nombre, email}=req.body; //desestructuring
//     const nuevoUsuario={
//         id:usuarios.length+1,
//         nombre:nombre,
//         email:email,
//     }
//     usuarios.push(nuevoUsuario)//agregando
//     //console.log(nuevoUsuario)
//     res.status(201).json({
//         mensaje:"usuario creado correctamente"
//     })
//     //console.log(nombre)
// })



// (req,res)=>{
// //     res.json(usuarios)
// // }


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