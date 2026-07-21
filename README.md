README – Tienda React (Proyecto Final)
Descripción General
Tienda React es una aplicación web y móvil desarrollada para la asignatura Programación de Componentes. Incluye CRUD completo, integración con Firebase, despliegue en Netlify y exportación a APK mediante Cordova.
La aplicación permite:
•	Listar productos
•	Agregar productos
•	Editar productos
•	Eliminar productos
•	Guardar datos en Firebase Firestore
•	Subir archivos a Firebase Storage
•	Autenticación con Firebase Auth
•	Ejecutar la app como sitio web y como APK Android
Objetivos del Proyecto
•	Construir una aplicación web con React según requerimientos específicos.
•	Implementar servicios cloud (Firebase) siguiendo estándares de la industria.
•	Obtener desplegables para entornos web y mobile.
Tecnologías Utilizadas
Frontend
•	React
•	JSX
•	Componentes funcionales
•	Props y State
•	Hooks (useState, useEffect)
•	Comunicación padre-hijo
•	Formularios y validaciones
•	Bootstrap
•	React Router
Backend / Cloud
•	Firebase Auth
•	Firebase Firestore
•	Firebase Storage
Mobile
•	Cordova
•	Gradle
•	Android SDK
•	APK probado en dispositivo Xiaomi 15 Ultra
Estructura del Proyecto
Código
/src
  /components
  /firebase
  App.jsx
  index.js

/public
  index.html

/miapp
  /www (build de React)
  /platforms/android (APK)

Firebase Implementado
•	Autenticación (Auth)
•	Base de datos (Firestore)
•	Almacenamiento de archivos (Storage)
Despliegue Web (Netlify)
Sitio publicado en Netlify:  https://tienda-react-jaime.netlify.app 
APK Android
El proyecto fue exportado a APK usando Cordova y probado en un dispositivo real.
Ruta del APK dentro del proyecto:
Código
miapp/platforms/android/app/build/outputs/apk/debug/app-debug.apk
Cómo ejecutar el proyecto
1. Clonar el repositorio
Código
git clone https://github.com/jrami60/Tienda-React-Final.git
2. Instalar dependencias
Código
npm install
3. Ejecutar en modo desarrollo
Código
npm start
4. Generar build
Código
npm run build
Build para Cordova (APK)
Copiar el contenido de:
Código
/build
Dentro de:
Código
/miapp/www
Luego ejecutar:
Código
cordova prepare
cordova build android
Video de Presentación
El video incluye:
•	Explicación del proyecto
•	Demostración del CRUD
•	Firebase funcionando
•	Deploy en Netlify
•	Instalación del APK
•	Uso real en dispositivo móvil
•	
Autor
•	Jaime Ariel Ramírez Moraga Estudiante de Ingeniería en Informática Puerto Montt, Chile
