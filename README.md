# Little Lemon Restaurant - Aplicación Web de Reservas

Aplicación web desarrollada en React para el restaurante mediterráneo Little Lemon como proyecto final (Capstone Project) del programa de certificación **Meta Front-End Developer** en Coursera.

**Desarrollador:** Ricardo Herrera ([@RHDevCoder](https://github.com/RHDevCoder))  
**Repositorio:** [little-lemon-app](https://github.com/RHDevCoder/little-lemon-app)

---

## Descripción del Proyecto

El objetivo principal de esta aplicación es proporcionar un flujo completo, accesible y responsivo para la reserva de mesas en línea en Little Lemon. La aplicación implementa gestión de estado global/local, validación dual en formularios, navegación de múltiples páginas y cobertura de pruebas unitarias automatizadas.

## Características Principales

* **Diseño Responsivo:** Interfaz adaptable para dispositivos móviles, tablets y pantallas de escritorio.
* **Sistema Dinámico de Reservas:** Consulta de horarios disponibles en tiempo real mediante `fetchAPI` y gestión de estado con `useReducer`.
* **Validación en Cliente:** Validación estricta con atributos HTML5 nativos (`required`, `min`, `max`) y validación programática en React que controla la activación del botón de envío.
* **Accesibilidad (a11y):** Estructura basada en etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), vinculación de etiquetas (`label htmlFor` -> `input id`) y soporte para lectores de pantalla mediante atributos ARIA (puntuación de 100/100 en auditoría Google Lighthouse).
* **Pruebas Automatizadas:** Suite completa de pruebas unitarias con Jest y React Testing Library que evalúa renderizado, funciones reductoras, validación y eventos de envío.

## Tecnologías Utilizadas

* **React 18**
* **React Router DOM v6** (enrutamiento de navegación)
* **Jest & React Testing Library** (pruebas unitarias)
* **CSS3** (Variables CSS, Flexbox y CSS Grid)
* **HTML5 Semántico**

---

## Instalación y Ejecución Local

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/RHDevCoder/little-lemon-app.git](https://github.com/RHDevCoder/little-lemon-app.git)