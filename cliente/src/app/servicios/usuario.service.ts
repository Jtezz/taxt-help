import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelos/usuario';

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

  getUserLoggedIn() {//traer el usuario de la memoria 
  	return JSON.parse(localStorage.getItem('currentUser'));
  }

  login(usuario:Usuario) {
    return this.http.post(`${this.API_URI}/login`,usuario);
  }
  registro(usuario:Usuario){
    return this.http.post(`${this.API_URI}/register`,usuario);
  }
  registro(usuario:Usuario){
    return this.http.post(`${this.API_URI}/register`,usuario);
  }
}
