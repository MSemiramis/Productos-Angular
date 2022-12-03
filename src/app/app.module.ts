import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductosComponent } from './list-productos/list-productos.component';
import { ComprasListComponent } from './compras-list/compras-list.component';
import { MielContactoComponent } from './miel-contacto/miel-contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListProductosComponent,
    ComprasListComponent,
    MielContactoComponent,
    CarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
