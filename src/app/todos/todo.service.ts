import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  // options = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   }),
  // // }
  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
