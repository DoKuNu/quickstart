//Import des dépendances
import { Component, Input, Output, EventEmitter } from '@angular/core';

//Composant principal
@Component({
    selector: 'list-task',
    templateUrl: 'app/partials/directives/todolist.directive.html'
})

export class ToDoListDirective {
    @Input() task: any;
    @Output() sendRemoveTask = new EventEmitter;

    removeTaskDir(event: any) {
        this.sendRemoveTask.emit(this.task);
    }
}