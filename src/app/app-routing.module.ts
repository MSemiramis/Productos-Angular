import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasListComponent } from './compras-list/compras-list.component';
import { MielContactoComponent } from './miel-contacto/miel-contacto.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'productos',
    pathMatch:'full'
  },

  {
    path:'productos',
    component: ComprasListComponent
  },

  {
    path:'contacto',
    component: MielContactoComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
