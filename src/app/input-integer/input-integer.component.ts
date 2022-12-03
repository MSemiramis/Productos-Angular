import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { Producto } from '../list-productos/Producto';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {
 
  @Input()
  cantidad: number =0; //Consultar

  @Input()
  max: number =0;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  


  upCantidad(): void{
    if(this.cantidad < this.max) {
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
    }
    
  
  }
  
  downCantidad(): void{
    if(this.cantidad >0){
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
    }
  
  }
  
  //consultar event
  cambiarCantidad(even:any): void{
    // if... event.preventDefaul();
  
    console.log(even.key);
    this.cantidadChange.emit(this.cantidad);
  
  }

}
