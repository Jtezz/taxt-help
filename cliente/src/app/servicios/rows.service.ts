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
}
