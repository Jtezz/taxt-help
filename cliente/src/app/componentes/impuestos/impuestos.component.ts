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
    Usuario:null,
    Ano:2019,
    Mes:"Febrero",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
  public Datos3:datos={
    Usuario:null,
    Ano:2019,
    Mes:"Marzo",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
  public Datos4:datos={
    Usuario:null,
    Ano:2019,
    Mes:"Abril",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
  public Datos5:datos={
    Usuario:null,
    Ano:2019,
    Mes:"Mayo",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
  public Datos6:datos={
    Usuario:null,
    Ano:2019,
    Mes:"Junio",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
  public Datos7:datos={
    Usuario:null,
    Ano:2019,
    Mes:"Julio",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
  public Datos8:datos={
    Usuario:null,
    Ano:2019,
    Mes:"Agosto",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
  public Datos9:datos={
    Usuario:null,
    Ano:2019,
    Mes:"Septiembre",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
  public Datos10:datos={
    Usuario:null,
    Ano:2019,
    Mes:"Octubre",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
  public Datos11:datos={
    Usuario:null,
    Ano:2019,
    Mes:"Noviembre",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
  }
  public Datos12:datos={
    Usuario:null,
    Ano:2019,
    Mes:"Diciembre",
    sueldoImpo:0,
    sueldoRete:0,
    HonorableImp:0,
    HonorableRete:0
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
