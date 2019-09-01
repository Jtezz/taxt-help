import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../servicios/usuario.service'
import { Usuario } from 'src/app/modelos/usuario';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private usuarioServicio: UsuarioService) { }
  public user:Usuario={
      id:null,
      nombre: '',
      rut:'',
      password:''
    
  }
  ngOnInit() {
  }
  registrar(){
    this.usuarioServicio.registro(this.user).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    )
  }
  

}