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
    Datos1.Mes=null;
    Datos1.sueldoImpo=0;
    Datos1.sueldoRete=0;
    Datos1.HonorableImp=0;
    Datos1.HonorableRete=0;

  }
  Limpiar2(){
    Datos2.Mes=null;
    Datos2.sueldoImpo=0;
    Datos2.sueldoRete=0;
    Datos2.HonorableImp=0;
    Datos2.HonorableRete=0;

  }
  Limpiar3(){
    Datos3.Mes=null;
    Datos3.sueldoImpo=0;
    Datos3.sueldoRete=0;
    Datos3.HonorableImp=0;
    Datos3.HonorableRete=0;

  }
  Limpiar4(){
    Datos4.Mes=null;
    Datos4.sueldoImpo=0;
    Datos4.sueldoRete=0;
    Datos4.HonorableImp=0;
    Datos4.HonorableRete=0;

  }
  Limpiar5(){
    Datos5.Mes=null;
    Datos5.sueldoImpo=0;
    Datos5.sueldoRete=0;
    Datos5.HonorableImp=0;
    Datos5.HonorableRete=0;

  }
  Limpiar6(){
    Datos6.Mes=null;
    Datos6.sueldoImpo=0;
    Datos6.sueldoRete=0;
    Datos6.HonorableImp=0;
    Datos6.HonorableRete=0;

  }
  Limpiar7(){
    Datos7.Mes=null;
    Datos7.sueldoImpo=0;
    Datos7.sueldoRete=0;
    Datos7.HonorableImp=0;
    Datos7.HonorableRete=0;

  }
  Limpiar8(){
    Datos8.Mes=null;
    Datos8.sueldoImpo=0;
    Datos8.sueldoRete=0;
    Datos8.HonorableImp=0;
    Datos8.HonorableRete=0;

  }
  Limpiar9(){
    Datos9.Mes=null;
    Datos9.sueldoImpo=0;
    Datos9.sueldoRete=0;
    Datos9.HonorableImp=0;
    Datos9.HonorableRete=0;

  }
  Limpiar10(){
    Datos10.Mes=null;
    Datos10.sueldoImpo=0;
    Datos10.sueldoRete=0;
    Datos10.HonorableImp=0;
    Datos10.HonorableRete=0;

  }
  Limpiar11(){
    Datos11.Mes=null;
    Datos11.sueldoImpo=0;
    Datos11.sueldoRete=0;
    Datos11.HonorableImp=0;
    Datos11.HonorableRete=0;

  }
  Limpiar12(){
    Datos12.Mes=null;
    Datos12.sueldoImpo=0;
    Datos12.sueldoRete=0;
    Datos12.HonorableImp=0;
    Datos12.HonorableRete=0;

  }
  
}
