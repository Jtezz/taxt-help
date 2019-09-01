const express = require('express');//requerimos express
const router = express.Router();//desde express tremos las rutas
//metodos
//Login de usuario
router.post('/login',(req,res) =>{ //eliminar una consulta
    const {rut,password}=req.body;
    const query=`select * from usuario where rut=? and password=?`;
    mysqlConnection.query(query,[rut,password],(err,rows,fields) =>{
    if(!err){
        res.json(rows);
    }else{
        console.log(err);
    }
    });
});

//registro de usuario
router.post('/register',(req,res) => {
    const {nombre ,rut, password}=req.body;
    const query=`insert into usuario(nombre,rut,password) value(?,?,?)`;
    mysqlConnection.query(query,[nombre,rut,password],(err,rows,fields) =>{
    if(!err){
        res.json(rows);
    }else{
        console.log(err);
    }
    });
});


const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas