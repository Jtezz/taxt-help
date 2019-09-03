import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import componentes
import { UsuarioComponent} from './componentes/usuario/usuario.componenet'
import { ImpuestosComponent } from './componentes/impuestos/impuestos.component';
import { RegisterComponent } from './componentes/register/register.component';

const routes: Routes = [
  {
    path:'',
    component: UsuarioComponent
  },
  {
    path:'impuestos',
    component:ImpuestosComponent
  },
  {
    path:'register',
    component: RegisterComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

