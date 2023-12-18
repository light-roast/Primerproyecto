import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaComponent } from '../nueva/nueva.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  {'path':  '', children: [
    {'path': '', redirectTo: 'nueva', pathMatch:'full'},
    {'path': 'nueva', component: NuevaComponent},
    {'path': 'historial', component: HistorialComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
