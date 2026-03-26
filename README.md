# 🎓 COEDUCA — Portal Estudiantil

Portal web estático para GitHub Pages que permite a los estudiantes consultar calificaciones, deméritos, horarios y anuncios ingresando su NIE.

---

## 📁 Estructura de archivos

```
index.html               ← Página principal (no necesitas editarla normalmente)
data/
  students_7A.js         ← Listado de 7° Grado A
  students_8A.js         ← Listado de 8° Grado A
  students_9A.js         ← Listado de 9° Grado A
  students_1BtoA.js      ← Listado de 1° Bachillerato A
  students_2BtoA.js      ← Listado de 2° Bachillerato A
  config.js              ← Anuncios, herramientas, publicaciones, horarios
  README.md              ← Este archivo
```

---

## ✏️ ¿Cómo editar?

### Agregar o modificar estudiantes
Abre el archivo `data/students_XXXX.js` del grado correspondiente.
Cada estudiante tiene esta estructura:

```js
{ nie: "20176653", nombre: "Apellido, Nombre", grado: "7° Grado A", nacimiento: "04/03/2013", sexo: "F" }
```

- `nie`: Número de identificación (clave de acceso)
- `nombre`: Apellido, Nombre (así aparecerá en la pantalla)
- `grado`: Debe coincidir EXACTAMENTE con la clave en `config.js`
- `sexo`: `"F"` o `"M"` (determina el avatar 👩‍🎓 / 👨‍🎓)

---

### ➕ Agregar un nuevo grado

1. Copia cualquier archivo, ej: `data/students_7A.js` → `data/students_3BtoA.js`
2. Edita el nombre del grado y la lista de estudiantes
3. En `index.html`, busca este bloque y agrega tu nuevo archivo:

```html
<script src="data/students_7A.js"></script>
<script src="data/students_8A.js"></script>
<!-- ... -->
<script src="data/students_3BtoA.js"></script>  ← aquí
```

4. En `data/config.js`, agrega el horario del nuevo grado en `window.HORARIOS` y la URL de calificaciones en `calificaciones_urls`.

---

### 📢 Editar anuncios
En `data/config.js`, busca `anuncios:` y edita el arreglo:

```js
anuncios: [
  {
    titulo: "Título del anuncio",
    texto: "Descripción del anuncio.",
    fecha: "26/03/2026"
  },
  // ...
]
```

---

### 📌 Agregar publicaciones al feed
En `data/config.js`, busca `publicaciones:`:

```js
{
  titulo: "Título de la publicación",
  texto: "Texto de la publicación.",
  fecha: "26/03/2026",
  grado: "Todos",          // "Todos" o el nombre exacto del grado
  imagen: null,            // URL de imagen, o null
  enlace: null             // { url: "https://...", texto: "Ver tarea" } o null
}
```

---

### 📊 Activar enlace de calificaciones
En `data/config.js`, busca `calificaciones_urls:` y reemplaza `"#"` con tu Google Sheets:

```js
calificaciones_urls: {
  "7° Grado A": "https://docs.google.com/spreadsheets/d/TU_ID_AQUI",
  // ...
}
```

---

### 🗓️ Editar horarios
En `data/config.js`, cada grado tiene su sección en `window.HORARIOS`. Edita las materias por día.
Los períodos marcados con `recreo: true` se muestran como fila de recreo.

---

## 🚀 Subir a GitHub Pages

1. Sube todos los archivos a tu repositorio GitHub
2. Ve a **Settings → Pages**
3. En "Source" selecciona la rama `main` y la carpeta `/ (root)`
4. Guarda — GitHub te dará una URL tipo `https://coeduca.github.io/registro`

---

## 🔒 Nota de seguridad

Este portal es **estático y público**. Cualquier persona que sepa el NIE de un estudiante puede acceder a su información. No almacenes datos sensibles (contraseñas, datos médicos, información confidencial). Los NIE son de conocimiento de los propios estudiantes.

---

*Portal desarrollado para COEDUCA — 2026*
