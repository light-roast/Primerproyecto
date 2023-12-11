import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  resultado: number = 0;
  sumar(a:number, b:number){
    this.resultado = a + b;
  }

  
}
