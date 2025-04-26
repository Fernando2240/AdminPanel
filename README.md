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

_Configuración realizada manualmente aquí._

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

## Paso 6: Configuración de ESLint

El proyecto incluye una configuración personalizada de ESLint en `eslint.config.js` para mantener buenas prácticas y calidad de código durante el desarrollo.
