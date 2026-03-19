## Galería de Guitarras con React

Este proyecto es una **galería interactiva de guitarras** desarrollada con **React** y **Vite**.
Permite visualizar diferentes modelos de guitarras en formato de tarjetas y verlas en tamaño grande mediante un modal con animaciones suaves.

--------------------------------------------------------------------------------------------------------------------------------------------

## Tecnologías utilizadas

- React
- Vite
- JavaScript (ES6+)
- CSS3 (animaciones y transiciones)

--------------------------------------------------------------------------------------------------------------------------------------------


## Funcionalidades

- Visualización de múltiples imágenes en formato grid
- Modal para ver imágenes en tamaño completo
- Animaciones suaves al abrir y cerrar imágenes
- Interacción mediante clic
- Diseño responsive

--------------------------------------------------------------------------------------------------------------------------------------------

## Estructura del proyecto

```
galeria-guitarras/
├── src/
│   ├── assets/
│   │   └── guitarras/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
```

--------------------------------------------------------------------------------------------------------------------------------------------


## Instalación y uso

### 1️.- Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/galeria-guitarras.git
cd galeria-guitarras
```

---

### 2️.- Instalar dependencias

```bash
npm install
```

---

### 3️.- Ejecutar el proyecto

```bash
npm run dev
```

La aplicación se abrirá en:

```
http://localhost:5173
```

--------------------------------------------------------------------------------------------------------------------------------------------


## Funcionamiento

- Al cargar la página se muestra una **galería de guitarras**
- Cada imagen incluye su nombre
- Al hacer clic en una imagen:

  - Se abre un **modal**
  - La imagen se muestra en grande
  - Aplica animación de entrada (zoom + fade)
  - Al cerrar:

  - Se reproduce una animación suave de salida

--------------------------------------------------------------------------------------------------------------------------------------------


## Conceptos aplicados

- Componentes en React
- Uso de `useState`
- Renderizado dinámico con `.map()`
- Manejo de eventos (`onClick`)
- Importación de imágenes locales
- Animaciones con CSS (`@keyframes`)
- Manejo de estado para modales

--------------------------------------------------------------------------------------------------------------------------------------------
## Notas

* Las imágenes se cargan localmente desde la carpeta `assets`
* No se incluye `node_modules` en el repositorio
* Proyecto enfocado en aprendizaje y práctica

--------------------------------------------------------------------------------------------------------------------------------------------

Desarrollado por x-numbers

