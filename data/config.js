// ============================================================
// CONFIGURACIÓN GENERAL — COEDUCA Portal Estudiantil 2026
// ============================================================
window.COEDUCA_CONFIG = {

  calificaciones_urls: {
    "7° Grado A":       "#",
    "8° Grado A":       "#",
    "9° Grado A":       "#",
    "1° Bto. Gral. A":  "#",
    "2° Bto. Gral. A":  "https://drive.google.com/drive/folders/11sxk7XZBn_T2xA3OOvGR6ol-nrzXZ_F0?usp=sharing"
  },

  anuncios: [
    {
      titulo: "¡Bienvenidos al año escolar 2026!",
      texto: "El portal estudiantil COEDUCA ya está disponible. Aquí podrás consultar tus calificaciones, deméritos y horarios.",
      fecha: "02/02/2026"
    },
  ],

  herramientas: [
    { nombre: "Google Classroom",  url: "https://classroom.google.com", icono: "🎓" },
    { nombre: "Diccionario RAE",   url: "https://dle.rae.es",           icono: "📖" },
    { nombre: "YouTube Edu",       url: "https://www.youtube.com/education", icono: "▶️" },
    { nombre: "Duolingo",          url: "https://www.duolingo.com",     icono: "🦜" },
  ],

  // grado:"Todos" = todos | grado:"8° Grado A" = solo ese grado
  // imagen: URL o null | enlace: { url:"...", texto:"..." } o null
  publicaciones: [
    {
      titulo: "📝 Tarea de Inglés — Numbers from 0 to 20",
      texto: "Aprenderse los números del 0 al 20 en inglés para miércoles 8 de abril.",
      fecha: "23/03/2026",
      grado: "7° Grado A",
      imagen: "https://i.ibb.co/MkWyTLLn/black-classroom-number-signs-1-20-thumbnail-2.jpg",
      enlace: null
    },
    {
      titulo: "Juegos Intramuros 2026",
      texto: "Se acercan los juegos intramuros. ¡Participa y apoya a tu equipo!",
      fecha: "22/03/2026",
      grado: "Todos",
      imagen: null,
      enlace: null
    },
    {
      titulo: "Rubricas de Inglés - A Story from The Past",
      texto: "En este enlace podrán encontrar sus rúbricas con su calificación de la actividad de inglés (A Story from The Past)",
      fecha: "22/03/2026",
      grado: "2° Bto. Gral. A",
      imagen: "https://i.ibb.co/ym2YyLgf/pngtree-back-to-school-with-happy-kids-cartoon-design-png-image-13536153.png",
      enlace: { url: "https://drive.google.com/drive/folders/11sxk7XZBn_T2xA3OOvGR6ol-nrzXZ_F0?usp=sharing", texto: "Ver rúbricas" }
    },
  ]
};

// ==============================================================
// HORARIOS POR GRADO
// tipo aseo "diario": dias[] con dia, zona[], aula[]
// tipo aseo "semanal": grupos[] con semana, encargados[]  (legacy)
// ==============================================================
window.HORARIOS = {

  "7° Grado A": {
    periodos: [
      { hora: "12:45 – 1:45", etiqueta: "1° Período" },
      { hora: "1:45 – 2:00",  etiqueta: "RECESO", recreo: true },
      { hora: "2:00 – 2:45",  etiqueta: "2° Período" },
      { hora: "2:45 – 3:30",  etiqueta: "3° Período" },
      { hora: "3:30 – 3:55",  etiqueta: "RECESO", recreo: true },
      { hora: "3:55 – 4:40",  etiqueta: "4° Período" },
      { hora: "4:40 – 5:25",  etiqueta: "5° Período" }
    ],
    dias: {
      "Lunes":     ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Martes":    ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Miércoles": ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Jueves":    ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Viernes":   ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"]
    },
    aseo: null
  },

  "8° Grado A": {
    periodos: [
      { hora: "12:45 – 1:45", etiqueta: "1° Período" },
      { hora: "1:45 – 2:00",  etiqueta: "RECESO", recreo: true },
      { hora: "2:00 – 2:45",  etiqueta: "2° Período" },
      { hora: "2:45 – 3:30",  etiqueta: "3° Período" },
      { hora: "3:30 – 3:55",  etiqueta: "RECESO", recreo: true },
      { hora: "3:55 – 4:40",  etiqueta: "4° Período" },
      { hora: "4:40 – 5:25",  etiqueta: "5° Período" }
    ],
    dias: {
      "Lunes":     ["Ciudadanía y Valores", null, "Innovación", "Innovación", null, "Lengua y Literatura", "Lengua y Literatura"],
      "Martes":    ["Matemática y Datos",  null, "Educación Física", "Educación Física", null, "Lengua y Literatura", "Lengua y Literatura"],
      "Miércoles": ["Lengua y Literatura", null, "Ciudadanía y Valores", "Ciudadanía y Valores", null, "Inglés", "Inglés"],
      "Jueves":    ["Ciencia y Tecnología", null, "Matemática y Datos", "Matemática y Datos", null, "Ciencia y Tecnología", "Ciencia y Tecnología"],
      "Viernes":   ["Matemática y Datos",  null, "Inglés", "Matemática y Datos", null, "Ciudadanía y Valores", "Ciudadanía y Valores"]
    },
    aseo: {
      tipo: "diario",
      dias: [
        {
          dia: "Lunes",
          zona: ["Pérez Barahona, Katherine", "Meléndez Corvera, Raúl", "Duran Gómez, Justin"],
          aula: ["Manueles Pereira, Keily", "Martínez Lazo, Ederson", "Henríquez Chirino, Estiven", "Rivas López, Samuel"]
        },
        {
          dia: "Martes",
          zona: ["Barrera Hernández, Karen", "Corvera Flores, Pedro", "González Corvera, Héctor"],
          aula: ["Corvera Alfaro, Gustavo", "Pérez Barahona, Katherine", "Duran Gómez, Justin"]
        },
        {
          dia: "Miércoles",
          zona: ["Corvera Fuentes, Luis", "Manueles Pereira, Keily", "Corvera De Paz, Diego", "Rivas López, Samuel"],
          aula: ["Ángel Martínez, Génesis", "Meléndez Corvera, Raúl", "Barrera Hernández, Emerson"]
        },
        {
          dia: "Jueves",
          zona: ["Ángel Martínez, Génesis", "Martínez Lazo, Ederson", "Barrera Hernández, Emerson"],
          aula: ["Corvera Fuentes, Luis", "Martínez Flores, Gisela", "Corvera De Paz, Diego"]
        },
        {
          dia: "Viernes",
          zona: ["Corvera Alfaro, Gustavo", "Martínez Flores, Gisela", "Henríquez Chirino, Estiven"],
          aula: ["Barrera Hernández, Karen", "Corvera Flores, Pedro", "González Corvera, Héctor"]
        }
      ]
    }
  },

  "9° Grado A": {
    periodos: [
      { hora: "12:45 – 1:45", etiqueta: "1° Período" },
      { hora: "1:45 – 2:00",  etiqueta: "RECESO", recreo: true },
      { hora: "2:00 – 2:45",  etiqueta: "2° Período" },
      { hora: "2:45 – 3:30",  etiqueta: "3° Período" },
      { hora: "3:30 – 3:55",  etiqueta: "RECESO", recreo: true },
      { hora: "3:55 – 4:40",  etiqueta: "4° Período" },
      { hora: "4:40 – 5:25",  etiqueta: "5° Período" }
    ],
    dias: {
      "Lunes":     ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Martes":    ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Miércoles": ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Jueves":    ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Viernes":   ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"]
    },
    aseo: null
  },

  "1° Bto. Gral. A": {
    periodos: [
      { hora: "12:45 – 1:45", etiqueta: "1° Período" },
      { hora: "1:45 – 2:00",  etiqueta: "RECESO", recreo: true },
      { hora: "2:00 – 2:45",  etiqueta: "2° Período" },
      { hora: "2:45 – 3:30",  etiqueta: "3° Período" },
      { hora: "3:30 – 3:55",  etiqueta: "RECESO", recreo: true },
      { hora: "3:55 – 4:40",  etiqueta: "4° Período" },
      { hora: "4:40 – 5:25",  etiqueta: "5° Período" }
    ],
    dias: {
      "Lunes":     ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Martes":    ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Miércoles": ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Jueves":    ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Viernes":   ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"]
    },
    aseo: null
  },

  "2° Bto. Gral. A": {
    periodos: [
      { hora: "12:45 – 1:45", etiqueta: "1° Período" },
      { hora: "1:45 – 2:00",  etiqueta: "RECESO", recreo: true },
      { hora: "2:00 – 2:45",  etiqueta: "2° Período" },
      { hora: "2:45 – 3:30",  etiqueta: "3° Período" },
      { hora: "3:30 – 3:55",  etiqueta: "RECESO", recreo: true },
      { hora: "3:55 – 4:40",  etiqueta: "4° Período" },
      { hora: "4:40 – 5:25",  etiqueta: "5° Período" }
    ],
    dias: {
      "Lunes":     ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Martes":    ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Miércoles": ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Jueves":    ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"],
      "Viernes":   ["Vacio", null, "Vacio", "Vacio", null, "Vacio", "Vacio"]
    },
    aseo: null
  }
};
