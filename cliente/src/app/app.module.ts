import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';//trabajar con formularios en angular

import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.componenet';
import {ImpuestosComponent} from './componentes/impuestos/impuestos.component';

//servicios
import {UsuarioService} from './servicios/usuario.service';
import {RowsService} from './servicios/rows.service';
import { RegisterComponent } from './componentes/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ImpuestosComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//para utilizar protocolo http
    FormsModule
  ],
  providers: [
    UsuarioService,
    RowsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
