import { Component, OnInit } from '@angular/core';
import { CarritoDeComprasService } from '../carrito-de-compras.service';
import { ListaPcComponent } from '../lista-pc/lista-pc.component';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  

  constructor(private carrito:CarritoDeComprasService) { }

  ngOnInit(): void {
  }

}
