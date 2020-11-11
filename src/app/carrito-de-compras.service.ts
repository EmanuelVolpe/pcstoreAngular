import { Injectable } from '@angular/core';
import { Computadora } from './lista-pc/Computadora';

/**
 * Maneja la Lógica del carrito
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class CarritoDeComprasService {

  listaCarrito: Computadora[] = [];

  constructor() { }

  agregaAlCarrito(computadora: Computadora) {
    this.listaCarrito.push(computadora);
    console.log(this.listaCarrito.length);
  }
}
