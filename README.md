# 🛠️ Creación del Proyecto AdminPanel con React + Vite

Este documento detalla paso a paso cómo fue creado el proyecto **AdminPanel** utilizando **React** y **Vite**, con integración de **Tailwind CSS**.

---

## Paso 1: Inicialización del Proyecto con Vite

El proyecto fue inicializado utilizando **Vite**, una herramienta moderna para proyectos front-end.

```bash
npm create vite@latest AdminPanel -- --template react
```

Esto generó una estructura base para una aplicación React.

---

## Paso 2: Integración de Tailwind CSS

[Tailwind Instalation](https://tailwindcss.com/docs/installation/using-vite). Para este paso, gracias a la pagina oficial de tailwind se instaló este framework para estilos, mediante la ejecucion de los comandos: 

```bash
npm install tailwindcss @tailwindcss/vite
```
Luego en vite.config.js importamos nuestra clase tailwindcss asi: 
```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
---

## Paso 3: Estructura del Proyecto

La estructura del proyecto es la estándar generada por Vite, y se ve así:

```
AdminPanel/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## Paso 4: Instalación de Dependencias

Una vez creado el proyecto, se instalaron las dependencias necesarias:

```bash
npm install
```

---

## Paso 5: Ejecución del Proyecto en Modo Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
npm run dev
```

Esto lanza la aplicación en `http://localhost:5173/`.

---

## Paso 6: Creacion de Pages

Para cada una de las rutas se genero una clase .jsx con el contenido html de cada una de las secciones a las que redirigen nuestras rutas de la barra de navegacion, las cuales fueron estilizadas usando las implementaciones de Tailwind.


