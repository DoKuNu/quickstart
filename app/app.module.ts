import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Import du module pour les formulaires
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { TasksComponent } from './components/tasks.component';
import { ArchivesComponent } from './components/archives.component';
import { RouterModule } from '@angular/router';

//Importation des directives
import { ToDoListDirective } from './directives/todolist.directive';
import { AddTaskDirective } from './directives/add-task-directive';

@NgModule({
  imports: [ BrowserModule, FormsModule,
  RouterModule.forRoot([
    { path: '', redirectTo: '/todolist', pathMatch: 'full' },
    { path: 'todolist', component: TasksComponent },
    { path: 'archives', component: ArchivesComponent },
  ]) ],
  declarations: [ AppComponent, TasksComponent, ArchivesComponent, ToDoListDirective, AddTaskDirective, ToDoListDirective, AddTaskDirective ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
