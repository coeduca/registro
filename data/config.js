// ============================================================
// CONFIGURACIÓN GENERAL — COEDUCA Portal Estudiantil 2026
// ============================================================
// Edita este archivo para actualizar anuncios, herramientas,
// publicaciones, horarios y enlaces de calificaciones.
// ============================================================

window.COEDUCA_CONFIG = {

  // ----------------------------------------------------------
  // ENLACE DE CALIFICACIONES POR GRADO
  // Reemplaza '#' con el link de Google Sheets de cada grado
  // ----------------------------------------------------------
  calificaciones_urls: {
    "7° Grado A":       "#",
    "8° Grado A":       "#",
    "9° Grado A":       "#",
    "1° Bto. Gral. A":  "#",
    "2° Bto. Gral. A":  "#"
  },

  // ----------------------------------------------------------
  // ANUNCIOS — Aparecen en la barra lateral
  // ----------------------------------------------------------
  anuncios: [
    {
      titulo: "¡Bienvenidos al ciclo 2026!",
      texto: "El portal estudiantil COEDUCA ya está disponible. Aquí podrás consultar tus calificaciones, deméritos y horarios.",
      fecha: "15/01/2026"
    },
    {
      titulo: "Entrega de notas — 1er Período",
      texto: "Las calificaciones del primer período estarán disponibles a partir del 20 de marzo.",
      fecha: "10/03/2026"
    },
    {
      titulo: "Semana de exámenes",
      texto: "Los exámenes de primer período se realizarán del 16 al 20 de marzo. Prepárense con anticipación.",
      fecha: "02/03/2026"
    }
  ],

  // ----------------------------------------------------------
  // HERRAMIENTAS — Aparecen en la barra lateral
  // ----------------------------------------------------------
  herramientas: [
    { nombre: "Google Classroom",  url: "https://classroom.google.com",              icono: "🎓" },
    { nombre: "Khan Academy",      url: "https://es.khanacademy.org",                icono: "📐" },
    { nombre: "Diccionario RAE",   url: "https://dle.rae.es",                        icono: "📖" },
    { nombre: "YouTube Edu",       url: "https://www.youtube.com/education",         icono: "▶️" },
    { nombre: "Duolingo",          url: "https://www.duolingo.com",                  icono: "🦜" },
    { nombre: "Wolfram Alpha",     url: "https://www.wolframalpha.com",              icono: "🔢" },
    { nombre: "Biblioteca Digital",url: "https://www.cervantesvirtual.com",          icono: "📚" }
  ],

  // ----------------------------------------------------------
  // PUBLICACIONES DEL FEED
  // grado: "Todos" = todos los estudiantes
  // grado: "7° Grado A" = solo ese grado
  // imagen: URL de imagen (o null)
  // enlace: { url: "...", texto: "Ver más" } (o null)
  // ----------------------------------------------------------
  publicaciones: [
    {
      titulo: "📝 Tarea de Matemáticas — Semana del 23 al 27 de marzo",
      texto: "Resolver los ejercicios del capítulo 5, páginas 112-115. Entrega el lunes 30 de marzo.",
      fecha: "23/03/2026",
      grado: "7° Grado A",
      imagen: null,
      enlace: null
    },
    {
      titulo: "🏃 Evento Deportivo — Juegos Estudiantiles",
      texto: "Este viernes 28 de marzo se realizarán los juegos estudiantiles. Se suspenden clases a partir del mediodía. ¡Participa y apoya a tu equipo!",
      fecha: "22/03/2026",
      grado: "Todos",
      imagen: null,
      enlace: null
    },
    {
      titulo: "📌 Reunión de Padres de Familia",
      texto: "Se convoca a padres de familia a reunión el sábado 4 de abril a las 8:00 a.m. en las instalaciones del centro educativo.",
      fecha: "20/03/2026",
      grado: "Todos",
      imagen: null,
      enlace: null
    }
  ]

};

// ==============================================================
// HORARIOS POR GRADO
// Edita las materias de cada día y período según corresponda.
// Los periodos marcados con tipo:"recreo" muestran el receso.
// ==============================================================

window.HORARIOS = {

  "7° Grado A": {
    periodos: [
      { hora: "7:00 – 7:45",   etiqueta: "1° Período" },
      { hora: "7:45 – 8:30",   etiqueta: "2° Período" },
      { hora: "8:30 – 9:15",   etiqueta: "3° Período" },
      { hora: "9:15 – 10:00",  etiqueta: "4° Período" },
      { hora: "10:00 – 10:20", etiqueta: "RECREO",     recreo: true },
      { hora: "10:20 – 11:05", etiqueta: "5° Período" },
      { hora: "11:05 – 11:50", etiqueta: "6° Período" },
      { hora: "11:50 – 12:35", etiqueta: "7° Período" }
    ],
    dias: {
      "Lunes":      ["Matemáticas",    "Lenguaje",      "Ciencias Nat.",  "Ed. Física",    null, "Historia",      "Artística",     "Computación"],
      "Martes":     ["Lenguaje",       "Matemáticas",   "Inglés",         "C. Sociales",   null, "Ciencias Nat.", "Matemáticas",   "Orientación"],
      "Miércoles":  ["C. Sociales",    "Inglés",        "Matemáticas",    "Lenguaje",      null, "Ed. Física",    "Historia",      "Matemáticas"],
      "Jueves":     ["Inglés",         "Ciencias Nat.", "Lenguaje",       "Matemáticas",   null, "Artística",     "Computación",   "C. Sociales"],
      "Viernes":    ["Historia",       "C. Sociales",   "Ed. Física",     "Inglés",        null, "Lenguaje",      "Orientación",   "Ciencias Nat."]
    },
    aseo: {
      descripcion: "Rotación semanal de limpieza del aula",
      grupos: [
        { semana: "Semana 1",  encargados: ["Aguilero Bonilla, K.", "Alfaro Barahona, A.", "Barrera Rivera, T."] },
        { semana: "Semana 2",  encargados: ["Bonilla Díaz, L.", "Castillo Chirino, E.", "Chirino Alfaro, R."] },
        { semana: "Semana 3",  encargados: ["Chirino Corvera, R.", "Córdova Martínez, E.", "Corvera Anzora, A."] },
        { semana: "Semana 4",  encargados: ["Cruz Serrano, L.", "Flores Varela, V.", "Fuentes Ramos, A."] }
      ]
    }
  },

  "8° Grado A": {
    periodos: [
      { hora: "7:00 – 7:45",   etiqueta: "1° Período" },
      { hora: "7:45 – 8:30",   etiqueta: "2° Período" },
      { hora: "8:30 – 9:15",   etiqueta: "3° Período" },
      { hora: "9:15 – 10:00",  etiqueta: "4° Período" },
      { hora: "10:00 – 10:20", etiqueta: "RECREO",     recreo: true },
      { hora: "10:20 – 11:05", etiqueta: "5° Período" },
      { hora: "11:05 – 11:50", etiqueta: "6° Período" },
      { hora: "11:50 – 12:35", etiqueta: "7° Período" }
    ],
    dias: {
      "Lunes":      ["Matemáticas",    "Lenguaje",      "Ciencias Nat.",  "Inglés",        null, "Historia",      "Ed. Física",    "Computación"],
      "Martes":     ["Lenguaje",       "Matemáticas",   "C. Sociales",    "Ciencias Nat.", null, "Inglés",        "Matemáticas",   "Artística"],
      "Miércoles":  ["C. Sociales",    "Inglés",        "Matemáticas",    "Lenguaje",      null, "Ed. Física",    "Orientación",   "Matemáticas"],
      "Jueves":     ["Inglés",         "Ciencias Nat.", "Lenguaje",       "Matemáticas",   null, "Artística",     "Computación",   "C. Sociales"],
      "Viernes":    ["Historia",       "C. Sociales",   "Ed. Física",     "Inglés",        null, "Lenguaje",      "Orientación",   "Ciencias Nat."]
    },
    aseo: {
      descripcion: "Rotación semanal de limpieza del aula",
      grupos: [
        { semana: "Semana 1",  encargados: ["Ángel Martínez, G.", "Barrera Hernández, E.", "Barrera Hernández, K."] },
        { semana: "Semana 2",  encargados: ["Corvera Alfaro, G.", "Corvera De Paz, D.", "Corvera Flores, P."] },
        { semana: "Semana 3",  encargados: ["Corvera Fuentes, L.", "Duran Gómez, J.", "González Corvera, H."] },
        { semana: "Semana 4",  encargados: ["Henríquez Chirino, E.", "Manueles Pereira, K.", "Martínez Flores, G."] }
      ]
    }
  },

  "9° Grado A": {
    periodos: [
      { hora: "7:00 – 7:45",   etiqueta: "1° Período" },
      { hora: "7:45 – 8:30",   etiqueta: "2° Período" },
      { hora: "8:30 – 9:15",   etiqueta: "3° Período" },
      { hora: "9:15 – 10:00",  etiqueta: "4° Período" },
      { hora: "10:00 – 10:20", etiqueta: "RECREO",     recreo: true },
      { hora: "10:20 – 11:05", etiqueta: "5° Período" },
      { hora: "11:05 – 11:50", etiqueta: "6° Período" },
      { hora: "11:50 – 12:35", etiqueta: "7° Período" }
    ],
    dias: {
      "Lunes":      ["Matemáticas",    "Física",        "Química",        "Inglés",        null, "Historia",      "Ed. Física",    "Computación"],
      "Martes":     ["Lenguaje",       "Matemáticas",   "C. Sociales",    "Química",       null, "Inglés",        "Física",        "Artística"],
      "Miércoles":  ["C. Sociales",    "Inglés",        "Matemáticas",    "Lenguaje",      null, "Ed. Física",    "Orientación",   "Matemáticas"],
      "Jueves":     ["Inglés",         "Química",       "Lenguaje",       "Matemáticas",   null, "Artística",     "Computación",   "C. Sociales"],
      "Viernes":    ["Historia",       "C. Sociales",   "Ed. Física",     "Física",        null, "Lenguaje",      "Orientación",   "Química"]
    },
    aseo: {
      descripcion: "Rotación semanal de limpieza del aula",
      grupos: [
        { semana: "Semana 1",  encargados: ["Aguilero Bonilla, D.", "Alfaro Barahona, D.", "Angulo Ayala, D."] },
        { semana: "Semana 2",  encargados: ["Angulo Ayala, Y.", "Barrera Arévalo, M.", "Barrera Canjura, C."] },
        { semana: "Semana 3",  encargados: ["Campos Fuentes, O.", "Cañas Paredes, E.", "Córdova Ascencio, G."] },
        { semana: "Semana 4",  encargados: ["Córdova Chirino, I.", "Escamilla Vásquez, P.", "Escobar Aguilar, K."] }
      ]
    }
  },

  "1° Bto. Gral. A": {
    periodos: [
      { hora: "7:00 – 7:45",   etiqueta: "1° Período" },
      { hora: "7:45 – 8:30",   etiqueta: "2° Período" },
      { hora: "8:30 – 9:15",   etiqueta: "3° Período" },
      { hora: "9:15 – 10:00",  etiqueta: "4° Período" },
      { hora: "10:00 – 10:20", etiqueta: "RECREO",     recreo: true },
      { hora: "10:20 – 11:05", etiqueta: "5° Período" },
      { hora: "11:05 – 11:50", etiqueta: "6° Período" },
      { hora: "11:50 – 12:35", etiqueta: "7° Período" }
    ],
    dias: {
      "Lunes":      ["Matemáticas",    "Literatura",    "Biología",       "Inglés",        null, "Historia Univ.", "Ed. Física",   "Computación"],
      "Martes":     ["Literatura",     "Matemáticas",   "Filosofía",      "Biología",      null, "Inglés",         "Física",       "Arte"],
      "Miércoles":  ["Filosofía",      "Inglés",        "Matemáticas",    "Literatura",    null, "Ed. Física",     "Orientación",  "Matemáticas"],
      "Jueves":     ["Inglés",         "Biología",      "Literatura",     "Matemáticas",   null, "Arte",           "Computación",  "Filosofía"],
      "Viernes":    ["Historia Univ.", "Filosofía",     "Ed. Física",     "Física",        null, "Literatura",     "Orientación",  "Biología"]
    },
    aseo: {
      descripcion: "Rotación semanal de limpieza del aula",
      grupos: [
        { semana: "Semana 1",  encargados: ["Barahona Barrera, M.", "Barahona Chirino, J.", "Barrera Rivera, A."] },
        { semana: "Semana 2",  encargados: ["Bonilla Díaz, K.", "Chávez Castellanos, E.", "Córdova Garmendia, M."] },
        { semana: "Semana 3",  encargados: ["Cruz Serrano, R.", "Flores López, B.", "Fuentes Meléndez, D."] },
        { semana: "Semana 4",  encargados: ["Hernández Alfaro, L.", "Maravilla Esquivel, Y.", "Martínez Chirino, B."] }
      ]
    }
  },

  "2° Bto. Gral. A": {
    periodos: [
      { hora: "7:00 – 7:45",   etiqueta: "1° Período" },
      { hora: "7:45 – 8:30",   etiqueta: "2° Período" },
      { hora: "8:30 – 9:15",   etiqueta: "3° Período" },
      { hora: "9:15 – 10:00",  etiqueta: "4° Período" },
      { hora: "10:00 – 10:20", etiqueta: "RECREO",     recreo: true },
      { hora: "10:20 – 11:05", etiqueta: "5° Período" },
      { hora: "11:05 – 11:50", etiqueta: "6° Período" },
      { hora: "11:50 – 12:35", etiqueta: "7° Período" }
    ],
    dias: {
      "Lunes":      ["Cálculo",        "Literatura",    "Química Org.",   "Inglés",        null, "Historia Cont.", "Ed. Física",   "Seminario"],
      "Martes":     ["Literatura",     "Cálculo",       "Filosofía",      "Química Org.",  null, "Inglés",         "Física",       "Arte"],
      "Miércoles":  ["Filosofía",      "Inglés",        "Cálculo",        "Literatura",    null, "Ed. Física",     "Orientación",  "Cálculo"],
      "Jueves":     ["Inglés",         "Química Org.",  "Literatura",     "Cálculo",       null, "Arte",           "Seminario",    "Filosofía"],
      "Viernes":    ["Historia Cont.", "Filosofía",     "Ed. Física",     "Física",        null, "Literatura",     "Orientación",  "Química Org."]
    },
    aseo: {
      descripcion: "Rotación semanal de limpieza del aula",
      grupos: [
        { semana: "Semana 1",  encargados: ["Barrera Barahona, J.", "Barrera Hernández, A.", "Barrera Rodríguez, M."] },
        { semana: "Semana 2",  encargados: ["Berrios Mejía, E.", "Cañas Chávez, A.", "Córdova Ascencio, M."] },
        { semana: "Semana 3",  encargados: ["Cornejo Santana, O.", "Hernández Chávez, C.", "Hernández Martínez, J."] },
        { semana: "Semana 4",  encargados: ["López Ramos, Y.", "Martínez Barrera, C.", "Mejía Angulo, W."] }
      ]
    }
  }

};
