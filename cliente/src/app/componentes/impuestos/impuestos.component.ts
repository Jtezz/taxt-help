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

  public Datos1:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos2:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos3:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos4:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos5:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos6:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos7:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos8:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos9:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos10:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos11:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos12:datos={
    Usuario:null,
    Mes:null,
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public usserLogged: Usuario=this.usuarioServicio.getUser();
  public DataUser :any=[];
  public temp:boolean=false;
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
  guardar1() {
    this.ImpuestosServicio.GuardarDatos(this.Datos1).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    }
    guardar2() {
      this.ImpuestosServicio.GuardarDatos(this.Datos2).subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
      }
      guardar3() {
        this.ImpuestosServicio.GuardarDatos(this.Datos3).subscribe(
          res => {
            console.log(res);
          },
          err => console.log(err)
        )
        }
        guardar4() {
          this.ImpuestosServicio.GuardarDatos(this.Datos4).subscribe(
            res => {
              console.log(res);
            },
            err => console.log(err)
          )
          }
          guardar5() {
            this.ImpuestosServicio.GuardarDatos(this.Datos5).subscribe(
              res => {
                console.log(res);
              },
              err => console.log(err)
            )
            }
            guardar6() {
              this.ImpuestosServicio.GuardarDatos(this.Datos6).subscribe(
                res => {
                  console.log(res);
                },
                err => console.log(err)
              )
              }
              guardar7() {
                this.ImpuestosServicio.GuardarDatos(this.Datos7).subscribe(
                  res => {
                    console.log(res);
                  },
                  err => console.log(err)
                )
                }
                guardar8() {
                  this.ImpuestosServicio.GuardarDatos(this.Datos8).subscribe(
                    res => {
                      console.log(res);
                    },
                    err => console.log(err)
                  )
                  }
                  guardar9() {
                    this.ImpuestosServicio.GuardarDatos(this.Datos9).subscribe(
                      res => {
                        console.log(res);
                      },
                      err => console.log(err)
                    )
                    }
                    guardar10() {
                      this.ImpuestosServicio.GuardarDatos(this.Datos10).subscribe(
                        res => {
                          console.log(res);
                        },
                        err => console.log(err)
                      )
                      }
                      guardar11() {
                        this.ImpuestosServicio.GuardarDatos(this.Datos11).subscribe(
                          res => {
                            console.log(res);
                          },
                          err => console.log(err)
                        )
                        }
                        guardar12() {
                          this.ImpuestosServicio.GuardarDatos(this.Datos12).subscribe(
                            res => {
                              console.log(res);
                            },
                            err => console.log(err)
                          )
                          }
  Limpiar1(){
    this.Datos1.sueldoImpo=0;
    this.Datos1.sueldoRete=0;
    this.Datos1.HonorableImp=0; 
    this.Datos1.HonorableRete=0;

  }
  Limpiar2(){
    this.Datos2.sueldoImpo=0;
    this.Datos2.sueldoRete=0;
    this.Datos2.HonorableImp=0;
    this.Datos2.HonorableRete=0;
  }
  Limpiar3(){
    this.Datos3.sueldoImpo=0;
    this.Datos3.sueldoRete=0;
    this.Datos3.HonorableImp=0;
    this.Datos3.HonorableRete=0;

  }
  Limpiar4(){
    this.Datos4.sueldoImpo=0;
    this.Datos4.sueldoRete=0;
    this.Datos4.HonorableImp=0;
    this.Datos4.HonorableRete=0;

  }
  Limpiar5(){
    this.Datos5.sueldoImpo=0;
    this.Datos5.sueldoRete=0;
    this.Datos5.HonorableImp=0;
    this.Datos5.HonorableRete=0;

  }
  Limpiar6(){
    this.Datos6.sueldoImpo=0;
    this.Datos6.sueldoRete=0;
    this.Datos6.HonorableImp=0;
    this.Datos6.HonorableRete=0;

  }
  Limpiar7(){
    this.Datos7.sueldoImpo=0;
    this.Datos7.sueldoRete=0;
    this.Datos7.HonorableImp=0;
    this.Datos7.HonorableRete=0;

  }
  Limpiar8(){
    this.Datos8.sueldoImpo=0;
    this.Datos8.sueldoRete=0;
    this.Datos8.HonorableImp=0;
    this.Datos8.HonorableRete=0;

  }
  Limpiar9(){
    this.Datos9.sueldoImpo=0;
    this.Datos9.sueldoRete=0;
    this.Datos9.HonorableImp=0;
    this.Datos9.HonorableRete=0;

  }
  Limpiar10(){
    this.Datos10.sueldoImpo=0;
    this.Datos10.sueldoRete=0;
    this.Datos10.HonorableImp=0;
    this.Datos10.HonorableRete=0;

  }
  Limpiar11(){
    this.Datos11.sueldoImpo=0;
    this.Datos11.sueldoRete=0;
    this.Datos11.HonorableImp=0;
    this.Datos11.HonorableRete=0;

  }
  Limpiar12(){
    this.Datos12.sueldoImpo=0;
    this.Datos12.sueldoRete=0;
    this.Datos12.HonorableImp=0;
    this.Datos12.HonorableRete=0;

  }
  
}