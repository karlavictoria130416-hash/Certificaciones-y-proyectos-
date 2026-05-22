import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MonedasService {

  monedas = 400;

  inventario:any[] = [
    { nombre:"sandwich", img:"assets/sandwich.png", cantidad:3 },
    { nombre:"pizza", img:"assets/pizza.png", cantidad:2 },
    { nombre:"pan", img:"assets/pan.png", cantidad:1 },
    { nombre:"sushi", img:"assets/sushi.png", cantidad:2 },
    { nombre:"huevo", img:"assets/huevo.png", cantidad:2 },
    { nombre:"desayuno", img:"assets/desayuno.png", cantidad:2 },
    { nombre:"helado", img:"assets/helado.png", cantidad:2 }
  ];

  constructor(){

    const datosInventario = localStorage.getItem("inventario");
    const datosMonedas = localStorage.getItem("monedas");

    if(datosInventario){
      this.inventario = JSON.parse(datosInventario);
    }

    if(datosMonedas){
      this.monedas = JSON.parse(datosMonedas);
    }

  }

  guardarDatos(){
    localStorage.setItem("inventario", JSON.stringify(this.inventario));
    localStorage.setItem("monedas", JSON.stringify(this.monedas));
  }

  agregar(cantidad:number){
    this.monedas += cantidad;
    this.guardarDatos();
  }

  gastar(cantidad:number){
    this.monedas -= cantidad;
    this.guardarDatos();
  }

  agregarComida(nombre:string, img:string){

  const comidaExistente = this.inventario.find(
    item => item.nombre === nombre
  );

  if(comidaExistente){
    comidaExistente.cantidad++;
  }else{
    this.inventario.push({
      nombre: nombre,
      img: img,
      cantidad: 1
    });
  }

  this.guardarDatos();
}



  consumirComida(index:number){

    if(this.inventario[index].cantidad > 0){

      this.inventario[index].cantidad--;

      if(this.inventario[index].cantidad == 0){
        this.inventario.splice(index,1);
      }

      this.guardarDatos();

    }

  }

}
