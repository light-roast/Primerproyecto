import { Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstadosPipe } from './pipes/estados.pipe';
import { EstructuralComponent } from './estructural/estructural.component';
export const routes: Routes = [
  { 'path': 'pipes', component: PipesComponent },
  { 'path': 'estructural', component: EstructuralComponent}
 
];
