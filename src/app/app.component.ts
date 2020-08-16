import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';
  todoList: any [] = [];
}

ngOnInit() {
  this.todoList = [
    // example of how to make an item in todo list
    { title: 'Install Angular CLI', isDone: false },
  
  ];

    // a method to delete an item
    deleteTodo(todo:any) {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
      <button type="button" (click)= deleteTodo(todo) class="btn btn-danger btn-sm">Delete</button>
    }
}
