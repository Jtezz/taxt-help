const express = require('express');
const app = express();
//cors es para no tener problemas con el navegar , 
var cors = require('cors');

//dependencias usadas
//--nodemon
//--express
//--bodyparser
//--mysql

//middlewares/funciones
app.use(express.json());// para trabajar con json
// Configurar cabeceras y cors
app.use(cors());


//rutas
app.use(require('./routes/usuario'));
app.use(require('./routes/rows'));
app.use(require('./routes/tablaImpuesto'));/*
*/

app.listen(3000,()=> console.log("Server On!"));