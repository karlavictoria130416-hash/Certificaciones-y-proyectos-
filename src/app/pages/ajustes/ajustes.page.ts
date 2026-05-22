import { Component } from '@angular/core';
import { IonContent, IonButton, IonToggle } from '@ionic/angular/standalone';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonToggle, CommonModule, FormsModule]
})

export class AjustesPage {

  sonido = true;
  modoOscuro = false;

  constructor(private location: Location) {}

  cerrar(){
    this.location.back();
  }

  reiniciar(){

    if(confirm("¿Seguro que quieres reiniciar tu progreso?")){

      localStorage.clear();

      alert("Progreso reiniciado");

    }

  }

}
