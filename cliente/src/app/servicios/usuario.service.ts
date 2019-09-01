import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  login(rut:string) {
    return this.http.get(`${this.API_URI}/login/${rut}`);
  }
  registro(usuario:Usuario){
    return this.http.post(`${this.API_URI}/register`,usuario);
  }
}
