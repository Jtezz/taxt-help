import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelos/usuario';
import { buscadorUsuario } from '../modelos/buscadorUsuario';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URI = 'http://localhost:3000';

  constructor(private http:HttpClient) {
    this.isUserLoggedIn = false;
   }
  private isUserLoggedIn;
  public usserLogged:Usuario;

  setUserLoggedIn(user:Usuario) {// guardar el usuario logeado en la memoria
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUser():Usuario {//traer el usuario de la memoria 
    let user_string=localStorage.getItem("currentUser");
    if(!isNullOrUndefined(user_string)){
      let user:Usuario=JSON.parse(user_string);
      return user;
    }else{
      return null
    }
  }

  login(Rut:string,Pass:string) {
    return this.http.post(`${this.API_URI}/login`,{
      rut:Rut,
      password:Pass
    });
  }
  setUser(user:Usuario):void{// nos guarda el objeto de usuario en localstorage
    let user_string=JSON.stringify(user);
    localStorage.setItem("currentUser",user_string);
  }
  loginAux(rut:string){
    return this.http.get(`${this.API_URI}/login/${rut}`);
  }
  registro(usuario:Usuario){
    return this.http.post(`${this.API_URI}/register`,usuario);
  }
}
