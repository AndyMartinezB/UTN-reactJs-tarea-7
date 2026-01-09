# Tarea Nº7: Mini dashboard - Rutas públicas y protegidas.

## Descripción del Proyecto

Este proyecto corresponde a la séptima entrega del Curso de Desarrollo en React JS de
la UTN.BA. La tarea consiste en implementar una navegación básica entre diferentes páginas con enrutamiento a partir de la librería `react-router-dom`
 con el objetivo de practicar su configuración básica con BrowserRouter, Routes y Route,
 la navegación con <Link> y useNavigate,
 la creación de rutas dinámicas con useParams y query params con useSearchParams y
 la implementación de rutas anidadas con <Outlet> y rutas protegidas con redirección post-login usando useLocation y Navigate.
 
## Decisiones de diseño
- Layout Persistente: Uso de Rutas Anidadas y Outlet para mantener una estructura fija (Header, Sidebar lateral y Footer) mientras cambia el contenido principal.

- Para el enrutamiento Dinámico: Navegación hacia vistas de detalle de productos (/producto/:id) utilizando useParams para renderizar información específica consumida de FakeStoreAPI.

- Para la ruta Protegida: Implementación del componente ProtectedRoute que restringe el acceso a la sección de "Configuración". Incluye un sistema de Autenticación Simulada (Login) con manejo de estado global de usuario y redirecciones automáticas (Navigate).

## Instrucciones

Para clonar el repositorio desde tu terminal:

```bash
git clone https://github.com/AndyMartinezB/UTN-reactJs-tarea-7.git
```

Para ejecutar el proyecto (React + Vite):

```bash
npm install
npm run dev
```

Luego abrir el navegador en la URL indicada por Vite (por defecto `http://localhost:5173`).

## Capturas de Pantalla

### Página estática

![estática]()

### Página dinámica

![dinámica]()

### Página protegida

![protegida]()


## Créditos

**Autor:** Andrés Martínez Bologna\

**Curso:** [React JS - UTN.BA](https://sceu.frba.utn.edu.ar/e-learning/detalle/curso/35189/curso-de-desarrollo-en-react-js?id=999201563)

**Año:** 2025
