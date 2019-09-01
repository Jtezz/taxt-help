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
    const {Usuario,Mes,sueldoImpo,sueldoRete,HonorableImp,HonorableRete}=req.body;
    const query=`insert into rowsusuario(usuario,mes,sueldoImponible,sueldoRetenido,Honorarios,impHonorariosRetenido) value(?,?,?,?,?,?)`;
    mysqlConnection.query(query,[Usuario,Mes,sueldoImpo,sueldoRete,HonorableImp,HonorableRete],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Registro con exito!'});
    }else{
        console.log(err);
    }
    });
});


const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas