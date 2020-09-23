import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Producto } from '../models/producto.models';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto:Producto;
  @HostBinding('attr.class') cssClass= 'row col-sm-12 border border-dark';

  constructor() { }

  ngOnInit(): void {
  }

}
