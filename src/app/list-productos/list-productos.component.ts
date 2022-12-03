import { Component, OnInit } from '@angular/core';
import { CarritoProductoService } from '../carrito-producto.service';
import { ProductoDataService } from '../producto-data.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.scss']
})
export class ListProductosComponent implements OnInit {
  

  mieles:Producto [] =[] ;


constructor(
  private carritoService:CarritoProductoService,
  private productoService: ProductoDataService) { 

} 

ngOnInit(): void {
  this.productoService.getAll()
  .subscribe((mieles: any) => this.mieles = mieles);
}

agregarCompra(producto: any):void {
  this.carritoService.agregarCompra(producto);
  producto.stock -= producto.cantidad;
  
}

}
