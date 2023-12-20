import { Component, OnInit, inject} from '@angular/core';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [HttpClientModule,
  NgFor],
  providers: [TodoService],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  // constructor(private todoService: TodoService) {} Esta opción también sirve
  todoService: TodoService = inject(TodoService);
  todos:any[] = [];

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos: any) => {
      console.log(todos);
      this.todos = todos;
    });
  }
  }

