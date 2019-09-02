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
public temp:boolean=false;

  public Datos1:datos={
    Usuario:this.usserLogged.id,
    Ano:2019,
    Mes:"Enero",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
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
  public data : datos[]=[
    {Usuario:null,Mes:"Enero",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Febrero",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Marzo",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Abril",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Mayo",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Junio",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Julio",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Agosto",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Septiembre",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Octubre",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Noviembre",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null},
    {Usuario:null,Mes:"Diciembre",sueldoImpo:null,sueldoRete:null,HonorableImp:null,HonorableRete:null}
  ];
  ngOnInit() {
    //trae de la bd la informacion anterior del usuario
    this.ImpuestosServicio.getRows(this.usserLogged.id).subscribe(
      data => {
        this.DataUser=data;
      },
      err =>console.error(err)
    );
  }

aux(){
  console.log(this.DataUser)
  for (let i in this.DataUser){
    for(let j in this.data){
      if (this.data[j].Mes === this.DataUser[i].Mes){// si  se encunentra un mes en los datos del usuaroi los guarda en DataViews
      var temp:datos={
        Usuario:this.DataUser[i].usuario,
        Mes:this.DataUser[i].Mes,
        sueldoImpo:this.DataUser[i].sueldoImponible,
        sueldoRete:this.DataUser[i].impSueldoRetenido,
        HonorableImp:this.DataUser[i].Honorarios,
        HonorableRete:this.DataUser[i].impHonorariosRetenido};
        this.data[j]=temp;
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
