import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
import { Router } from '@angular/router';
@Component({
  selector: 'app-todos',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class TodoComponent implements OnInit {
  localItem: string | undefined;
  todos : Todo[] | undefined;
  constructor() { 
  }

  ngOnInit(): void {
    this.localItem = localStorage.getItem("todos") as string;
    if(this.localItem == null) {
      this.todos = [];
    }
    else{this.todos = JSON.parse(this.localItem)
    }
  }
  deleteTodo(todo: Todo){
    console.log("Delete")
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log("Add");
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
