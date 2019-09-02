const express = require('express');//requerimos express
const router = express.Router();//desde express tremos las rutas

//requerir tabla
router.get('/TablaImpuesto',(req,res) =>{ //eliminar una consulta
    const query=`select * from Tablaimpuesto`;
    mysqlConnection.query(query,(err,rows,fields) =>{
    if(!err){
        res.json(rows);
    }else{
        console.log(err);
    }
    });
});
const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas