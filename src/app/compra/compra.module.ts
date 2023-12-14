import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListadoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListadoComponent
  ]
})
export class CompraModule { }
