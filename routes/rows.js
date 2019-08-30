const express = require('express');//requerimos express
const router = express.Router();//desde express tremos las rutas
//metodos

//Traer todas las filas guardadas por el usuario
router.get('/rows/:id',(req,res) =>{ //eliminar una consulta
    const {id}=req.params;
    const query=`select * from usuario where id=?`;
    mysqlConnection.query(query,[id],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Filas retornas con exito!'});
    }else{
        console.log(err);
    }
    });
});

//guardar filas 
router.post('/rows/save',(req,res) => {
    const {fecha,sueldoImpo,sueldoRete,HonorableImp,HonorableRete}=req.body;
    const query=`insert into usuario(fecha,sueldoImpo,sueldoRete,HonorableImp,HonorableRete) value(?,?,?,?,?)`;
    mysqlConnection.query(query,[fecha,sueldoImpo,sueldoRete,HonorableImp,HonorableRete],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Registro con exito!'});
    }else{
        console.log(err);
    }
    });
});


const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas