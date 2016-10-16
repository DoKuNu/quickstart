import { Component, OnInit } from '@angular/core';

export const ARCHIVES: any[] = [
    { text: 'Savoir faire du vélo'},
    { text: 'Rendre 10 centimes à José'},
];

@Component({
    selector: 'archives',
    templateUrl: 'app/partials/components/archives.component.html'
})

export class ArchivesComponent implements OnInit {
    private archives: any;
    removeTask(task: any) {
        this.archives.splice(this.archives.indexOf(task), 1);
    }
    ngOnInit() {
    this.archives = ARCHIVES;
    }
}