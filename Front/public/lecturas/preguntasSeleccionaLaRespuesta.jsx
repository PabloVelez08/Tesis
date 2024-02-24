export const preguntasSeleccionaLaRespuesta = (
  tituloLectura,
  numeroPregunta
) => {
  switch (tituloLectura) {
    case "El Puma y el Capibara":
      return obtenerPreguntasElPumaYElCapibara(numeroPregunta);
    case "El misterio del jarrón":
      return obtenerPreguntasElMisterioDelJarron(numeroPregunta);
    case "La casa 1028":
      return obtenerPreguntasLaCasa1028(numeroPregunta);
    case "La historia de Inti":
      return obtenerPreguntasLaHistoriaDeInti(numeroPregunta);
    case "La leyenda del Padre Almeida":
      return obtenerPreguntasLaLeyendaDelPadreAlmeida(numeroPregunta);
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElPumaYElCapibara = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { enunciado: "Puma", esCorrecta: true },
          { enunciado: "Cóndor", esCorrecta: false },
          { enunciado: "Águila", esCorrecta: false },
          { enunciado: "Jaguar", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál era el animal anciano que ya no podía cazar por su vejez?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Selva amazónica", esCorrecta: true },
          { enunciado: "Altas montañas", esCorrecta: false },
          { enunciado: "Costa ecuatoriana", esCorrecta: false },
          { enunciado: "Islas Galápagos", esCorrecta: false },
        ],
        preguntaActual:
          "¿Dónde se retiró el animal anciano para llevar a cabo su astucia?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { enunciado: "Se tumbó en el suelo a la entrada de una cueva", esCorrecta: true },
          { enunciado: "Se tumbó en el agua", esCorrecta: false },
          { enunciado: "Nadó en un río", esCorrecta: false },
          { enunciado: "Acechó desde la sombra", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué hizo el animal anciano para aparentar estar débil y cansado?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { enunciado: "Capibara", esCorrecta: true },
          { enunciado: "Cóndor", esCorrecta: false },
          { enunciado: "Tortuga", esCorrecta: false },
          { enunciado: "Iguana", esCorrecta: false },
        ],
        preguntaActual:
          "¿Quién fue el primero en sospechar de la trampa del animal anciano?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { enunciado: "Capibara", esCorrecta: true },
          { enunciado: "Oso hormiguero", esCorrecta: false },
          { enunciado: "Colibrí", esCorrecta: false },
          { enunciado: "Mono aullador", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué animal astuto evitó caer en la trampa del anciano?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { enunciado: "En la selva amazónica", esCorrecta: true },
          { enunciado: "En la altas montañas", esCorrecta: false },
          { enunciado: "En las Islas Galápagos", esCorrecta: false },
          { enunciado: "En la costa ecuatoriana", esCorrecta: false },
        ],
        preguntaActual: "¿Dónde se encontraba la cueva del anciano?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "Ninguna huella salía de la cueva", esCorrecta: true },
          {
            enunciado: "Huellas de animales saliendo de la cueva",
            esCorrecta: false,
          },
          {
            enunciado: "Huellas frescas de animales alrededor de la cueva",
            esCorrecta: false,
          },
          { enunciado: "Rastros de plumas en la entrada", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué observó el capibara que lo hizo sospechar de la trampa?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Manteniéndose a una distancia segura",
            esCorrecta: true,
          },
          { enunciado: "Entrando rápidamente en la cueva", esCorrecta: false },
          { enunciado: "Volando lejos del lugar", esCorrecta: false },
          { enunciado: "Camuflándose entre la vegetación", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo logró el capibara mantenerse a salvo?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { enunciado: "Era anciano", esCorrecta: true },
          { enunciado: "Estaba herido", esCorrecta: false },
          { enunciado: "No tenía amigos", esCorrecta: false },
          { enunciado: "Ya no quería cazar sus presas", esCorrecta: false },
        ],
        preguntaActual:
          "¿Por qué el Puma opto por la estrategia de fingir estar herido?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "Astucia e inteligencia", esCorrecta: true },
          { enunciado: "Fuerza física", esCorrecta: false },
          { enunciado: "Velocidad y agilidad", esCorrecta: false },
          { enunciado: "Resistencia y valentía", esCorrecta: false },
        ],
        preguntaActual: "¿Qué habilidad demostró el capibara al evitar la trampa?",
      };
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElMisterioDelJarron = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { enunciado: "Un jarrón de flores roto", esCorrecta: true },
          { enunciado: "Un manto de incertidumbre", esCorrecta: false },
          {
            enunciado: "Una tristeza en el rostro de Lucía",
            esCorrecta: false,
          },
          { enunciado: "Una pequeña escuela", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué descubrió la maestra Lucía al entrar a su aula un día?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Con paciencia y sabiduría", esCorrecta: true },
          { enunciado: "Con enfado y regaños", esCorrecta: false },
          { enunciado: "Ignorándola", esCorrecta: false },
          {
            enunciado: "Pidiendo a los estudiantes que lo reparen",
            esCorrecta: false,
          },
        ],
        preguntaActual: "¿Cómo abordó Lucía la situación del jarrón roto?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "La importancia de la responsabilidad",
            esCorrecta: true,
          },
          { enunciado: "La tristeza", esCorrecta: false },
          { enunciado: "La incertidumbre", esCorrecta: false },
          { enunciado: "La necesidad de juegos en el aula", esCorrecta: false },
        ],
        preguntaActual: "¿Qué destacaba Lucía entre sus estudiantes?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { enunciado: "Señalaban a otro como responsable", esCorrecta: true },
          { enunciado: "Se disculpaban inmediatamente", esCorrecta: false },
          { enunciado: "Reparaban el jarrón", esCorrecta: false },
          { enunciado: "Ignoraban a Lucía", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo reaccionaban los estudiantes ante la visita de Lucía a sus mesas?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { enunciado: "Tristeza", esCorrecta: true },
          { enunciado: "Honestidad", esCorrecta: false },
          { enunciado: "Valentía", esCorrecta: false },
          { enunciado: "Enfado", esCorrecta: false },
        ],
        preguntaActual: "¿Qué emoción se reflejaba en el rostro de Lucía?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { enunciado: "Haber roto el jarrón", esCorrecta: true },
          { enunciado: "Haber escondido el jarrón", esCorrecta: false },
          { enunciado: "No tener responsabilidad", esCorrecta: false },
          { enunciado: "No saber nada sobre el jarrón", esCorrecta: false },
        ],
        preguntaActual: "¿Qué reconocieron finalmente Laura, Marcos y Adela?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "Valentía y responsabilidad", esCorrecta: true },
          { enunciado: "Deshonestidad", esCorrecta: false },
          { enunciado: "Falta de valentía", esCorrecta: false },
          { enunciado: "Paciencia", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué demostraron Laura, Marcos y Adela al admitir la verdad?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          { enunciado: "Agradecida y orgullosa", esCorrecta: true },
          { enunciado: "Enfadada", esCorrecta: false },
          { enunciado: "Desilusionada", esCorrecta: false },
          { enunciado: "Triste y enojada", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo se sintió la maestra Lucía después de la confesión de los 3 estudiantes?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Valores de responsabilidad y valentía",
            esCorrecta: true,
          },
          { enunciado: "Deshonestidad", esCorrecta: false },
          { enunciado: "Juegos en el aula", esCorrecta: false },
          { enunciado: "Incertidumbre", esCorrecta: false },
        ],
        preguntaActual: "¿Qué fortalecieron Laura, Marcos y Adela en el aula?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "El jarrón y los valores en el aula", esCorrecta: true },
          { enunciado: "La tristeza de Lucía", esCorrecta: false },
          { enunciado: "La paciencia de Lucía", esCorrecta: false },
          {
            enunciado: "La desilusión de los demás estudiantes",
            esCorrecta: false,
          },
        ],
        preguntaActual: "¿Qué repararon los estudiantes al admitir la verdad?",
      };
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaCasa1028 = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { enunciado: "Bella Aurora", esCorrecta: true },
          { enunciado: "Aurora Bella", esCorrecta: false },
          { enunciado: "Aurora", esCorrecta: false },
          { enunciado: "Bella", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál es el nombre de la joven protagonista?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Corridas de toros", esCorrecta: true },
          { enunciado: "Desfile de carnaval", esCorrecta: false },
          { enunciado: "Concierto al aire libre", esCorrecta: false },
          { enunciado: "Feria gastronómica", esCorrecta: false },
        ],
        preguntaActual:
          "¿En qué tipo de evento familiar participa la familia de Bella Aurora?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { enunciado: "Se dirige hacia Bella Aurora", esCorrecta: true },
          { enunciado: "Saluda a la multitud", esCorrecta: false },
          { enunciado: "Salta la barrera protectora", esCorrecta: false },
          { enunciado: "Realiza acrobacias", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué hace el toro de manera inusual durante la corrida?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { enunciado: "Se desmaya", esCorrecta: true },
          { enunciado: "Grita y corre", esCorrecta: false },
          { enunciado: "Le hace frente al toro", esCorrecta: false },
          { enunciado: "Se ríe", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo reacciona Bella Aurora ante la mirada intensa del toro?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { enunciado: "1028", esCorrecta: true },
          { enunciado: "1082", esCorrecta: false },
          { enunciado: "2081", esCorrecta: false },
          { enunciado: "1820", esCorrecta: false },
        ],
        preguntaActual: "¿Qué número tenía la casa de Bella Aurora?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { enunciado: "Para curarla de su espanto", esCorrecta: true },
          { enunciado: "Para darle una lección", esCorrecta: false },
          { enunciado: "Para castigarla", esCorrecta: false },
          { enunciado: "Para mostrarle la ciudad", esCorrecta: false },
        ],
        preguntaActual:
          "¿Por qué los padres de Bella Aurora la llevan de regreso a casa?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "Desaparece misteriosamente", esCorrecta: true },
          {
            enunciado: "Persigue a otras personas",
            esCorrecta: false,
          },
          {
            enunciado: "Se queda en la arena",
            esCorrecta: false,
          },
          {
            enunciado: "Salta la barrera y corre por la ciudad",
            esCorrecta: false,
          },
        ],
        preguntaActual: "¿Qué hace el toro cuando muere Bella Aurora?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "A Bella Aurora muerta",
            esCorrecta: true,
          },
          { enunciado: "Al toro descansando", esCorrecta: false },
          { enunciado: "A Bella Aurora huyendo", esCorrecta: false },
          { enunciado: "A Bella Aurora dormida", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué encuentran los padres al llegar a la habitación de Bella Aurora?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Intenta huir pero está demasiado asustada",
            esCorrecta: true,
          },
          { enunciado: "Lo enfrenta valientemente", esCorrecta: false },
          {
            enunciado: "Les pide a sus padres que lo capturen",
            esCorrecta: false,
          },
          { enunciado: "Se desmaya nuevamente", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo reacciona Bella Aurora al ver al toro en su habitación?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "Se mudan a otra ciudad", esCorrecta: true },
          { enunciado: "Viajan por el mundo", esCorrecta: false },
          { enunciado: "Se quedan en la misma ciudad", esCorrecta: false },
          { enunciado: "La historia no lo menciona", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué hicieron los padres de Bella Aurora después de su muerte?",
      };
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaHistoriaDeInti = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { enunciado: "En las montañas de los Andes", esCorrecta: true },
          { enunciado: "En la selva amazónica", esCorrecta: false },
          { enunciado: "En las llanuras africanas", esCorrecta: false },
          { enunciado: "En la tundra ártica", esCorrecta: false },
        ],
        preguntaActual: "¿Dónde habitaba la pareja de cóndores en la historia?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Tener descendencia", esCorrecta: true },
          { enunciado: "Encontrar un hogar", esCorrecta: false },
          { enunciado: "Volar alto", esCorrecta: false },
          { enunciado: "Construir un nido", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué anhelaba la pareja de cóndores al inicio de la historia?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { enunciado: "Inti", esCorrecta: true },
          { enunciado: "Sol", esCorrecta: false },
          { enunciado: "Luna", esCorrecta: false },
          { enunciado: "Estrella", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo se llamaba el bebé cóndor que nació del huevo?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Con paciencia, responsabilidad y cariño",
            esCorrecta: true,
          },
          { enunciado: "Con impaciencia", esCorrecta: false },
          { enunciado: "De manera desinteresada", esCorrecta: false },
          { enunciado: "Sin prestarle atención", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo criaron a Inti sus padres?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Cuidó y alimentó a sus padres enfermos",
            esCorrecta: true,
          },
          { enunciado: "Buscó otro hogar", esCorrecta: false },
          { enunciado: "Voló lejos de casa", esCorrecta: false },
          { enunciado: "Ignoró la situación", esCorrecta: false },
        ],
        preguntaActual: "¿Qué hizo Inti cuando sus padres se enfermaron?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { enunciado: "Alimento en los altos cielos", esCorrecta: true },
          { enunciado: "Agua fresca", esCorrecta: false },
          { enunciado: "Ramas para el nido", esCorrecta: false },
          { enunciado: "Piedras para jugar", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué necesitó encontrar Inti para alimentar a sus padres?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "Se llenaron de felicidad", esCorrecta: true },
          {
            enunciado: "Se enojaron",
            esCorrecta: false,
          },
          {
            enunciado: "Se preocuparon",
            esCorrecta: false,
          },
          { enunciado: "No les importó", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo reaccionaron los padres de Inti al enterarse de la fiesta sorpresa?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Compartir alimentos",
            esCorrecta: true,
          },
          { enunciado: "Organizar un juego", esCorrecta: false },
          { enunciado: "Volar lejos", esCorrecta: false },
          { enunciado: "Ignorar la situación", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué decidieron hacer los cóndores en la fiesta sorpresa para expresar su gratitud a Inti?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { enunciado: "Ser valiente y amoroso", esCorrecta: true },
          { enunciado: "Ser egoísta", esCorrecta: false },
          { enunciado: "Ignorar las responsabilidades", esCorrecta: false },
          { enunciado: "No preocuparse por los demás", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál fue la lección principal que aprendió Inti de sus padres?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Apoyarse mutuamente y vivir unida y feliz",
            esCorrecta: true,
          },
          { enunciado: "Separarse", esCorrecta: false },
          { enunciado: "Volverse solitarios", esCorrecta: false },
          { enunciado: "Olvidarse de Inti", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál fue la decisión final de la familia cóndor en el día especial?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaLeyendaDelPadreAlmeida = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { enunciado: "Quito", esCorrecta: true },
          { enunciado: "Lima", esCorrecta: false },
          { enunciado: "Bogotá", esCorrecta: false },
          { enunciado: "Cusco", esCorrecta: false },
        ],
        preguntaActual:
          "¿En qué ciudad se encuentra el antiguo convento de San Diego?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Por su afición a las juergas", esCorrecta: true },
          { enunciado: "Por su devoción", esCorrecta: false },
          { enunciado: "Por su austeridad", esCorrecta: false },
          { enunciado: "Por su erudición", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo se caracterizaba el padre Almeida en la leyenda?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { enunciado: "Ventana pequeña", esCorrecta: true },
          { enunciado: "Ventana alta", esCorrecta: false },
          { enunciado: "Ventana secreta", esCorrecta: false },
          { enunciado: "Ventana del claustro", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué ventana frecuentaba el padre Almeida en el convento?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Una escultura de un Cristo recostado",
            esCorrecta: true,
          },
          { enunciado: "Una estatua de la Virgen María", esCorrecta: false },
          { enunciado: "Una escultura de un ángel", esCorrecta: false },
          { enunciado: "Una imagen de San Diego", esCorrecta: false },
        ],
        preguntaActual:
          "¿En qué se apoyaba el sacerdote para llegar a la ventana?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { enunciado: "¿Hasta cuándo, padre Almeida?", esCorrecta: true },
          { enunciado: "¿Cómo estás, padre Almeida?", esCorrecta: false },
          { enunciado: "¿Dónde has estado, padre Almeida?", esCorrecta: false },
          { enunciado: "¿Por qué, padre Almeida?", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué le preguntaba el Cristo al padre Almeida cada noche?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { enunciado: "Su afición a las juergas", esCorrecta: true },
          { enunciado: "Su devoción", esCorrecta: false },
          { enunciado: "Su destino", esCorrecta: false },
          { enunciado: "Su lugar de residencia", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué cambió definitivamente en la vida del padre Almeida?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "Su cuerpo en el ataúd", esCorrecta: true },
          {
            enunciado: "Una procesión religiosa",
            esCorrecta: false,
          },
          {
            enunciado: "Un desfile militar",
            esCorrecta: false,
          },
          { enunciado: "Un grupo de músicos", esCorrecta: false },
        ],
        preguntaActual: "¿Qué vio el padre Almeida en el cortejo fúnebre que lo sorprendió?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Con asombro",
            esCorrecta: true,
          },
          { enunciado: "Con alegría", esCorrecta: false },
          { enunciado: "Con tristeza", esCorrecta: false },
          { enunciado: "Con curiosidad", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo reaccionó el padre Almeida al ver el ataúd en la procesión?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { enunciado: "La borrachera", esCorrecta: true },
          { enunciado: "La risa", esCorrecta: false },
          { enunciado: "La vergüenza", esCorrecta: false },
          { enunciado: "La confusión", esCorrecta: false },
        ],
        preguntaActual: "¿Qué le quitó el susto al padre Almeida?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "Dejó las juergas", esCorrecta: true },
          { enunciado: "Se volvió más devoto", esCorrecta: false },
          { enunciado: "Dejó la vida religiosa", esCorrecta: false },
          { enunciado: "Abandonó la ciudad", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el cambio más significativo en la vida del padre Almeida después del encuentro con el cortejo fúnebre?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasPredeterminadas = () => {
  // Definir opciones predeterminadas si el título de la lectura no coincide
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
