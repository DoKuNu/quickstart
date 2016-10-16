import { Component, OnInit } from '@angular/core';
import { ARCHIVES }from './archives.component';

//Définition de la ToDoList

const TODOLIST: any[] = [
    { text: 'Zouker avec Kévin'},
    { text: 'Configurer Git pour que ça marche'},
    { text: 'Utiliser les promos au KFC'},
    { text: 'Passer platine sur Overwatch'},
    { text: 'Précommander Pokémon Lune'},
    { text: 'Réserver un hôtel à Tokyo'},
    { text: 'Mater une vidéo de Risitas'},
    { text: 'Essayer de devenir bon en Angular JS'},
    { text: 'Faire ses devoirs'}
];

@Component({
    selector: 'todolist',
    templateUrl: 'app/partials/components/todolist.component.html',
})

export class TasksComponent implements OnInit {
    private tasks: any;
    private newTask: any;

    resetInput() {
        this.newTask = { text: ''};
    }
    addNewTask() {
        this.tasks.push(this.newTask);
        this.resetInput();
    }
    removeTask(task: any) {
        ARCHIVES.push(task);
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
    ngOnInit() {
        this.tasks = TODOLIST;
        this.resetInput();
    }
}