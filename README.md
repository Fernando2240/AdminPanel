# Creación del Proyecto AdminPanel con React + Vite

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

Ademas en nuestra clase css es importante escribir al principio: `@import "tailwindcss";`


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

# Resultados
![Imagen de WhatsApp 2025-04-25 a las 21 22 59_7aca0531](https://github.com/user-attachments/assets/636c041b-526b-4f56-b667-f1934c58df3d)

![Imagen de WhatsApp 2025-04-25 a las 21 23 14_eea369ea](https://github.com/user-attachments/assets/0e798dae-3fd1-4d5f-90ef-871fce835daf)

![Imagen de WhatsApp 2025-04-25 a las 21 23 30_4f86d364](https://github.com/user-attachments/assets/9b6743e1-eaef-4ca5-afb0-1887aa51a9f2)

![Imagen de WhatsApp 2025-04-25 a las 21 23 57_6b29ca95](https://github.com/user-attachments/assets/b2871edf-bd74-4f8b-a678-e30bd00ccf7e)

