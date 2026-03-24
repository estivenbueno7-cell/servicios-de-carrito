import { Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaEjercicioComponent } from './pages/tienda-ejercicio/tienda-ejercicio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'usuarios', component: UsuarioListaComponent },
  { path: 'tienda', component: TiendaEjercicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: 'inicio' }
];
