export const preguntasOrdenarEventos = (tituloLectura, numeroPregunta) => {
  switch (tituloLectura) {
    case "La Olla del Panecillo":
      return obtenerPreguntasLaOllaDelPanecillo(numeroPregunta);
    case "Tío Puma y Tío Zorro":
      return obtenerPreguntasTioPumaYTioZorro(numeroPregunta);
    case "El Anciano, El Niño y El Burro":
      return obtenerPreguntasElAncianoElNiñoYElBurro(numeroPregunta);
    case "La princesa triste de Santa Ana":
      return obtenerPreguntasLaPrincesaTristeDeSantaAna(numeroPregunta);
    case "La capa del estudiante":
      return obtenerPreguntasLaCapaDelEstudiante(numeroPregunta);
    default:
      // Opciones predeterminadas si el título de la lectura no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaOllaDelPanecillo = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "La mujer llevaba a su vaquita al Panecillo para alimentarla.",
          },
          {
            id: 2,
            enunciado:
              "Dejó a su vaquita cerca de una olla mientras recogía leña.",
          },
          {
            id: 3,
            enunciado:
              "La mujer recuperada del asombro, agradeció a la princesa y salió del palacio.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "La mujer descendió hasta el fondo de la olla.",
          },
          {
            id: 2,
            enunciado:
              "La mujer exclamó emocionada al ver a su vaca de regreso.",
          },
          { id: 3, enunciado: "La mujer regresó a su hogar con su vaquita." },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "La mujer llevó a su vaquita al Panecillo.",
          },
          {
            id: 2,
            enunciado: "La mujer descubrió que su vaquita había desaparecido.",
          },
          {
            id: 3,
            enunciado:
              "La mujer comenzó a buscar a su vaquita por los alrededores.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "La mujer dejó a su vaquita cerca de una olla mientras recogía leña.",
          },
          {
            id: 2,
            enunciado:
              "La mujer se sorprendió al llegar a la entrada de un majestuoso palacio.",
          },
          { id: 3, enunciado: "La mujer encontró a su vaquita de regreso." },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "La mujer observó en un trono lujoso a una bella princesa.",
          },
          {
            id: 2,
            enunciado:
              "La mujer agradeció a la princesa y salió del palacio.",
          },
          {
            id: 3,
            enunciado:
              "La mujer se llevó una gran sorpresa al ver a su vaquita de regreso.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "La mujer llevó a su vaquita al Panecillo.",
          },
          {
            id: 2,
            enunciado:
              "La princesa regaló a la mujer una mazorca y un ladrillo de oro.",
          },
          {
            id: 3,
            enunciado:
              "La mujer exclamó emocionada al ver a su vaca de regreso.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "La mujer llevó a su vaquita al Panecillo.",
          },
          {
            id: 2,
            enunciado:
              "La mujer observó en un trono lujoso a una bella princesa.",
          },
          {
            id: 3,
            enunciado:
              "La mujer y su vaquita regresaron a su hogar tras la inolvidable aventura.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "La mujer descendió hasta el fondo de la olla.",
          },
          {
            id: 2,
            enunciado: "La mujer observó en un trono lujoso a una bella princesa.",
          },
          {
            id: 3,
            enunciado:
              "La mujer se llevó una gran sorpresa al ver a su vaquita de regreso.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "La mujer observó en un trono lujoso a una bella princesa.",
          },
          {
            id: 2,
            enunciado: "La mujer encontró a su vaquita de regreso.",
          },
          { id: 3, enunciado: "La mujer regresó a su hogar con su vaquita." },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "La mujer, desesperada, descendió hasta el fondo de la olla.",
          },
          {
            id: 2,
            enunciado:
              "La mujer salió del palacio con sus inesperados obsequios.",
          },
          {
            id: 3,
            enunciado:
              "La mujer y su vaquita obtuvieron riqueza inesperada cuando volvieron a casa.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasTioPumaYTioZorro = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Tío Zorro recolectaba frutas para su desayuno.",
          },
          {
            id: 2,
            enunciado: "Tío Puma anunció que Tío Zorro sería su almuerzo.",
          },
          {
            id: 3,
            enunciado:
              "Tío Zorro propuso engañar a Tío Puma con los capibaras.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "Tío Zorro escuchó un sonido cercano que lo llenó de temor.",
          },
          {
            id: 2,
            enunciado:
              "Tío Zorro subió a la colina y arrastró una pesada piedra.",
          },
          {
            id: 3,
            enunciado: "Tío Puma se preparó para atrapar al capibara.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Tío Zorro su asusto al oír el sonido de Tío Puma.",
          },
          {
            id: 2,
            enunciado:
              "Tío Zorro propuso engañar a Tío Puma con los capibaras.",
          },
          { id: 3, enunciado: "Tío Puma aceptó la oferta de Tío Zorro." },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "Tío Zorro maquinó un plan al escuchar el sonido de Tío Puma.",
          },
          {
            id: 2,
            enunciado:
              "Tío Zorro observó unas grandes piedras en lo alto de una colina.",
          },
          {
            id: 3,
            enunciado:
              "Tío Puma quedó incapacitado para cazar durante varios días.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: 'Tío Puma dijo: "¡Te encontré, Tío Zorro!"',
          },
          {
            id: 2,
            enunciado: "ío Puma anunció que Tío Zorro sería su almuerzo.",
          },
          {
            id: 3,
            enunciado:
              "Tío Puma se llevó una gran sorpresa al ver la gran roca.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "Tío Zorro se encontraba recolectando frutas para su desayuno.",
          },
          {
            id: 2,
            enunciado: "Tío Zorro planeo una manera de engañar a Tío Puma.",
          },
          { id: 3, enunciado: "Tío Zorro llevó a Tío Puma a la colina." },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "Tío Zorro propuso engañar a Tío Puma con los capibaras.",
          },
          {
            id: 2,
            enunciado:
              "Tío Zorro subió a la colina y arrastró una pesada piedra.",
          },
          {
            id: 3,
            enunciado: "Tío Puma esperaba que Tío Zorro le lance un capibara.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Tío Puma anunció que Tío Zorro sería su almuerzo.",
          },
          {
            id: 2,
            enunciado:
              "Tío Zorro observó unas grandes piedras en lo alto de una colina.",
          },
          {
            id: 3,
            enunciado: "Tío Zorro llevó a Tío Puma una roca desde la colina.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: 'Tío Puma dijo: "¡Te encontré, Tío Zorro!"',
          },
          {
            id: 2,
            enunciado:
              "Tío Zorro subió a la colina y arrastró una pesada piedra.",
          },
          {
            id: 3,
            enunciado:
              "Tío Puma quedó incapacitado para cazar durante varios días.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: 'Tío Puma dijo: "¡Te encontré, Tío Zorro!"',
          },
          {
            id: 2,
            enunciado:
              "Tío Zorro propuso engañar a Tío Puma con los capibaras.",
          },
          {
            id: 3,
            enunciado:
              "Tío Puma esperaba que Tío Zorro le lance un capibara.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElAncianoElNiñoYElBurro = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "La gente comentó que caminaban a pie teniendo un burro.",
          },
          {
            id: 2,
            enunciado:
              "El anciano colocó al niño en el burro.",
          },
          {
            id: 3,
            enunciado: "El anciano y el niño montaron al burro juntos.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El anciano y el niño intercambiaron lugares.",
          },
          {
            id: 2,
            enunciado:
              "La gente murmuró que el anciano maltrataba al niño haciéndolo caminar bajo el sol.",
          },
          {
            id: 3,
            enunciado:
              "El anciano y el niño ataron las patas del burro y lo cargaron.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El anciano y el niño iban a pie.",
          },
          {
            id: 2,
            enunciado:
              "La gente comentó que el niño era desconsiderado al permitir que el anciano caminara.",
          },
          {
            id: 3,
            enunciado: "El anciano y el niño llegaron al cuarto pueblo.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El anciano y el niño llegaron al tercer pueblo.",
          },
          {
            id: 2,
            enunciado:
              "La gente comentó que el anciano era perezoso y egoísta.",
          },
          {
            id: 3,
            enunciado:
              "El anciano entendió que actuó sin sentido común y perdió su bien más preciado.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El anciano y el niño llegaron al segundo pueblo.",
          },
          {
            id: 2,
            enunciado:
              "Un campesino comentó que el niño no debería permitir que el anciano caminara.",
          },
          {
            id: 3,
            enunciado:
              "El anciano y el niño decidieron atar las patas del burro.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El anciano y el niño llegaron al primer pueblo.",
          },
          {
            id: 2,
            enunciado:
              "La gente comentó que el anciano y el niño sobrecargaban y agotaban al burro.",
          },
          {
            id: 3,
            enunciado:
              "El anciano y el niño ataron las patas del burro y lo cargaron sobre sus hombros.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "La multitud siguió a los viajeros después de cargar al burro sobre sus hombros.",
          },
          {
            id: 2,
            enunciado: "El anciano y el niño llegaron al puente.",
          },
          { id: 3, enunciado: "El burro, forcejeando, cayó al río." },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El anciano y el niño llegaron al cuarto pueblo.",
          },
          {
            id: 2,
            enunciado:
              "La gente comentó que el anciano y el niño debían cargar al burro.",
          },
          {
            id: 3,
            enunciado:
              "El anciano y el niño ataron las patas del burro y lo cargaron sobre sus hombros.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado:
              "La gente comentó que caminaban a pie teniendo un burro.",
          },
          {
            id: 2,
            enunciado: "El anciano y el niño decidieron intercambiar lugares.",
          },
          {
            id: 3,
            enunciado: "El anciano y el niño llegaron al tercer pueblo.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El anciano y el niño llegaron al primer pueblo.",
          },
          {
            id: 2,
            enunciado:
              "La gente comentó que el anciano y el niño sobrecargaban y agotaban al burro.",
          },
          {
            id: 3,
            enunciado:
              "El anciano y el niño ataron las patas del burro y lo cargaron sobre sus hombros.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaPrincesaTristeDeSantaAna = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "La joven princesa cae enferma.",
          },
          {
            id: 2,
            enunciado: "El rey se niega a renunciar a sus riquezas.",
          },
          {
            id: 3,
            enunciado: "La princesa ofrece dos opciones al explorador.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Un misterioso hombre afirma tener el remedio para la enfermedad.",
          },
          {
            id: 2,
            enunciado: "Los guardias del rey eliminan al brujo.",
          },
          {
            id: 3,
            enunciado: "Una maldición cae sobre el reino.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El reino queda sumido en la oscuridad.",
          },
          {
            id: 2,
            enunciado: "El explorador asciende el Cerro de Santa Ana.",
          },
          {
            id: 3,
            enunciado: "La princesa intenta devolver la luz al reino sin éxito.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El hechicero aparece ofreciendo un remedio para la enfermedad.",
          },
          {
            id: 2,
            enunciado: "El conquistador elige la ciudad llena de oro.",
          },
          {
            id: 3,
            enunciado: "La princesa lanza una maldición.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El rey convoca a brujos y curanderos para curar a su hija.",
          },
          {
            id: 2,
            enunciado: "El explorador encuentra a la princesa en el Cerro de Santa Ana.",
          },
          {
            id: 3,
            enunciado: "La princesa tiene la oportunidad de devolver la luz al reino.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "La princesa ofrece dos opciones al conquistador.",
          },
          {
            id: 2,
            enunciado: "El conquistador elige la ciudad dorada.",
          },
          {
            id: 3,
            enunciado: "El explorador reza a la Virgen de Santa Ana.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El rey ordena eliminar al brujo.",
          },
          {
            id: 2,
            enunciado: "La Virgen de Santa Ana es invocada por el explorador.",
          },
          {
            id: 3,
            enunciado: "El cerro toma el nombre de la virgen.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "La maldición cae sobre el reino después de la elección del rey.",
          },
          {
            id: 2,
            enunciado: "El explorador se encuentra con la princesa en el Cerro de Santa Ana.",
          },
          {
            id: 3,
            enunciado: "El conquistador decide quedarse con la ciudad dorada.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El hechicero afirma tener el remedio para la enfermedad.",
          },
          {
            id: 2,
            enunciado: "El rey se niega a renunciar a sus riquezas.",
          },
          {
            id: 3,
            enunciado: "Los guardias del rey eliminan al brujo.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "El explorador asciende el Cerro de Santa Ana.",
          },
          {
            id: 2,
            enunciado: "La princesa ofrece dos opciones al explorador.",
          },
          {
            id: 3,
            enunciado: "La maldición sobre el reino no fue levantada.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaCapaDelEstudiante = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Juan se siente preocupado por sus viejas botas antes de los exámenes.",
          },
          {
            id: 2,
            enunciado: "Los amigos sugieren a Juan empeñar su capa para comprar botas nuevas.",
          },
          {
            id: 3,
            enunciado: "Juan acepta ir al camposanto para clavar un clavo.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Juan acepta la propuesta de sus amigos y se compromete con la tarea.",
          },
          {
            id: 2,
            enunciado: "Juan clava un clavo en la tumba de su exnovia.",
          },
          {
            id: 3,
            enunciado: "Los amigos deciden entrar al cementerio al no ver regresar a Juan.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Juan siente la necesidad de volver con sus amigos después de clavar el clavo.",
          },
          {
            id: 2,
            enunciado: "Los amigos descubren a Juan muerto junto a la tumba.",
          },
          {
            id: 3,
            enunciado: "La capa de Juan estaba clavada a la tapa del ataúd",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Juan acepta la condición inusual de clavar un clavo en la tumba.",
          },
          {
            id: 2,
            enunciado: "Juan siente la necesidad de regresar con sus amigos después de completar la tarea.",
          },
          {
            id: 3,
            enunciado: "La capa de Juan está clavada en la tapa del ataúd al día siguiente.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Juan se siente preocupado por sus viejas botas.",
          },
          {
            id: 2,
            enunciado: "Los amigos sugieren a Juan empeñar su capa para comprar botas nuevas.",
          },
          {
            id: 3,
            enunciado: "Juan acepta ir al cementerio y clava un clavo en la tumba.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Juan clava un clavo en la tumba de su exnovia.",
          },
          {
            id: 2,
            enunciado: "Algo detuvo a Juan",
          },
          {
            id: 3,
            enunciado: "Los amigos deciden entrar al cementerio al no ver regresar a Juan.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Juan siente preocupado por sus botas.",
          },
          {
            id: 2,
            enunciado: "Los amigos de Juan le sugieren que empeñe su capa",
          },
          {
            id: 3,
            enunciado: "La capa de Juan está clavada en la tapa del ataúd al día siguiente.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Los amigos sugieren a Juan empeñar su capa para comprar botas nuevas.",
          },
          {
            id: 2,
            enunciado: "Juan acepta la propuesta de sus amigos y se compromete con la tarea.",
          },
          {
            id: 3,
            enunciado: "Juan yace sin vida junto a la tumba al día siguiente.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Juan se siente preocupado por sus viejas botas.",
          },
          {
            id: 2,
            enunciado: "Los amigos sugieren a Juan empeñar su capa para conseguir dinero.",
          },
          {
            id: 3,
            enunciado: "Juan acepta la condición inusual de clavar un clavo en la tumba.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            enunciado: "Juan acepta ir al camposanto para clavar un clavo.",
          },
          {
            id: 2,
            enunciado: "Juan siente la necesidad de volver con sus amigos después de completar la tarea.",
          },
          {
            id: 3,
            enunciado: "La capa de Juan está clavada en la tapa del ataúd.",
          },
        ],
        preguntaActual: "Ordena cronológicamente los siguientes eventos",
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
