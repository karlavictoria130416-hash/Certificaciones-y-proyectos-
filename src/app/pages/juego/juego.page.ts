import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { MonedasService } from '../../services/monedas.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, CommonModule, FormsModule]
})
export class JuegoPage implements OnInit {

  juegoActivo = "";

  jugando = false;
  tiempo = 5;
  intervalo:any;

  fresas:any[] = [];
  tiempoFresas = 10;
  intervaloFresas:any;

  constructor(
    public monedasService: MonedasService,
    private location: Location
  ) {}

  ngOnInit(){}

  cerrar(){
    this.location.back();
  }

  elegirJuego(nombre:string){
    this.juegoActivo = nombre;
  }

  iniciarjuego(){

    this.jugando = true;
    this.tiempo = 5;

    this.intervalo = setInterval(()=>{

      this.tiempo--;

      if(this.tiempo <=0){

        clearInterval(this.intervalo);
        this.jugando = false;

        const recompensa = Math.floor(Math.random()*20)+10;

        this.monedasService.agregar(recompensa);

        alert("¡Ganaste "+recompensa+" monedas! 💰");
      }

    },1000);
  }

  iniciarFresas(){

    this.fresas = [];
    this.tiempoFresas = 10;

    this.intervaloFresas = setInterval(()=>{

      this.tiempoFresas--;
      this.generarFresa();

      if(this.tiempoFresas <=0){
        clearInterval(this.intervaloFresas);
        alert("Juego terminado 🍓");
      }

    },1000);

  }

  generarFresa(){

    const x = Math.random()*80;
    const y = Math.random()*60;

    this.fresas.push({x,y});

  }

  atraparFresa(i:number){

    this.fresas.splice(i,1);
    this.monedasService.agregar(5);

  }

}