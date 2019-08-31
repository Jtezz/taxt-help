import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import componentes
import { UsuarioComponent} from './componentes/usuario/usuario.component'

const routes: Routes = [
  {
    path:'sing-up',
    component: UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

