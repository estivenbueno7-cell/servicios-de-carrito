import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-lista',
  imports: [FormsModule],
  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.css'
})
export class UsuarioListaComponent {
  readonly svc = inject(UsuarioService);
  readonly terminoBusqueda = signal('');
  readonly usuariosFiltrados = computed(() => {
    const termino = this.terminoBusqueda().trim();
    return termino ? this.svc.buscarPorNombre(termino) : this.svc.usuarios();
  });

  nuevoNombre = '';
  nuevoEmail = '';

  agregar(): void {
    const nombre = this.nuevoNombre.trim();
    const email = this.nuevoEmail.trim();
    if (!nombre || !email) {
      return;
    }
    this.svc.agregarUsuario(nombre, email);
    this.nuevoNombre = '';
    this.nuevoEmail = '';
  }
}
