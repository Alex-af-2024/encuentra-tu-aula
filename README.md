# 📍 EncuentraTuAula

> **Buscador inteligente de aulas universitarias** — Encuentra tu sala en segundos.

<p align="center">
  <img src="https://img.shields.io/badge/Estado-✅%20En%20Producción-brightgreen?style=for-the-badge" alt="En Producción" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
</p>

<p align="center">
  <a href="https://encuentratuaula-454d9.web.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Ver%20Demo%20en%20Vivo-encuentratuaula--454d9.web.app-007d6d?style=for-the-badge" alt="Demo en Vivo" />
  </a>
</p>

---

## 🧩 ¿Qué es?

**EncuentraTuAula** es una **aplicación web en producción** que resuelve un problema real: estudiantes perdiendo tiempo buscando aulas en el campus. Ingresando un código de sala, la app muestra la ubicación exacta, el edificio, piso, imagen de referencia y una guía paso a paso para llegar.

🔗 **Pruébala ahora:** [https://encuentratuaula-454d9.web.app/](https://encuentratuaula-454d9.web.app/)

### Prueba con estos códigos de ejemplo:

| Código | Descripción |
|--------|-------------|
| `S-03-P02-A` | Sala 3 · Piso 2 · Edificio A — San Joaquín |
| `S-01-P01-R` | Sala 1 · Piso 1 · Salas de Raquel |

---

## ✨ Características Principales

| Funcionalidad | Detalle |
|---|---|
| 🔍 **Búsqueda inteligente** | Normalización automática del código (acepta mayúsculas, minúsculas, con o sin guiones) |
| 📍 **Información completa** | Sede, edificio, piso, imagen de referencia y guía de orientación |
| 🗺️ **Guía paso a paso** | Indicaciones detalladas desde la entrada principal hasta el aula |
| 📱 **Diseño Mobile-First** | Interfaz responsive optimizada para móviles, tablets y desktop |
| 💾 **Historial local** | Últimas búsquedas guardadas en `localStorage` — sin backend adicional |
| 🎨 **UI moderna** | Glassmorphism, animaciones con Framer Motion y paleta institucional |
| ⚡ **Consultas en tiempo real** | Base de datos Firestore con respuestas instantáneas |

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnología | Versión | Uso |
|---|---|---|
| **React** | 19 | UI declarativa con hooks y componentes funcionales |
| **TypeScript** | 6.0 | Tipado estático y seguridad en compilación |
| **Tailwind CSS** | 4.2 | Utilidades CSS modernas con `@theme` y `@layer` |
| **Framer Motion** | 12 | Animaciones fluidas y transiciones de página |
| **Vite** | 8.0 | Build tool ultra-rápido con HMR |

### Backend & Infraestructura

| Tecnología | Uso |
|---|---|
| **Firebase Firestore** | Base de datos NoSQL en tiempo real |
| **Firebase Hosting** | Despliegue en producción con CDN global |
| **Cloud Storage** | Almacenamiento de imágenes de referencia |

---

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar/          # Barra de navegación inferior con animaciones
│   ├── SearchBar/       # Barra de búsqueda con selects encadenados
│   ├── AulaResult/      # Tarjeta de resultado con datos del aula
│   ├── History/         # Modal de historial de búsquedas
│   └── Help/            # Modal de ayuda y guía de códigos
├── pages/
│   └── Home/            # Página principal con lógica de búsqueda
├── services/
│   ├── firebase.ts      # Configuración e inicialización de Firebase
│   └── aulaService.ts   # Servicio de consultas a Firestore
├── types/
│   └── index.ts         # Interfaces TypeScript (Aula, HistoryItem)
├── utils/
│   ├── normalizeCode.ts # Normalización de códigos de entrada
│   └── storageUtils.ts  # Gestión de localStorage (historial)
├── assets/images/       # Recursos estáticos
├── App.tsx              # Componente raíz con gestión de estado
├── main.tsx             # Entry point
└── index.css            # Sistema de diseño (Tailwind + glass-card)
```

---

## 🎯 Decisiones Técnicas Destacadas

| Decisión | Justificación |
|---|---|
| **TypeScript** | Prevención de errores en tiempo de compilación, mejor experiencia de desarrollo y documentación implícita del código |
| **Tailwind CSS v4** | Sistema de diseño basado en `@theme` tokens para mantener consistencia visual. Eliminación completa de archivos CSS modulares |
| **Framer Motion** | Animaciones declarativas con `AnimatePresence` para transiciones suaves entre estados de la UI |
| **`forwardRef` + `useImperativeHandle`** | Comunicación padre→hijo controlada para resetear el formulario desde la Navbar |
| **`scrollbar-gutter: stable`** | Prevención de layout shift en desktop al abrir modales que ocultan el scroll |
| **Selects encadenados con auto-focus** | UX optimizada: seleccionar una opción mueve automáticamente el foco al siguiente campo |
| **LocalStorage para historial** | Persistencia de datos del usuario sin necesidad de autenticación ni backend adicional |

---

## 🚀 Instalación Local

### Requisitos

- Node.js 18+
- npm

### Setup

```bash
# Clonar el repositorio
git clone https://github.com/Alex-af-2024/encuentra-tu-aula.git
cd encuentra-tu-aula

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev -- --host
```

### Build de producción

```bash
npm run build
firebase deploy
```

---

## 📱 Ejemplo de Uso

### Búsqueda: `S-03-P02-A`

```
📍 Código:    S-03-P02-A
🏢 Sede:      San Joaquín
🏛️ Edificio:  A
🪜 Piso:      2

🗺️ Guía: Desde la entrada principal, gira a la izquierda hacia
el edificio A, sube al piso 2 y dirige 15 metros en dirección
a cordillera...
```

### Búsqueda: `S-01-P01-R`

```
📍 Código:    S-01-P01-R
🏢 Sede:      Salas de Raquel
🏛️ Edificio:  R
🪜 Piso:      1

🗺️ Guía: Indicaciones paso a paso hasta llegar al aula...
```

> 💡 **Tip:** La app acepta cualquier formato de entrada — `s03p02a`, `S-03-P02-A`, `s-03-p02-a` — todos producen el mismo resultado.

---

## 📊 Rendimiento y Optimizaciones

- ⚡ **Consultas instantáneas** a Firestore con caching local
- 🖼️ **Carga optimizada** de imágenes de referencia
- 🔄 **Normalización automática** de entrada del usuario
- 🎭 **Feedback visual inmediato** — estados de carga, errores y resultados animados
- 📦 **Build optimizado** con Vite — tree-shaking y code splitting automático

---

## 👨‍💻 Autor

**Alejandro Franco Acosta**
Analista Programador

[![GitHub](https://img.shields.io/badge/GitHub-Alex--af--2024-181717?style=flat-square&logo=github)](https://github.com/Alex-af-2024)
[![GitLab](https://img.shields.io/badge/GitLab-Alex--af--2024-FC6D26?style=flat-square&logo=gitlab)](https://gitlab.com/Alex-af-2024)

---

## 📄 Licencia

Proyecto académico — Universidad IP Santo Tomás
