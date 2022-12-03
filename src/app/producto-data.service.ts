import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Producto } from './list-productos/Producto';

const URL = 'https://60d3716361160900173c9197.mockapi.io/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  constructor( private http: HttpClient) { }

  public getAll(): Observable<Producto[]>{
    return this.http.get<Producto[]>(URL).pipe(
      tap((mieles: Producto[]) => mieles.forEach(producto => producto.cantidad =0)) 
      );
  }

}
