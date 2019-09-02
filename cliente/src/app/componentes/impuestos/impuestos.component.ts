import { Component, OnInit } from '@angular/core';
import {datos} from '../../modelos/Datos'
import {RowsService} from '../../servicios/rows.service'
import {UsuarioService} from '../../servicios/usuario.service'
import {Usuario} from '../../modelos/usuario'
@Component({
  selector: 'app-impuestos',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.css']
})
export class ImpuestosComponent implements OnInit {

  constructor(private ImpuestosServicio: RowsService ,
              private usuarioServicio:UsuarioService ) { }

  public Datos1:datos={
    Usuario:1,
    Ano:null,
    Mes:"Enero",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
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
    Usuario:null,
    Ano:null,
    Mes:"Febrero",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos3:datos={
    Usuario:null,
    Ano:null,
    Mes:"Marzo",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos4:datos={
    Usuario:null,
    Ano:null,
    Mes:"Abril",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos5:datos={
    Usuario:null,
    Ano:null,
    Mes:"Mayo",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos6:datos={
    Usuario:null,
    Ano:null,
    Mes:"Junio",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos7:datos={
    Usuario:null,
    Ano:null,
    Mes:"Julio",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos8:datos={
    Usuario:null,
    Ano:null,
    Mes:"Agosto",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos9:datos={
    Usuario:null,
    Ano:null,
    Mes:"Septiembre",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos10:datos={
    Usuario:null,
    Ano:null,
    Mes:"Octubre",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos11:datos={
    Usuario:null,
    Ano:null,
    Mes:"Noviembre",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public Datos12:datos={
    Usuario:null,
    Ano:null,
    Mes:"Diciembre",
    sueldoImpo:null,
    sueldoRete:null,
    HonorableImp:null,
    HonorableRete:null
  }
  public usserLogged: Usuario= this.usuarioServicio.getUserLoggedIn();
  public DataUser : any ;
  ngOnInit() {
    this.ImpuestosServicio.getRows(this.usserLogged.id).subscribe(
      res => {
        this.DataUser=res;
      },
      err =>console.error(err)
    );
  }

  
  guardar1() {
    this.aux1=true;
    this.ImpuestosServicio.GuardarDatos(this.Datos1).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    }
    guardar2() {
      this.Datos2.Usuario=this.usserLogged.id;
      this.aux2=true;
      this.ImpuestosServicio.GuardarDatos(this.Datos2).subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
      }
      guardar3() {
        this.aux3=true;
        this.ImpuestosServicio.GuardarDatos(this.Datos3).subscribe(
          res => {
            console.log(res);
          },
          err => console.log(err)
        )
        }
        guardar4() {
          this.aux4=true;
          this.ImpuestosServicio.GuardarDatos(this.Datos4).subscribe(
            res => {
              console.log(res);
            },
            err => console.log(err)
          )
          }
          guardar5() {
            this.aux5=true;
            this.ImpuestosServicio.GuardarDatos(this.Datos5).subscribe(
              res => {
                console.log(res);
              },
              err => console.log(err)
            )
            }
            guardar6() {
              this.aux6=true;
              this.ImpuestosServicio.GuardarDatos(this.Datos6).subscribe(
                res => {
                  console.log(res);
                },
                err => console.log(err)
              )
              }
              guardar7() {
                this.aux7=true;
                this.ImpuestosServicio.GuardarDatos(this.Datos7).subscribe(
                  res => {
                    console.log(res);
                  },
                  err => console.log(err)
                )
                }
                guardar8() {
                  this.aux8=true;
                  this.ImpuestosServicio.GuardarDatos(this.Datos8).subscribe(
                    res => {
                      console.log(res);
                    },
                    err => console.log(err)
                  )
                  }
                  guardar9() {
                    this.aux9=true;
                    this.ImpuestosServicio.GuardarDatos(this.Datos9).subscribe(
                      res => {
                        console.log(res);
                      },
                      err => console.log(err)
                    )
                    }
                    guardar10() {
                      this.aux10=true;
                      this.ImpuestosServicio.GuardarDatos(this.Datos10).subscribe(
                        res => {
                          console.log(res);
                        },
                        err => console.log(err)
                      )
                      }
                      guardar11() {
                        this.aux11=true;
                        this.ImpuestosServicio.GuardarDatos(this.Datos11).subscribe(
                          res => {
                            console.log(res);
                          },
                          err => console.log(err)
                        )
                        }
                        guardar12() {
                          this.aux12=true;
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
  Change1(){
    this.ImpuestosServicio.CambiarRow(this.Datos1).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change2(){
    this.ImpuestosServicio.CambiarRow(this.Datos2).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change3(){
    this.ImpuestosServicio.CambiarRow(this.Datos3).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change4(){
    this.ImpuestosServicio.CambiarRow(this.Datos4).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change5(){
    this.ImpuestosServicio.CambiarRow(this.Datos5).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change6(){
    this.ImpuestosServicio.CambiarRow(this.Datos6).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change7(){
    this.ImpuestosServicio.CambiarRow(this.Datos7).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change8(){
    this.ImpuestosServicio.CambiarRow(this.Datos8).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change9(){
    this.ImpuestosServicio.CambiarRow(this.Datos9).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change10(){
    this.ImpuestosServicio.CambiarRow(this.Datos10).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change11(){
    this.ImpuestosServicio.CambiarRow(this.Datos11).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  Change12(){
    this.ImpuestosServicio.CambiarRow(this.Datos12).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
}
