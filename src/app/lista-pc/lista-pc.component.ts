import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pc',
  templateUrl: './lista-pc.component.html',
  styleUrls: ['./lista-pc.component.css']
})
export class ListaPcComponent implements OnInit {

  computadora1 = {
    "Modelo":"Acer 7200", 
    "Procesador":"Intel i5",
    "Memoria":8, 
    "Precio":140000,
    "Stock":10
  }
  computadora2 = {
    "Modelo":"HP 5000", 
    "Procesador":"Ryzen 8",
    "Memoria":8, 
    "Precio":130000,
    "Stock":20
  }
  computadora3 = {
    "Modelo":"MSI GL62", 
    "Procesador":"Intel i7",
    "Memoria":12, 
    "Precio":250000,
    "Stock":50
  }
  computadora4 = {
    "Modelo":"Asus XJ 100", 
    "Procesador":"Intel i5",
    "Memoria":8, 
    "Precio":170000,
    "Stock":15
  }

  constructor() { }

  ngOnInit(): void {
  }

}
