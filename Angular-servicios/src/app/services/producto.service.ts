import { Injectable, signal } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly productosSignal = signal<Producto[]>([
    { id: 1, nombre: 'Camiseta Angular', precio: 45000 },
    { id: 2, nombre: 'Taza TypeScript', precio: 25000 },
    { id: 3, nombre: 'Sticker Pack Dev', precio: 12000 },
    { id: 4, nombre: 'Hoodie Programador', precio: 95000 },
    { id: 5, nombre: 'Mouse Pad Codigo', precio: 30000 }
  ]);

  readonly productos = this.productosSignal.asReadonly();
}
