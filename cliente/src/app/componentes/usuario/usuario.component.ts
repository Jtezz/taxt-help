import { Component, OnInit } from '@angular/core';
//importamos el servicio usuario
import {UsuarioService} from '../../servicios/usuario.service'
import { RouterModule, Routes } from '@angular/router';

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
  constructor(private usuarioServicio:UsuarioService) { }

  ngOnInit() {
  }
  logIn() {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.usuarioServicio.login(this.aux2).subscribe(
      res => {
        let u: Usuario = res;      //para guardar el usuario en la memoria del navegador  
        this.usuarioServicio.setUserLoggedIn(u);// guarda y verifica que esta logeado el usuario
        
        console.log(this.usuarioServicio.getUserLoggedIn());
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
