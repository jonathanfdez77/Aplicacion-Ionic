import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioWebPage } from './servicio-web.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioWebPageRoutingModule {}
