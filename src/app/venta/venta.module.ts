import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { HistorialComponent } from './historial/historial.component';


@NgModule({
  declarations: [ListadoComponent, HistorialComponent],
  imports: [
    CommonModule,
    VentaRoutingModule
  ],
  exports: [ListadoComponent, HistorialComponent]
})
export class VentaModule { }
