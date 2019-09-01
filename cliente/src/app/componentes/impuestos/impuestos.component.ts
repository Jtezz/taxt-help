import { Component, OnInit } from '@angular/core';
import {datos} from '../../modelos/Datos';
import {RowsService} from '../../servicios/rows.service'

@Component({
  selector: 'app-impuestos',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.css']
})
export class ImpuestosComponent implements OnInit {

  constructor(private ImpuestosServicio: RowsService  ) { }

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

  ngOnInit() {
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
    this.Datos1.Mes=null;
    this.Datos1.sueldoImpo=0;
    this.Datos1.sueldoRete=0;
    this.Datos1.HonorableImp=0; 
    this.Datos1.HonorableRete=0;

  }
  Limpiar2(){
    this.Datos2.Mes=null;
    this.Datos2.sueldoImpo=0;
    this.Datos2.sueldoRete=0;
    this.Datos2.HonorableImp=0;
    this.Datos2.HonorableRete=0;
  }
  Limpiar3(){
    this.Datos3.Mes=null;
    this.Datos3.sueldoImpo=0;
    this.Datos3.sueldoRete=0;
    this.Datos3.HonorableImp=0;
    this.Datos3.HonorableRete=0;

  }
  Limpiar4(){
    this.Datos4.Mes=null;
    this.Datos4.sueldoImpo=0;
    this.Datos4.sueldoRete=0;
    this.Datos4.HonorableImp=0;
    this.Datos4.HonorableRete=0;

  }
  Limpiar5(){
    this.Datos5.Mes=null;
    this.Datos5.sueldoImpo=0;
    this.Datos5.sueldoRete=0;
    this.Datos5.HonorableImp=0;
    this.Datos5.HonorableRete=0;

  }
  Limpiar6(){
    this.Datos6.Mes=null;
    this.Datos6.sueldoImpo=0;
    this.Datos6.sueldoRete=0;
    this.Datos6.HonorableImp=0;
    this.Datos6.HonorableRete=0;

  }
  Limpiar7(){
    this.Datos7.Mes=null;
    this.Datos7.sueldoImpo=0;
    this.Datos7.sueldoRete=0;
    this.Datos7.HonorableImp=0;
    this.Datos7.HonorableRete=0;

  }
  Limpiar8(){
    this.Datos8.Mes=null;
    this.Datos8.sueldoImpo=0;
    this.Datos8.sueldoRete=0;
    this.Datos8.HonorableImp=0;
    this.Datos8.HonorableRete=0;

  }
  Limpiar9(){
    this.Datos9.Mes=null;
    this.Datos9.sueldoImpo=0;
    this.Datos9.sueldoRete=0;
    this.Datos9.HonorableImp=0;
    this.Datos9.HonorableRete=0;

  }
  Limpiar10(){
    this.Datos10.Mes=null;
    this.Datos10.sueldoImpo=0;
    this.Datos10.sueldoRete=0;
    this.Datos10.HonorableImp=0;
    this.Datos10.HonorableRete=0;

  }
  Limpiar11(){
    this.Datos11.Mes=null;
    this.Datos11.sueldoImpo=0;
    this.Datos11.sueldoRete=0;
    this.Datos11.HonorableImp=0;
    this.Datos11.HonorableRete=0;

  }
  Limpiar12(){
    this.Datos12.Mes=null;
    this.Datos12.sueldoImpo=0;
    this.Datos12.sueldoRete=0;
    this.Datos12.HonorableImp=0;
    this.Datos12.HonorableRete=0;

  }
  
}
