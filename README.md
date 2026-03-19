17-03-2026 Sprint 2

- Aplicar RegExp (expresión regular) para eliminar espacios y guiones en todo el imput. Es como un super buscador de texto.Su sintaxis es /[\s-]/g

18-03-2026

- Configuración de Firebase con app React ...ok
  - services/firebase.js->
    - firebaseConfig: Objeto que le dice a Google exactamente cual de todos los proyectos debe conectarse(usando apiKey y projectId)
    - initializeApp: Comando que enciende la conexión usando llaves
    - getFirestore: Se activa Firestore(ddbb noSQL). Al exportar db, se puede importar ddbb a cualquier componente de Ract para guardar o leer datos.

- Configurar SDK en proyecto usando datos de Firebase </> que contiene la conexión de servicios Google. ...ok
- En Firebase se crea proyecto y configura SDK en proyecto. ...ok
- Se crea ddbb NoSQL en Firebase usando Firestore. Modo prueba para flexibilidad y test ...ok

- Configurar Hosting ...ok

Lo que tengo de momento:
✔ Input funcionando
✔ Normalización
✔ Conexión a Cloud Firestore
✔ Datos reales
✔ Render básico

19-03-2026
