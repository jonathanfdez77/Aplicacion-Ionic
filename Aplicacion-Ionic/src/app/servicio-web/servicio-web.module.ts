import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioWebPageRoutingModule } from './servicio-web-routing.module';

import { ServicioWebPage } from './servicio-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioWebPageRoutingModule
  ],
  declarations: [ServicioWebPage]
})
export class ServicioWebPageModule {}
