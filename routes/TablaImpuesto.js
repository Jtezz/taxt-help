const express = require('express');//requerimos express
const router = express.Router();//desde express tremos las rutas

//requerir tabla

const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas