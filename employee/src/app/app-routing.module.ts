import { FuncionariosDeleteComponent } from './crudcomponentes/funcionarios-delete/funcionarios-delete.component';
import { FuncionariosUpdateComponent } from './crudcomponentes/funcionarios-update/funcionarios-update.component';
import { FuncionarioReadComponent } from './crudcomponentes/funcionario-read/funcionario-read.component';
import { CadfuncionariosComponent } from './crudcomponentes/cadfuncionarios/cadfuncionarios.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { HomeComponent } from "./views/home/home.component";




const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "cadfuncionarios",
    component: CadfuncionariosComponent
  },
  {
    path: "homefuncionarios",
    component: HomeComponent
  },
  {
    path: "readfuncionarios",
    component: FuncionarioReadComponent 
  },
  {
    path: "funcionarios/update/:id",
    component: FuncionariosUpdateComponent
  },
  {
    path: "funcionarios/delete/:id",
    component: FuncionariosDeleteComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
