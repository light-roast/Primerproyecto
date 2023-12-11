import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { EstadosPipe } from './estados.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe, EstadosPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  estado = 1;
  name = "Daniel";
  date = new Date();
  cambiarEstado() {
    if (this.estado === 1) {
      this.estado = 0;
    } else {
      this.estado = 1;
    }
  };
}
