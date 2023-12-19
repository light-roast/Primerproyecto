import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.scss'
})
export class FormulariosComponent {
 form = new FormGroup({
  name: new FormControl('', [Validators.minLength(4), Validators.required]),
  isChecked: new FormControl(false),
  email: new FormControl('', [Validators.required, Validators.email])
 });
 ngOnInit(): void {
  
 };
}
