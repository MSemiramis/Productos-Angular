import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CarritoProductoService } from '../carrito-producto.service';
import { Producto } from '../list-productos/Producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  listaCompra$: Observable<Producto[]>;

  constructor(private carrito: CarritoProductoService){
    this.listaCompra$= carrito.listaCompra.asObservable();

  };
}
