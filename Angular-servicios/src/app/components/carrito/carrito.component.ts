import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  imports: [CurrencyPipe],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  readonly carritoSvc = inject(CarritoService);

  disminuirCantidad(productoId: number, cantidadActual: number): void {
    this.carritoSvc.actualizarCantidad(productoId, cantidadActual - 1);
  }

  aumentarCantidad(productoId: number, cantidadActual: number): void {
    this.carritoSvc.actualizarCantidad(productoId, cantidadActual + 1);
  }
}
