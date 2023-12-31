import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AtributoComponent } from './atributo/atributo.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { PipesComponent } from './pipes/pipes.component';
import { CompraModule } from './compra/compra.module';
import { VentaModule } from './venta/venta.module';
import { FormulariosComponent } from './formularios/formularios.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './todos/todos.component';
import { InterceptService } from './services/intercept.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    AtributoComponent, 
    EstructuralComponent, 
    PipesComponent, CompraModule, 
    RouterModule, 
    VentaModule, 
    ReactiveFormsModule,
    TodosComponent, 
    TodosComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Primerproyecto';
  constructor(){
    localStorage.setItem('id', '1234');
  }

}
