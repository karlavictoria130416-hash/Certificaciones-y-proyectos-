import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { MonedasService } from '../services/monedas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, RouterLink]
})

export class HomePage implements OnInit {

  hora = "";
  comidaIndex = 0;

  constructor(public monedasService: MonedasService){}

  ngOnInit(){

    this.actualizarHora();

    setInterval(()=>{
      this.actualizarHora();
    },1000);

  }

  actualizarHora(){

    const ahora = new Date();

    this.hora = ahora.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

  }

  comidaAnterior(){

    if(this.comidaIndex > 0){
      this.comidaIndex--;
    }

  }

  comidaSiguiente(){

    if(this.comidaIndex < this.monedasService.inventario.length - 1){
      this.comidaIndex++;
    }

  }

  alimentarMascota(){

    if(this.monedasService.inventario.length == 0){
      alert("No tienes comida 🍽");
      return;
    }

    this.monedasService.consumirComida(this.comidaIndex);

    if(this.comidaIndex >= this.monedasService.inventario.length){
      this.comidaIndex = this.monedasService.inventario.length - 1;
    }

  }

}
