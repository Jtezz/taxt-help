import { Component, OnInit } from '@angular/core';
import {datos} from '../../modelos/Datos'
import {RowsService} from '../../servicios/rows.service'
import {UsuarioService} from '../../servicios/usuario.service'
import {Usuario} from '../../modelos/usuario'
import { Data } from '@angular/router';
@Component({
  selector: 'app-impuestos',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.css']
})
export class ImpuestosComponent implements OnInit {

  constructor(private ImpuestosServicio: RowsService ,
private usuarioServicio:UsuarioService ) { }
public usserLogged: Usuario=this.usuarioServicio.getUser();
public DataUser :any=[];
public Datos1:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Enero",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
aparece=false;
aux1=false;
aux2=false;
aux3=false;
aux4=false;
aux5=false;
aux6=false;
aux7=false;
aux8=false;
aux9=false;
aux10=false;
aux11=false;
aux12=false;
public Datos2:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Febrero",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public Datos3:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Marzo",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public Datos4:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Abril",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public Datos5:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Mayo",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public Datos6:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Junio",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public Datos7:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Julio",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public Datos8:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Agosto",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public Datos9:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Septiembre",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public Datos10:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Octubre",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public Datos11:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Noviembre",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public Datos12:datos={
Usuario:this.usserLogged.id,
Ano:2019,
Mes:"Diciembre",
sueldoImpo:0,
sueldoRete:0,
HonorableImp:0,
HonorableRete:0
}
public data : datos[]=[//guarda los datos que se mostraran en pantalla
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Enero",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Febrero",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Marzo",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Abril",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Mayo",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Junio",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Julio",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Agosto",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Septiembre",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Octubre",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Noviembre",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
{Usuario:this.usserLogged.id,Ano:2019,Mes:"Diciembre",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null}
];
public TablaImpuesto:any;


ngOnInit() {
//trae de la bd la informacion anterior del usuario
this.ImpuestosServicio.getRows(this.usserLogged.id).subscribe(
data => {
this.DataUser=data;
},
err =>console.error(err)
);
//trae de la bd la tabla de impuestos para este año 
this.ImpuestosServicio.getTablaImpu().subscribe(
  data=>{
    this.TablaImpuesto=data;
  },
  err =>console.error(err)
);
}


Calculao_UltimaRow(){
  var temp:any;
  var TsueldoImpo:number=0;
  var TsueldoRete:number=0;
  var ThonoImpo:number=0;
  var ThonoRete:number=0;
  var porcentaje:number=0;
  var descuento:number=0;
  var aux:any=this.data;
  var Total:number=0;
  // obtener cotizacion de ultimo mes
  for(let i in this.data){
    if(this.data[i].sueldoImpo != null ){
      temp=this.data[i];
    }
  }  
  //rellenar los datos para el culculo final
  for (let i in this.data){
    if(aux[i].sueldoImpo == null){ 
      var temp2:datos={
        Usuario:aux[i].Usuario,
        Ano:aux[i].Ano,
        Mes:aux[i].Mes,
        sueldoImpo:temp.sueldoImpo,
        sueldoRete:temp.sueldoRete,
        HonorableImp:temp.HonorableImp,
        HonorableRete:temp.HonorableRete
      }
      //cambiamos todas las variables menos el mes , para no peder esta informacion
      aux[i]=temp2;
    }
    TsueldoImpo=TsueldoImpo+aux[i].sueldoImpo;
    TsueldoRete=TsueldoRete+aux[i].sueldoRete;
    ThonoImpo=ThonoImpo+aux[i].HonorableImp;
    ThonoRete=ThonoRete+aux[i].HonorableRete;
  }
  console.log(TsueldoImpo)
  console.log(TsueldoRete)
  console.log(ThonoImpo)
  console.log(ThonoRete)

  for (let i in this.TablaImpuesto){
    if(this.TablaImpuesto[i].rango1<(TsueldoImpo + (ThonoRete*0.7)) && this.TablaImpuesto[i].rango2>(TsueldoImpo+(ThonoRete*0.7))){
      porcentaje=this.TablaImpuesto[i].factor;
      descuento=this.TablaImpuesto[i].rebajar;
    }    
  }
  Total=((TsueldoImpo + (ThonoRete*0.7))*porcentaje)-(TsueldoRete+ThonoRete+descuento);
  console.log(Total)
  
}
aux(){
  console.log(this.TablaImpuesto)
  for (let i in this.DataUser){
    for(let j in this.data){
      if (this.data[j].Mes === this.DataUser[i].Mes){// si  se encunentra un mes en los datos del usuaroi los guarda en DataViews
      var temp:datos={
      Usuario:this.DataUser[i].usuario,
      Ano:this.DataUser[i].years,
      Mes:this.DataUser[i].Mes,
      sueldoImpo:this.DataUser[i].sueldoImponible,
      sueldoRete:this.DataUser[i].impSueldoRetenido,
      HonorableImp:this.DataUser[i].Honorarios,
      HonorableRete:this.DataUser[i].impHonorariosRetenido};
      this.data[j]=temp;
      if (this.data[j].sueldoImpo != null){
        if(this.data[j].Mes=="Enero" ){
          this.aux1=true;
        }
        else if(this.data[j].Mes=="Febrero"){
          this.aux2=true;
        }
        else if(this.data[j].Mes=="Marzo"){
          this.aux3=true;
        }
        else if(this.data[j].Mes=="Abril"){
          this.aux4=true;
        }
        else if(this.data[j].Mes=="Mayo"){
          this.aux5=true;
        }
        else if(this.data[j].Mes=="Junio"){
          this.aux6=true;
        }
        else if(this.data[j].Mes=="Julio"){
          this.aux7=true;
        }
        else if(this.data[j].Mes=="Agosto"){
          this.aux8=true;
        }
        else if(this.data[j].Mes=="Septiembre"){
          this.aux9=true;
        }
        else if(this.data[j].Mes=="Octubre"){
          this.aux10=true;
        }
        else if(this.data[j].Mes=="Noviembre"){
          this.aux11=true;
        }
        else{
          this.aux12=true;
          }
        }
      }
    }

  }
this.Datos1=this.data[0];
this.Datos2=this.data[1];
this.Datos3=this.data[2];
this.Datos4=this.data[3];
this.Datos5=this.data[4];
this.Datos6=this.data[5];
this.Datos7=this.data[6];
this.Datos8=this.data[7];
this.Datos9=this.data[8];
this.Datos10=this.data[9];
this.Datos11=this.data[10];
this.Datos12=this.data[11];
}

guardar(aux:datos) {
if (aux.Mes=="Enero"){
this.aux1=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else if (aux.Mes=="Febrero"){
this.aux2=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else if (aux.Mes=="Marzo"){
this.aux3=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else if (aux.Mes=="Abril"){
this.aux4=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else if (aux.Mes=="Mayo"){
this.aux5=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else if (aux.Mes=="Junio"){
this.aux6=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else if (aux.Mes=="Julio"){
this.aux7=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else if (aux.Mes=="Agosto"){
this.aux8=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else if (aux.Mes=="Septiembre"){
this.aux9=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else if (aux.Mes=="Octubre"){
this.aux10=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else if (aux.Mes=="Noviembre"){
this.aux11=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
else{
this.aux12=true;
this.ImpuestosServicio.GuardarDatos(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
}
Limpiar(aux:datos){
aux.sueldoImpo=0;
aux.sueldoRete=0;
aux.HonorableImp=0; 
aux.HonorableRete=0;
}
Change(aux:datos){
this.ImpuestosServicio.CambiarRow(aux).subscribe(
res => {
console.log(res);
},
err => console.log(err)
)
}
}