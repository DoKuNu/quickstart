import { Component } from '@angular/core';
// On importe des dépendances
import { OnInit } from '@angular/core';

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

// On définit le composant principal
@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/components/app.component.html'
})

// Et on exporte la classe du composant principal
export class AppComponent implements OnInit {

    private tasks: any;

    ngOnInit() {
        this.tasks = TODOLIST;
    }
 }
