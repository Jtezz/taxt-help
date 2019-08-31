import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';//trabajar con formularios en angular

import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

//servicios
import {UsuarioService} from './servicios/usuario.service'

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//para utilizar protocolo http
    FormsModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
