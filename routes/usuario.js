const express = require('express');//requerimos express
const router = express.Router();//desde express tremos las rutas
//metodos
//Login de usuario
router.get('/login',(req,res) => {
    mysqlConnection.query('select * from usuario',(err,rows,fields) =>{
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });
});
//registro de usuario
router.post('/register',(req,res) => {
    const {nombre ,rut}=req.body;
    const query=`insert into usuario(nombre,rut) value(?,?)`;
    mysqlConnection.query(query,[nombre,rut],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Registro con exito!'});
    }else{
        console.log(err);
    }
    });
});


const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas