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
      titulo: "¡Bienvenidos al año escolar 2026!",
      texto: "El portal estudiantil COEDUCA ya está disponible. Aquí podrás consultar tus calificaciones, deméritos y horarios.",
      fecha: "02/02/2026"
    },
  ],

  // ----------------------------------------------------------
  // HERRAMIENTAS — Aparecen en la barra lateral
  // ----------------------------------------------------------
  herramientas: [
    { nombre: "Google Classroom",  url: "https://classroom.google.com",              icono: "🎓" },
    //{ nombre: "Khan Academy",      url: "https://es.khanacademy.org",                icono: "📐" },
    { nombre: "Diccionario RAE",   url: "https://dle.rae.es",                        icono: "📖" },
    { nombre: "YouTube Edu",       url: "https://www.youtube.com/education",         icono: "▶️" },
    { nombre: "Duolingo",          url: "https://www.duolingo.com",                  icono: "🦜" },
    //{ nombre: "Wolfram Alpha",     url: "https://www.wolframalpha.com",              icono: "🔢" },
    //{ nombre: "Biblioteca Digital",url: "https://www.cervantesvirtual.com",          icono: "📚" }
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
