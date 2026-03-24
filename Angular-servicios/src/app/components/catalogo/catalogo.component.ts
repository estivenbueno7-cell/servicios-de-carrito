import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-catalogo',
  imports: [CurrencyPipe],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  readonly productoSvc = inject(ProductoService);
  readonly carritoSvc = inject(CarritoService);
}
