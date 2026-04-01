# 📍 EncuentraTuAula

> Aplicación web para localizar salas en la Universidad Santo Tomás de manera rápida y sencilla..

Aplicación web responsive diseñada para facilitar a los estudiantes la ubicación de sus aulas mediante un sistema de códigos estandarizado. Con enfoque **mobile-first** y una interfaz intuitiva, EncuentraTuAula reduce significativamente el tiempo de búsqueda dentro del campus.

---

## 🎯 Principales Características

- 🔍 **Búsqueda rápida** por código de aula normalizado
- 📍 **Información completa** - Sede, edificio, piso e imagen de referencia
- 🗺️ **Guía paso a paso** para llegar al destino
- 📱 **Diseño responsive** - Optimizado para móviles, tablets y desktop
- 💾 **Historial local** - Guarda tus últimas búsquedas (sin necesidad de backend)
- 📖 **Guía integrada** - Explicación de qué significa cada parte del código
- ⚡ **Rendimiento optimizado** - Consultas en tiempo real a Firestore

---

## 🛠️ Stack Tecnológico

### Frontend

- **React 19** con Vite
- **JavaScript ES6+**
- **CSS Modular** (BEM convention)
- **Responsive Design** (Mobile-First)

### Backend & Base de Datos

- **Firebase** (Firestore)
- **Cloud Storage** (para imágenes)

### Deployment

- **Firebase Hosting**

---

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── SearchBar/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│   ├── AulaResult/
│   │   ├── AulaResult.jsx
│   │   └── AulaResult.css
│   ├── History/
│   │   ├── HistoryModal.jsx
│   │   └── HistoryModal.css
│   └── Help/
│       ├── HelpModal.jsx
│       └── HelpModal.css
├── pages/
│   └── Home/
│       ├── Home.jsx
│       └── Home.css
├── services/
│   ├── firebase.js
│   └── aulaService.js
├── utils/
│   ├── normalizeCode.js
│   └── storageUtils.js
├── assets/
│   └── images/
├── App.jsx
└── index.css
```

---

## 🎮 Uso

### Búsqueda Básica

1. Ingresa el código del aula (ej: `S-03-P02-A`)
2. Presiona "Buscar" o Enter
3. Obtén la información completa del aula

### Cómo Leer los Códigos

Cada código de aula tiene 4 componentes:

| Componente   | Ejemplo | Significado                   |
| ------------ | ------- | ----------------------------- |
| **Tipo**     | `S`     | S=Sala/Lab, A=Aula, O=Oficina |
| **Número**   | `03`    | ID único del espacio (01-99)  |
| **Piso**     | `P02`   | Piso donde se ubica           |
| **Edificio** | `A`     | A, B, C o R (Raquela Salas)   |

**Ejemplo completo:** `S-03-P02-A` → Sala 3, Piso 2, Edificio A

### Historial

- Presiona el botón **Historial** en la barra inferior
- Visualiza tus últimas 20 búsquedas
- Haz clic en cualquiera para verla nuevamente
- Borra el historial completo o elimina búsquedas individuales

### Ayuda

- Presiona el botón **Ayuda** en la barra inferior
- Obtén una guía completa sobre cómo funciona la aplicación
- Aprende el significado de cada parte del código de aula

---

## ⚙️ Instalación

### Requisitos

- Node.js 16+
- npm o yarn

### Setup

```bash
# Clonar el repositorio
git clone https://github.com/usuario/encuentra-tu-aula.git
cd encuentra-tu-aula

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev -- --host


# Acceder en desarrollo (local)
# http://localhost:5174/
```

### Build para producción

```bash
# Generar build optimizado
npm run build

# Desplegar en Firebase Hosting
firebase deploy
```

---

## 📱 Navbar Inferior

La barra de navegación incluye tres secciones principales:

| Botón            | Función                                               |
| ---------------- | ----------------------------------------------------- |
| **🏠 Inicio**    | Vuelve a la pantalla principal y limpia el formulario |
| **⏱️ Historial** | Visualiza tus últimas búsquedas guardadas localmente  |
| **❓ Ayuda**     | Accede a la guía completa de uso y códigos            |

> El historial se guarda en `localStorage` sin necesidad de backend

---

## 🎨 Diseño

### Color Institucional

- **Verde Principal:** `#007d6d`
- Todos los componentes respetan la paleta de colores de la universidad

### Responsividad

- ✅ Mobile (320px - 480px)
- ✅ Tablet (481px - 768px)
- ✅ Desktop (769px+)

---

## 🚀 Optimizaciones

- **Scroll suave** en dispositivos móviles iOS y Android
- **Carga lazy** de imágenes
- **Normalización automática** de input (mayúsculas, caracteres especiales)
- **Feedback visual** inmediato (loading, errores)
- **LocalStorage** para historial de búsquedas

---

## 🧪 Ejemplo de Resultado

**Entrada:** `s03p02a` (cualquier formato)

**Resultado:**

```
Código: S-03-P02-A
Sede: San Joaquín
Edificio: A
Piso: 2

[Imagen de referencia]

Guía: Desde entrada principal, gira a la izquierda
hacia el edificio A, sube al piso 2 y dirige 15 metros
en dirección a cordillera...
```

---

## 👨‍💻 Autor

**Alejandro Franco Acosta**  
Analista Programador en Práctica

---

## 📄 Licencia

Proyecto académico – Uso educativo  
Universidad - IP Santo Tomás

---

## 📞 Contacto

Para reportar bugs o sugerencias, abre un [Issue](https://github.com/usuario/encuentra-tu-aula/issues) en este repositorio.
