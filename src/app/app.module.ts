import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './My Folder/todos/to-do.component';
import { TodoItemComponent } from './My Folder/todo-item/todo-item.component';
import { AppTodoComponent } from './My Folder/add-todo/app-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './My Folder/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AppTodoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
