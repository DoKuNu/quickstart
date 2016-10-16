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
    private newTask: any;

    //On reset à chaque fois la nouvelle tâche
    resetInput() {
        this.newTask = { text: ''};
    }
    //Ajout de la tâche dans la todolist 
    addNewTask() {
        this.tasks.push(this.newTask);
        this.resetInput();
    }

    //Fonction pour supprimer la tâche sélectionnée
    removeTask(task: any) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    ngOnInit() {
        this.tasks = TODOLIST;
        this.resetInput();
    }
 }
