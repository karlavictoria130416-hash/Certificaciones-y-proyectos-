import { Component } from '@angular/core';
import { IonContent, IonButton, IonInput } from '@ionic/angular/standalone';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.page.html',
  styleUrls: ['./estudio.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonInput, CommonModule, FormsModule]
})

export class EstudioPage {

  minutos = 25;
  segundos = 0;

  tiempoInput = 25;

  corriendo = false;
  intervalo: any;

  constructor(private location: Location) {}

  cerrar(){
    this.location.back();
  }

  iniciar(){

    if(!this.corriendo){

      this.minutos = this.tiempoInput;
      this.segundos = 0;

      this.corriendo = true;

      this.intervalo = setInterval(()=>{

        if(this.segundos == 0){

          if(this.minutos == 0){
            clearInterval(this.intervalo);
            this.corriendo = false;
            alert("¡Sesión de estudio terminada! 📚💰");
          }

          else{
            this.minutos--;
            this.segundos = 59;
          }

        }

        else{
          this.segundos--;
        }

      },1000);

    }

  }

  parar(){
    clearInterval(this.intervalo);
    this.corriendo = false;
  }

  descansar(){
    alert("Hora de descansar ☕");
  }

}