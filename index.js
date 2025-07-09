const express=require('express'); //importar paquetes instalados con npm
const app=express();//la variable guarda una instancia de un servidor de express

app.use(express.json())//esto permite pasar información por el body



//ruta de prueba
//req: Request
//res: Response
//definición 
app.get("/",(req,res)=>{
    res.send("Mensaje desde el backend con nodemon")
})

const port=3000;

//esto quedará en una base de datos
let usuarios=[
    {id:1, nombre:'Diana', email:"diana@email.com"}, //0
    {id:2, nombre:'Lina', email:"lina@email.com"}, //1
    {id:3, nombre:'Andres', email:"andres@email.com"} //2
]

//ruta para obtener todos los usuario de la api
app.get("/usuarios/todos", (req,res)=>{
    res.json(usuarios)
})

//ruta para obtener un usuario especifico
app.get("/usuarios/buscar/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    console.log(typeof(id))
    const usuario=usuarios.find(user=>user.id===id)
    //console.log(usuario)

    if(!usuario){
        return res.status(404).json({
            mensaje:"Usuario no encontrado"
        })
    }

    res.json(usuario)
})

//ruta para crear un nuevo usuario
app.post("/usuarios/crear", (req,res)=>{
    const {nombre, email}=req.body; //desestructuring
    const nuevoUsuario={
        id:usuarios.length+1,
        nombre:nombre,
        email:email,
    }
    usuarios.push(nuevoUsuario)//agregando
    //console.log(nuevoUsuario)
    res.status(201).json({
        mensaje:"usuario creado correctamente"
    })
    //console.log(nombre)
})

//ruta para modificar o actualizar un usuario
app.put("/usuarios/modificar/:id",(req, res)=>{
    const id =parseInt(req.params.id);
    const {nuevoNombre}=req.body;
    const usuario=usuarios.find(user=> user.id===id);
    //console.log(usuario.nombre)//verificar el nombre actual
    const nombreActual=usuario.nombre//Lina
    usuario.nombre=nuevoNombre//modificación

    res.status(214).json({
        mensaje:`el usuario anterior era ${nombreActual}, el nuevo nombre es ${nuevoNombre} `,
        datos:usuario
    })
});


//ruta para eliminar un usuario
app.delete("/usuarios/eliminar/:id",(req,res)=>{

    //obetener el id del usuario por params de la url
    const id=parseInt(req.params.id);
    //buscar en la lista de usuarios el id que corresponda y recuperamos el indice(posición)
    //  array=[10,20,5,8]
    //posicion 0  1  2 3
    const indice = usuarios.findIndex(user=>user.id===id);
    //console.log(indice)
    //en caso de no encontrar el usuario a eliminar
    if(indice===-1){
        res.status(404).json({
            mensaje:"usuario no encontrado"
        })
    }
    //dado que es una lista, elimemos el usuario con el indice encontrado
    usuarios.splice(indice,1)
    res.status(201).json({
        mensaje:`usuario ${id} eliminado correctamente`
    })

});











app.listen(port,()=>{
    console.log(`Servidor activo en el puerto ${port}`)
})





// @app.route("/", method=["POST", "GET"])
// def home():
//     return "mensaje"