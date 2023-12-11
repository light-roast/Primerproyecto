import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-estructural',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './estructural.component.html',
  styleUrl: './estructural.component.scss'
})
export class EstructuralComponent {
  sections = [
    "introducción",
    "componentes",
    "directivas"
  ];
  isError: boolean = false;
  showError(){
    if(this.isError === true) {
      this.isError = false;
    } else {
    this.isError = true;}}
}
