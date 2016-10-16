import { Component } from '@angular/core';

// On définit le composant principal
@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/components/app.component.html'
})

// Et on exporte la classe du composant principal
export class AppComponent  {

  /*  private tasks: any;
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
    }*/
 }
