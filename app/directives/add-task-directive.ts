//On importe les dépendances
import { Component, Input, Output, EventEmitter } from '@angular/core';

//On définit le composant principal

@Component({
    selector: 'add-task',
    templateUrl: 'app/partials/directives/add-task-directive.html',
})

//On exporte la classe du composant principal
export class AddTaskDirective {
    @Input() newTask: any;
    @Output() sendNewTask = new EventEmitter;

    addNewTaskDir(event: any) {
        this.sendNewTask.emit(this.newTask);
    }
}