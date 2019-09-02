const express = require('express');//requerimos express
const router = express.Router();//desde express tremos las rutas
//metodos

//Traer todas las filas guardadas por el usuario
router.get('/rows/:id',(req,res) =>{ 
    const {id}=req.params;
    const query=`select * from rowsUsuario where usuario=?`;
    mysqlConnection.query(query,[id],(err,rows,fields) =>{
    if(!err){
        console.log('filas retornadas con exito');
        res.json(rows);
    }else{
        console.log(err);
    }
    });
});

//guardar filas 
router.post('/rows/save',(req,res) => {
    const {Usuario,Ano,Mes,sueldoImpo,sueldoRete,HonorableImp,HonorableRete}=req.body;
    const query=`insert into rowsusuario(usuario,years,Mes,sueldoImponible,impSueldoRetenido,Honorarios,impHonorariosRetenido) value(?,?,?,?,?,?,?)`;
    mysqlConnection.query(query,[Usuario,Ano,Mes,sueldoImpo,sueldoRete,HonorableImp,HonorableRete],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Registro con exito!'});
    }else{
        console.log(err);
    }
    });
});
router.put('/Row/cambiar',(req,res) =>{
    const {sueldoImpo,sueldoRete,HonorableImp,HonorableRete,Usuario,Ano,Mes}=req.body;
    const query=`update rowsusuario set sueldoImponible=?,impSueldoRetenido=?,Honorarios=?,impHonorariosRetenido=? where usuario=? and years=? and Mes=? `;
    
    mysqlConnection.query(query,[sueldoImpo,sueldoRete,HonorableImp,HonorableRete,Usuario,Ano,Mes],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Diagnostico cambiado!'});//entrega cada fila de la consulta
    }else{
        console.log(err);
    }
    });
});


const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas