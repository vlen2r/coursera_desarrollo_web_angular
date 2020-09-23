import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.models';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  lista_productos: Producto[];

  constructor() { 
    this.lista_productos=[];
  }

  ngOnInit(): void {
  }

  guardar(nombre:string,codigoReferencia: string, categoria: string, precio: string, moneda: string, descripcion: string): boolean{
    this.lista_productos.push(new Producto(nombre,codigoReferencia,categoria,precio,moneda,descripcion));
    return false;
  }

}
