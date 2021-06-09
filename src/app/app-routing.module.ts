import { UsuarioCalculateComponent } from './componentes/templates/usuarios/usuario-calculate/usuario-calculate.component';
import { UsuarioCreateComponent } from './componentes/templates/usuarios/usuario-create/usuario-create.component';
import { UsuarioReadComponent } from './componentes/templates/usuarios/usuario-read/usuario-read.component';

import { HomeComponent } from './componentes/templates/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'usuarios',
    component: UsuarioReadComponent
  },
  {
    path: 'usuarios/create',
    component: UsuarioCreateComponent
  },
  {
    path: 'usuarios/:id',
    component: UsuarioCalculateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
