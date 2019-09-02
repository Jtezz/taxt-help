import { Component, OnInit } from '@angular/core';
//importamos el servicio usuario
import {UsuarioService} from '../../servicios/usuario.service'
import { RouterModule, Routes, Router } from '@angular/router';

//importamos el modelo
import{Usuario} from '../../modelos/usuario'
import{buscadorUsuario} from '../../modelos/buscadorUsuario'
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

  public aux2:buscadorUsuario={
    rut:'',
    password:''
  }
  constructor(private usuarioServicio:UsuarioService ,
              private router:Router) { }

  ngOnInit() {
  }
  logIn() {
    return this.usuarioServicio.login(this.aux2.rut,this.aux2.password)
    .subscribe(data =>{
      this.usuarioServicio.setUser(data[0]);
      this.router.navigate(["/impuestos"])
    },
      error=> console.log(error)
      )
  }
  

}
