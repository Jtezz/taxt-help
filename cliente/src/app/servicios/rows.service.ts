import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {datos} from '../modelos/Datos'

@Injectable({
  providedIn: 'root'
})
export class RowsService {
  API_URI = 'http://localhost:3000';

  constructor(private http:HttpClient) {}
GuardarDatos(HM:datos){
  return this.http.post(`${this.API_URI}/rows/save`,HM);
}
getRows(id:number){//buscar paciente por rut
  return this.http.get(`${this.API_URI}/rows/${id}`);//son backtick de jav `` alt+parentecis
}
CambiarRow(aux:datos){
  return this.http.put(`${this.API_URI}/Row/cambiar`,aux);
}
//Traer tabla de impuestos
getTablaImpu(){
   return this.http.get(`${this.API_URI}/TablaImpuesto`);
}
}
