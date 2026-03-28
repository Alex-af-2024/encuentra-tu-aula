# 📍 EncuentraTuAula

Aplicación web desarrollada para facilitar la ubicación de salas dentro de la Universidad Santo Tomás, permitiendo a los estudiantes encontrar rápidamente su aula mediante un código estandarizado.

---

## 🚀 Descripción del Proyecto

EncuentraTuAula es una aplicación web responsive que permite a los alumnos ingresar el código de su sala (ej: `S-03-P02-A`) y obtener:

- 📌 Sede correspondiente
- 🏢 Edificio
- 🧭 Piso
- 🗺️ Imagen de referencia
- 📝 Guía textual de cómo llegar

El sistema está diseñado bajo un enfoque **mobile-first**, priorizando la rapidez, claridad y facilidad de uso.

---

## 🧠 Objetivo

Optimizar la experiencia de los estudiantes dentro del campus, reduciendo el tiempo de búsqueda de aulas mediante una solución simple, accesible y visual.

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- React (con Vite)
- JavaScript (ES6+)
- CSS modular por componente

### Backend / Base de Datos

- Node.js
- Firebase
- Cloud Firestore (NoSQL)

### Hosting (configurado)

- Firebase Hosting

---

## 🏗️ Arquitectura

El proyecto sigue una arquitectura desacoplada:
Frontend (React)
↓
Services (lógica de negocio)
↓
Cloud Firestore (base de datos)

---

## 📦 Estructura Principal del Proyecto

src/
│
├── components/
│ ├── SearchBar/
│ └── AulaResult/
│
├── pages/
│ └── Home/
│
├── services/
│ ├── firebase.js
│ └── aulaService.js
│
├── utils/
│ └── normalizeCode.js
│
└── assets/

---

## 🔍 Funcionalidades

- ✅ Búsqueda de aulas por código
- ✅ Normalización automática del input
- ✅ Consulta en tiempo real a Firestore
- ✅ Visualización de información estructurada
- ✅ Carga de imágenes según sede
- ✅ Validación de formato de código
- ✅ Feedback visual (loading, errores)

---

## 🧪 Ejemplo de uso

Entrada:

S-03-P02-A

Resultado:

- Sede: San Joaquín
- Edificio: A
- Piso: 2
- Imagen del lugar
- Guía paso a paso

---

## ⚙️ Instalación y ejecución

```bash
# Clonar repositorio
git clone <repo>

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

---

👨‍💻 Autor

Alejandro Franco Acosta
Analista Programador en práctica

---

📄 Licencia

Proyecto académico – uso educativo
