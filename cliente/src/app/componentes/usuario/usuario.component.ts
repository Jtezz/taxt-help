import { Component, OnInit } from '@angular/core';
//importamos el servicio usuario
import {UsuarioService} from '../../servicios/usuario.service'
import { RouterModule, Routes } from '@angular/router';

//importamos el modelo
import{Usuario} from '../../modelos/usuario'
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public rut:string;
  public aux:Usuario={
    id:null,
    nombre: '',
    rut:''
  };
  public aux2:Usuario={
    id:null,
    nombre: '',
    rut:''
  };
  constructor(private usuarioServicio:UsuarioService) { }

  ngOnInit() {
  }
  logIn(){
    this.usuarioServicio.login(this.rut).subscribe(
      res => {
        this.aux=res;
        console.log(res);
        console.log(this.aux)
      },
      err =>console.error(err)

    );
  }
  registrar(){
    this.usuarioServicio.registro(this.aux2).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    )
  }
  

}
