import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import {
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel
} from '@ionic/angular/standalone';

import { MonedasService } from '../../services/monedas.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonButton,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel
  ]
})
export class TiendaPage {

  monedas = 0;

  comidas = [
    { nombre:"sandwich", img:"assets/sandwich.png", precio:10 },
    { nombre:"pizza", img:"assets/pizza.png", precio:10 },
    { nombre:"pan", img:"assets/pan.png", precio:10 },
    { nombre:"sushi", img:"assets/sushi.png", precio:10 },
    { nombre:"huevo", img:"assets/huevo.png", precio:10 },
    { nombre:"desayuno", img:"assets/desayuno.png", precio:10 },
    { nombre:"helado", img:"assets/helado.png", precio:10 }
  ];

  constructor(
    public monedasService: MonedasService,
    private location: Location
  ) {}

  comprar(comida:any){

    if(this.monedasService.monedas >= comida.precio){

      this.monedasService.gastar(comida.precio);

      this.monedasService.agregarComida(
        comida.nombre,
        comida.img
      );

      alert("Compraste " + comida.nombre + " 🍔");

    }else{

      alert("No tienes suficientes monedas 💰");

    }

  }

  cerrar(){
    this.location.back();
  }

}