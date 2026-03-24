import { Component } from '@angular/core';
import { CarritoComponent } from '../../components/carrito/carrito.component';
import { CatalogoComponent } from '../../components/catalogo/catalogo.component';

@Component({
  selector: 'app-tienda-ejercicio',
  imports: [CatalogoComponent, CarritoComponent],
  templateUrl: './tienda-ejercicio.component.html',
  styleUrl: './tienda-ejercicio.component.css'
})
export class TiendaEjercicioComponent {
}
