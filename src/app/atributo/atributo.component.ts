import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-atributo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atributo.component.html',
  styleUrl: './atributo.component.scss'
})
export class AtributoComponent {
  messageType = 1;
  inputValue = "hola";
}
