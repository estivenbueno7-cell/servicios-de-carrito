# Angular: Servicios + DI + Signals (Estilo Angular 22)

Material de ejemplo basico para clase.  
Este proyecto muestra solo estos temas:

- Creacion de servicios en Angular.
- Inyeccion de dependencias con `inject()`.
- `providedIn: 'root'` y servicios singleton.
- Manejo de estado con `signal()` y `computed()`.
- Rutas basicas con menu principal para navegar ejercicios.
- Componentes en archivos separados `*.ts`, `*.html`, `*.css`.

## Estructura del ejemplo

```text
src/app/
├── pages/
│   ├── inicio/
│   └── tienda-ejercicio/
├── models/
│   ├── usuario.model.ts
│   └── producto.model.ts
├── services/
│   ├── usuario.service.ts
│   ├── producto.service.ts
│   └── carrito.service.ts
├── components/
│   ├── usuario-lista/
│   ├── catalogo/
│   └── carrito/
├── app.routes.ts
├── app.ts
├── app.html
└── app.css
```

## Que hace cada parte

### 1) `UsuarioService`

- Guarda una lista de usuarios en un `signal`.
- Expone datos de solo lectura para componentes.
- Tiene `computed` para total de usuarios y usuarios activos.
- Incluye metodos CRUD basicos: agregar, eliminar y activar/desactivar.

### 2) `ProductoService`

- Entrega un catalogo fijo de productos de ejemplo.
- Sirve para practicar consumo de datos desde un servicio.

### 3) `CarritoService`

- Maneja el carrito compartido (singleton).
- Expone:
  - `items`
  - `totalItems`
  - `totalPrecio`
  - `estaVacio`
- Incluye metodos para agregar, quitar, actualizar cantidad y vaciar.

### 4) Rutas y menu

- `/inicio`: portada del laboratorio con acceso rapido a ejercicios.
- `/usuarios`: ejercicio de usuarios.
- `/tienda`: ejercicio integrado catalogo + carrito.
- `/catalogo`: vista individual del catalogo.
- `/carrito`: vista individual del carrito.

### 5) Componentes

- `UsuarioListaComponent`: formulario y lista de usuarios.
- `CatalogoComponent`: listado de productos y boton "Agregar al carrito".
- `CarritoComponent`: visualiza y administra el carrito.

## Objetivo didactico

Ver claramente la separacion de responsabilidades:

- Componentes: interfaz y eventos del usuario.
- Servicios: estado y logica de negocio.

## Ejecutar el proyecto

```bash
npm install
npm start
```

Abrir en navegador: `http://localhost:4200/`

## Comandos utiles

```bash
npm run build
npm test
```

## Nota para clase

Este ejemplo intencionalmente es simple y sin backend real.  
La idea es dominar primero servicios, DI y signals antes de pasar a HTTP, rutas o temas mas avanzados.
