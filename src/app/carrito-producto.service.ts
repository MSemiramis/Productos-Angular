import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './list-productos/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoProductoService {

  private _listaCompra: Producto [] = [];
  listaCompra:BehaviorSubject<Producto[]> =new BehaviorSubject(this._listaCompra);

  constructor() { }

  agregarCompra(producto: Producto) {
    let item: Producto| undefined  = this._listaCompra.find((v1)=> v1.nombre == producto.nombre);
    if(!item){
    this._listaCompra.push(producto);
    }
    else{
      item.cantidad += producto.cantidad;
    } 

    this.listaCompra.next(this._listaCompra);

  }

  
}
