import { Component, OnInit } from '@angular/core';

const TODOLIST: any[] = [
    { text: 'Savoir faire du vélo'},
    { text: 'Rendre 10 centimes à José'},
];

@Component({
    selector: 'archives',
    templateUrl: 'app/partials/components/archives.component.html'
})

export class ArchivesComponent implements OnInit {
    private tasks: any;
    removeTask(task: any) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
    ngOnInit() {
    this.tasks = TODOLIST;
    }
}