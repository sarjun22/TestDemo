import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-app-todo',
  templateUrl: './app-todo.component.html',
  styleUrls: ['./app-todo.component.scss']
})
export class AppTodoComponent implements OnInit {
title: string=""
desc: string=""
@Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
    sno: 8,
    title: this.title,
    desc: this.desc,
    active: true
    }
    this.todoAdd.emit(todo);
  }
}
