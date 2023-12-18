import { Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaComponent } from './nueva/nueva.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'pipes', component: PipesComponent },
  { path: 'estructural', component: EstructuralComponent },
  {
    path: 'compra',
    component: ListadoComponent,
    canActivate: [authGuard],
    children: [
      { path: 'nueva', component: NuevaComponent }
    ]
  },
  { path: 'venta', loadChildren: () => import('./venta/venta.module').then((m) => m.VentaModule) }
];
