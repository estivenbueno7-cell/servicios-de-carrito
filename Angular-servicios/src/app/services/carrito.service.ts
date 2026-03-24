import { computed, Injectable, signal } from '@angular/core';
import { ItemCarrito, Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private readonly itemsSignal = signal<ItemCarrito[]>([]);

  readonly items = this.itemsSignal.asReadonly();
  readonly totalItems = computed(() =>
    this.itemsSignal().reduce((acum, item) => acum + item.cantidad, 0)
  );
  readonly totalPrecio = computed(() =>
    this.itemsSignal().reduce(
      (acum, item) => acum + item.producto.precio * item.cantidad,
      0
    )
  );
  readonly estaVacio = computed(() => this.itemsSignal().length === 0);

  agregarProducto(producto: Producto): void {
    this.itemsSignal.update((items) => {
      const existente = items.find((item) => item.producto.id === producto.id);
      if (existente) {
        return items.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...items, { producto, cantidad: 1 }];
    });
  }

  quitarProducto(productoId: number): void {
    this.itemsSignal.update((items) =>
      items.filter((item) => item.producto.id !== productoId)
    );
  }

  actualizarCantidad(productoId: number, cantidad: number): void {
    if (cantidad <= 0) {
      this.quitarProducto(productoId);
      return;
    }
    this.itemsSignal.update((items) =>
      items.map((item) =>
        item.producto.id === productoId ? { ...item, cantidad } : item
      )
    );
  }

  vaciarCarrito(): void {
    this.itemsSignal.set([]);
  }
}
