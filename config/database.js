require("dotenv").config()//cargamos variables de entorno
const { Sequelize } =require("sequelize"); 
//ORM: Object Relation Mapping

//instanciamos un objeto de tipo Sequelize
const sequelize= new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
            host:process.env.DB_HOST,
            dialect:'postgres'
    }
);
module.exports=sequelize;