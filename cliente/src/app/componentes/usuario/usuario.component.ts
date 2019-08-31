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
  constructor(private usuarioServicio:UsuarioService) { }

  ngOnInit() {
  }
  logIn(rut: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.usuarioServicio.login(this.rut).subscribe(

      res => {
        this.aux=res;
       console.log(res);

      },
      error => {
        console.error(error);
      }
    );

  }

  

}
