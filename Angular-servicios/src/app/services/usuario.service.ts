import { computed, Injectable, signal } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly usuariosSignal = signal<Usuario[]>([
    { id: 1, nombre: 'Ana Gomez', email: 'ana@mail.com', activo: true },
    { id: 2, nombre: 'Carlos Ruiz', email: 'carlos@mail.com', activo: true },
    { id: 3, nombre: 'Maria Lopez', email: 'maria@mail.com', activo: false }
  ]);

  readonly usuarios = this.usuariosSignal.asReadonly();
  readonly usuariosActivos = computed(() =>
    this.usuariosSignal().filter((usuario) => usuario.activo)
  );
  readonly totalUsuarios = computed(() => this.usuariosSignal().length);

  agregarUsuario(nombre: string, email: string): void {
    const nuevoId = Math.max(...this.usuariosSignal().map((u) => u.id), 0) + 1;
    const nuevoUsuario: Usuario = { id: nuevoId, nombre, email, activo: true };
    this.usuariosSignal.update((lista) => [...lista, nuevoUsuario]);
  }

  eliminarUsuario(id: number): void {
    this.usuariosSignal.update((lista) => lista.filter((u) => u.id !== id));
  }

  toggleActivo(id: number): void {
    this.usuariosSignal.update((lista) =>
      lista.map((u) => (u.id === id ? { ...u, activo: !u.activo } : u))
    );
  }

  buscarPorNombre(termino: string): Usuario[] {
    const terminoNormalizado = termino.trim().toLowerCase();
    if (!terminoNormalizado) {
      return this.usuariosSignal();
    }
    return this.usuariosSignal().filter((u) =>
      u.nombre.toLowerCase().includes(terminoNormalizado)
    );
  }
}
