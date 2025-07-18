const { DataTypes }=require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario',{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    correo:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    }

});

module.exports= Usuario;