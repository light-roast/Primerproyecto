import { Component, OnInit, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [HttpClientModule],
  providers: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  todoService: TodoService = inject(TodoService);
  
  ngOnInit(): void {
    this.todoService.posts$.subscribe((res) => {
      console.log("Nueva: ", res)
    });
  }
}
