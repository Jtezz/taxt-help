const express = require('express');//requerimos express
const router = express.Router();//desde express tremos las rutas
//metodos
//Login de usuario
router.get('/login/:rut',(req,res) =>{ //eliminar una consulta
    const {rut}=req.params;
    const query=`select * from usuario where rut=?`;
    mysqlConnection.query(query,[rut],(err,rows,fields) =>{
    if(!err){
        res.json(rows);
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
        res.json(rows);
    }else{
        console.log(err);
    }
    });
});


const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas