import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Import du module pour les formulaires
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

//Importation des directives
import { ToDoListDirective } from './directives/todolist.directive';
import { AddTaskDirective } from './directives/add-task-directive';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ToDoListDirective, AddTaskDirective ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
