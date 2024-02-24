export const preguntasArrastrarYSoltar = (tituloLectura, numeroPregunta) => {
  switch (tituloLectura) {
    case "El Oso de anteojos":
      return obtenerPreguntasElOsoDeAnteojos(numeroPregunta);
    case "La Leyenda de Cantuña":
      return obtenerPreguntasLaLeyendaDeCantuña(numeroPregunta);
    case "El Gallo de la Catedral":
      return obtenerPreguntasElGalloDeLaCatedral(numeroPregunta);
    case "Guayaquil":
      return obtenerPreguntasGuayaquil(numeroPregunta);
    case "Los Otavalos":
      return obtenerPreguntasLosOtavalos(numeroPregunta);
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElOsoDeAnteojos = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Las manchas de pelo blanco alrededor de sus ojos",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Sus habilidades para escalar",
            esCorrecta: false,
          },
          { id: 3, list: 1, enunciado: "Su pelaje negro", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Su capacidad para nadar",
            esCorrecta: false,
          },
        ],
        preguntaActual: "El oso de anteojos debe su nombre a:",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Usa lentes", esCorrecta: true },
          {
            id: 2,
            list: 1,
            enunciado: "Vive en América del Sur",
            esCorrecta: false,
          },
          { id: 3, list: 1, enunciado: "Es buen nadador", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Pesca en ríos y lagos",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Aunque se llame 'oso de anteojos', el oso no:",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Dispersando las semillas de las plantas que consumen",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Comiendo insectos nocivos",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Cazando depredadores",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Construyendo madrigueras",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cómo contribuyen los osos de anteojos a la salud de los bosques ecuatorianos?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Regiones montañosas de los Andes",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "Selvas tropicales", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Desiertos", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Costas del Pacífico",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Dónde se encuentran principalmente los osos de anteojos en Ecuador?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "200 kilogramos", esCorrecta: true },
          { id: 2, list: 1, enunciado: "50 kilogramos", esCorrecta: false },
          { id: 3, list: 1, enunciado: "100 kilogramos", esCorrecta: false },
          { id: 4, list: 1, enunciado: "150 kilogramos", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál es el peso máximo que puede alcanzar un oso de anteojos?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Negro", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Blanco", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Café", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Gris", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál es el color principal del pelaje de los osos de anteojos?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Frutas, hojas e insectos",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Carne de otros animales",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Peces en ríos y lagos",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Raíces y tubérculos",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué tipo de alimentos buscan los osos de anteojos en su entorno?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Por la caza ilegal y la destrucción de su hábitat",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "Por enfermedades", esCorrecta: false },
          {
            id: 3,
            list: 1,
            enunciado: "Por cambios climáticos",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Por la falta de alimento",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Por qué el oso de anteojos es una especie en peligro de extinción en Ecuador?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Escalar", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Volar", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Nadar", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Correr a gran velocidad",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué actividad pueden realizar con facilidad los osos de anteojos en las montañas andinas?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Son grandes y peludos, con manchas de pelo blanco alrededor de sus ojos",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Son animales pequeños y esbeltos que pesan alrededor de 50 kilogramos",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Son los únicos osos que viven en América del Norte",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: " Pueden encontrarse principalmente en las llanuras costeras de Ecuador",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de las siguientes afirmaciones describe correctamente al oso de anteojos?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaLeyendaDeCantuña = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "No podía completar la obra a tiempo",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Quería obtener riquezas",
            esCorrecta: false,
          },
          { id: 3, list: 1, enunciado: "Buscaba venganza", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Quería demostrar su valentía",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Cantuña aceptó el trato con el Diablo porque:",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado:
              "Construir un atrio para la iglesia de San Francisco en Quito",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Construir una casa",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Pintar un mural en la iglesia",
            esCorrecta: false,
          },
          { id: 4, list: 1, enunciado: "Excavar un túnel", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál era la tarea asignada a Cantuña por los padres franciscanos?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Seis meses", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Un año", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Tres meses", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Un mes", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuánto tiempo le dieron a Cantuña para completar la construcción?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Su alma como pago",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "Los restos de Rumiñahui", esCorrecta: false },
          { id: 3, list: 1, enunciado: "La iglesia", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Los planos de Quito",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué pidió el Diablo a Cantuña a cambio de su ayuda en la construcción?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Escondiendo la última piedra necesaria",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Ocultando las herramientas de construcción",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Retrasando la construcción durante el día",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Haciendo un trato con otro ser sobrenatural",
            esCorrecta: false,
          },
        ],
        preguntaActual: "¿Cómo logró Cantuña engañar al Diablo?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Cantuña no le entregó su alma",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Cantuña completó la construcción a tiempo",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "La iglesia se derrumbó antes de ser terminada",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Los diablillos no pudieron completar la obra",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Por qué el Diablo se sintió burlado al final de la historia?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "No recibiría la pago alguno",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Castigos eternos para su alma",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Pérdida de sus habilidades de construcción",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Ser desterrado de la ciudad",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué consecuencia enfrentaría Cantuña si no cumplía con el trato?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Una gran cantidad de dinero",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Una estatua en su honor",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "La protección divina",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Un terreno para él y su familia",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál era la recompensa ofrecida a Cantuña por los padres franciscanos?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Comprendiendo que su alma enfrentaría castigos eternos",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Quería más tiempo para completar la obra",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Quiso renegociar el trato",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Buscaba la redención divina",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál era la razón por la que Cantuña decidió engañar al Diablo?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Proclamó que el trato había sido incumplido", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Invocó a los espíritus de la naturaleza para intervenir", esCorrecta: false },
          {
            id: 3,
            list: 1,
            enunciado: "Se escondió para evitar enfrentarse al Diablo",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Se arrepintió y aceptó su destino",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál fue la reacción de Cantuña cuando el Diablo se aproximó para reclamar su alma?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElGalloDeLaCatedral = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Mariana", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Su esposa", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Santa Catalina", esCorrecta: false },
          { id: 4, list: 1, enunciado: "La Catedral", esCorrecta: false },
        ],
        preguntaActual: "¿Quién era la dueña del corazón de Don Ramón?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "6:00 a. m.", esCorrecta: true },
          { id: 2, list: 1, enunciado: "8:00 a. m.", esCorrecta: false },
          { id: 3, list: 1, enunciado: "10:00 a. m.", esCorrecta: false },
          { id: 4, list: 1, enunciado: "7:00 a. m.", esCorrecta: false },
        ],
        preguntaActual: "¿A qué hora se levantaba Don Ramón diariamente?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado:
              "Bistec asado, papas, huevos fritos y chocolate caliente",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "Tacos y café", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Cereal y leche", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Ensalada de frutas",
            esCorrecta: false,
          },
        ],
        preguntaActual: "¿Qué incluía el desayuno de Don Ramón?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "La Chola", esCorrecta: true },
          { id: 2, list: 1, enunciado: "La Catedral", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Santa Catalina", esCorrecta: false },
          { id: 4, list: 1, enunciado: "La Mistela", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo se apodaba a Mariana?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "En la tienda de vinos de Mariana",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "En la biblioteca", esCorrecta: false },
          { id: 3, list: 1, enunciado: "En la Catedral", esCorrecta: false },
          { id: 4, list: 1, enunciado: "En su hacienda", esCorrecta: false },
        ],
        preguntaActual:
          "¿Dónde hacía una parada Don Ramón durante su caminata por las calles?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Efectos del alcohol",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "Tristeza", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Enojo", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Felicidad", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué efectos mostraba Don Ramón al regresar a casa después de beber mistelas?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Su superioridad sobre cualquier gallo",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Su amor por Mariana",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Su deseo de cambiar de vida",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Su admiración por la arquitectura",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué proclamaba Don Ramón frente a la iglesia de la Catedral?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Jugándole una broma con el gallo de la Catedral",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Haciéndole promesas",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Convenciéndolo con argumentos",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Obligándolo a dejar la ciudad",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cómo lograron alejar a Don Ramón de su hábito de las mistelas?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado:
              "Promesas de dejar las mistelas y abstenerse de insultar",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Que deje la lectura",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Que se case con Mariana",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Que compre más mistelas",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué pidió la voz que acompañaba al gallo a Don Ramón?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado:
              "Don Ramón cumplió sus promesas y se alejó de las mistelas",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Don Ramón nunca dejó las mistelas",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "La voz que acompañaba al gallo reveló su identidad",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado:
              "La pregunta sobre la espuela de fierro quedó sin respuesta",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cómo termina la historia de Don Ramón y el gallo de la Catedral?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasGuayaquil = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "1535", esCorrecta: true },
          { id: 2, list: 1, enunciado: "1492", esCorrecta: false },
          { id: 3, list: 1, enunciado: "1605", esCorrecta: false },
          { id: 4, list: 1, enunciado: "1650", esCorrecta: false },
        ],
        preguntaActual: "¿En qué año fue fundada Guayaquil?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Malecón 2000", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Malecón 1500", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Malecón 1000", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Malecón 2500", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál es el nombre del paseo marítimo a orillas del río Guayas?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Ceviche", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Pescado frito", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Seco de carne", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Arroz con menestra", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál es uno de los platos emblemáticos de Guayaquil que se menciona en la lectura?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Sebastián de Belalcázar", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Francisco Pizarro", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Hernán Cortés", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Simón Bolívar", esCorrecta: false },
        ],
        preguntaActual: "¿Quién fundó Guayaquil?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Guayas", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Amazonas", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Napo", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Coca", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál es el río que bordea Guayaquil?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Perla del Pacífico", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Ciudad de las Colinas", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Capital Marítima", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Puerta del Sol", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál es el apodo de Guayaquil?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Parques, museos y centros comerciales", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Campos de golf", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Pistas de esquí", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Granjas de animales", esCorrecta: false },
        ],
        preguntaActual: "¿Qué atracciones ofrece el Malecón 2000?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Ubicación estratégica y riqueza para la región", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Riqueza cultural", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Abundancia marítima", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Tradición histórica", esCorrecta: false },
        ],
        preguntaActual: '¿Por qué se da el apodo de "Perla del Pacífico" para Guayaquil?',
      };
    case 9:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Revitalización urbana", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Historia colonial", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Revolución industrial", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Época prehispánica", esCorrecta: false },
        ],
        preguntaActual: "¿Qué refleja el Malecón 2000 en Guayaquil?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Espíritu emprendedor y amabilidad", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Innovación tecnológica", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Tradiciones religiosas", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Celebraciones folklóricas", esCorrecta: false },
        ],
        preguntaActual: "¿Qué cualidad es conocida en Guayaquil y contribuye a la calidez única de la ciudad?",
      };
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLosOtavalos = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Anaco", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Fachalí", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Enagua", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Chumbi", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál es el nombre de la blusa tradicional usada por las mujeres otavaleñas?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Bordados detallados con diseños geométricos y florales", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Colores oscuros y lisos", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Tejidos a mano con lana de alpaca", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Sin decoración alguna", esCorrecta: false },
        ],
        preguntaActual: '¿Cómo se caracterizan los diseños de la blusa "anaco" de las mujeres otavaleñas?',
      };
    case 3:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Fachalí", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Anaco", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Enagua", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Chumbi", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál es el nombre del chal que las mujeres otavaleñas utilizan para cubrir sus hombros y espalda?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Enagua", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Anaco", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Fachalí", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Chumbi", esCorrecta: false },
        ],
        preguntaActual: "¿Qué prenda complementa el atuendo de las mujeres otavaleñas junto con la blusa y el chal?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Sombreros y bufandas", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Guantes y medias", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Gafas de sol y relojes", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Gafas de sol y relojes", esCorrecta: false },
        ],
        preguntaActual: "¿Qué tipo de accesorios suelen llevar los hombres otavaleños como parte de su vestimenta?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Colores vibrantes y patrones geométricos", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Colores oscuros y lisos", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Blanco y negro", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Tonos pastel y florales", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo se caracteriza la vestimenta de los hombres otavaleños en cuanto a colores y patrones?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Chumbi", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Anaco", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Fachalí", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Enagua", esCorrecta: false },
        ],
        preguntaActual: "¿Qué prenda es esencial en el atuendo de los hombres otavaleños?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Pulseras y collares", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Aretes y anillos", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Chales y guantes", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Gafas de sol y relojes", esCorrecta: false },
        ],
        preguntaActual: "¿Qué tipo de accesorios suelen incorporar las mujeres otavaleñas a su vestimenta tradicional?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Identidad cultural, afiliación étnica y posición social", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Moda contemporánea", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Influencia extranjera", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Tendencias de la temporada", esCorrecta: false },
        ],
        preguntaActual: "¿Qué mensaje transmite la vestimenta otavaleña más allá de su propósito estético?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Significados culturales específicos y la historia de la cultura otavaleña", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Estilos de moda actuales", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Gustos personales de los artesanos", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Preferencias estéticas de la juventud", esCorrecta: false },
        ],
        preguntaActual: "¿Qué transmiten los diseños y colores utilizados en las prendas tradicionales de la cultura otavaleña?",
      };
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasPredeterminadas = () => {
  return {
    opcionesRespuesta: [
      { enunciado: "Opción A (Predeterminada)", esCorrecta: false },
      { enunciado: "Opción B (Predeterminada)", esCorrecta: false },
      { enunciado: "Opción C (Predeterminada)", esCorrecta: false },
      { enunciado: "Opción D (Predeterminada)", esCorrecta: true },
    ],
    preguntaActual: "Pregunta predeterminada",
  };
};
