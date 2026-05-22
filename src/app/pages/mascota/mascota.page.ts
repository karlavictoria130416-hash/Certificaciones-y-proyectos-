import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonProgressBar
} from '@ionic/angular/standalone';

import { MonedasService } from '../../services/monedas.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.page.html',
  styleUrls: ['./mascota.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonProgressBar,
    CommonModule,
    FormsModule
  ]
})

export class MascotaPage implements OnInit {

  hambre = 0.5;
  energia = 0.5;
  estudio = 0.2;

  constructor(
    public monedasService: MonedasService,
    private location: Location
  ) {}

  ngOnInit() {

    setInterval(() => {

      if(this.hambre > 0){
        this.hambre -= 0.01;
      }

      if(this.energia > 0){
        this.energia -= 0.05;
      }

    }, 300000);

  }

  alimentar(){
    if(this.hambre < 1){
      this.hambre += 0.1;
    }
  }

  dormir(){
    if(this.energia < 1){
      this.energia += 0.1;
    }
  }

  estudiar(){

    if(this.estudio < 1){
      this.estudio += 0.1;
    }

    this.monedasService.monedas += 5;

  }

  comprarComida(){

    if(this.monedasService.monedas >= 10){

      this.monedasService.monedas -= 10;

      this.hambre += 0.2;

      if(this.hambre > 1){
        this.hambre = 1;
      }

    }else{
      alert("No tienes suficientes monedas 💰");
    }

  }

  cerrar(){
    this.location.back();
  }

}