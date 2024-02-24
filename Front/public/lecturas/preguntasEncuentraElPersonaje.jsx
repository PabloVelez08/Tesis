export const preguntasEncuentraelpersonaje = (
  tituloLectura,
  numeroPregunta
) => {
  switch (tituloLectura) {
    case "Fauna de la Costa Ecuatoriana":
      return obtenerPreguntasFaunaDeLaCostaEcuatoriana(numeroPregunta);
    case "Fauna de la Sierra Ecuatoriana":
      return obtenerPreguntasFaunaDeLaSierraEcuatoriana(numeroPregunta);
    case "Fauna del Oriente Ecuatoriano":
      return obtenerPreguntasFaunaDelOrienteEcuatoriano(numeroPregunta);
    case "Fauna de las Islas Galápagos":
      return obtenerPreguntasFaunaDeLasIslasGalapagos(numeroPregunta);
    case "Frutos del Ecuador":
      return obtenerPreguntasFrutosDelEcuador(numeroPregunta);
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasFaunaDeLaCostaEcuatoriana = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Delfin Manchado",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/DelfinManchado.png",
            esCorrecta: true,
          },
          {
            enunciado: "Delfin Jorobado",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/DelfinJorobado.png",
            esCorrecta: false,
          },
          {
            enunciado: "Delfin Nariz de Botella",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/DelfinNarizDeBotella.png",
            esCorrecta: false,
          },
          {
            enunciado: "Delfin Rosado",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/DelfinRosado.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "En las aguas costeras, los delfines juguetones son una vista común. ¿Qué tipo de delfín es endémico de esta región?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Piquero Patas Azules",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PatasAzules.png",
            esCorrecta: true,
          },
          {
            enunciado: "Pelícano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Pelicano.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Gaviota",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Gaviota.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Albatro.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "Entre las aves costeras que se pueden avistar, ¿cuál es conocida por su pico largo y curvo?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Caiman.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaMarina.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Tortuga marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TortugaMarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "Serpiente de agua",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/SerpienteAgua.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de los siguientes reptiles es comúnmente avistado deslizándose entre los manglares?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaMarina.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Mono aullador",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/MonoAullador.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Nutria gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/NutriaGigante.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Caiman.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué animal, único en el mundo, se puede encontrar descansando al sol en las rocas volcánicas de la costa ecuatoriana?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Pulpo",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Pulpo.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Cangrejo ermitaño",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/CangrejoErmitaño.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Camarón Mantis",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/CamaronMantis.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Serpiente de agua",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/SerpienteAgua.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "Dentro de los manglares, ¿cuál de los siguientes animales es famoso por su camuflaje y su hábito de cambiar de color?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Ballena jorobada",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/BallenaJorobada.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Orca",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Orca.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Foca",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Foca.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Foca leopardo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/FocaLeopardo.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de los siguientes mamíferos marinos puede ser visto emergiendo para respirar aire fresco en las costas ecuatorianas?   ",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Garza blanca",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/GarzaBlanca.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Flamenco",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Flamenco.png",
            esCorrecta: false,
          },
          {
            enunciado: "Pelicano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Pelicano.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Albatro.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de las siguientes aves se caracteriza por tener un vuelo elegante sobre los esteros de los manglares? ",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaMarina.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Tortuga marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TortugaMarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Caiman.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Foca",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Foca.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué reptil de la costa ecuatoriana es conocido por su capacidad de sobrevivir tanto en agua salada como dulce? ",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Delfin nariz de botella",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/DelfinNarizDeBotella.png",
            esCorrecta: true,
          },
          {
            enunciado: "Foca leopardo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/FocaLeopardo.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Delfin manchado",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/DelfinManchado.png",
            esCorrecta: false,
          },
          {
            enunciado: "Nutria gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/NutriaGigante.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de los siguientes mamíferos marinos es famoso por su apariencia sonriente? ",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Piquero de patas azules",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PatasAzules.png",
            esCorrecta: true,
          },
          {
            enunciado: "Albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Albatro.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Pelícano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Pelicano.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Gaviota",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Gaviota.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué ave marina se sumerge en picada desde el aire para atrapar peces?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasFaunaDeLaSierraEcuatoriana = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Cóndor andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/CondorAndino.png",
            esCorrecta: true,
          },
          {
            enunciado: "Oso de anteojos",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoDeAnteojos.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Gaviota",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Gaviota.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Albatro.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál es el símbolo de la Sierra ecuatoriana y domina los cielos con su vuelo majestuoso?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Llama",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Llama.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TucanAndino.png",
            esCorrecta: false,
          },
          {
            enunciado: "Puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Puma.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Cabra",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Cabra.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          '¿Qué animal, conocido como "la reina de la montaña", es una vista común en los valles y mesetas de la Sierra?',
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Puma.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Oso de anteojos",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoDeAnteojos.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Caiman.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Oso grizzly",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoGrizzly.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál es el depredador supremo de la Sierra, conocido por su pelaje dorado y su mirada penetrante?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Oso de anteojos",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoDeAnteojos.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Oso grizzly",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoGrizzly.png",
            esCorrecta: false,
          },
          {
            enunciado: "Tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Tigrillo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Puma.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de los siguientes animales tiene un distintivo collar blanco en el pecho y es el único de su especie en Sudamérica?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TucanAndino.png",
            esCorrecta: true,
          },
          {
            enunciado: "Gaviota",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Gaviota.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Flamenco",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Flamenco.png",
            esCorrecta: false,
          },
          {
            enunciado: "Pavo real",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PavoReal.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué ave destaca por su pico largo y multicolor y se encuentra entre los árboles de la Sierra?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Cóndor andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/CondorAndino.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TucanAndino.png",
            esCorrecta: false,
          },
          {
            enunciado: "Piquero de patas azules",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PatasAzules.png",
            esCorrecta: false,
          },
          {
            enunciado: "Pelicano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Pelicano.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué ave rapaz domina los cielos de la Sierra ecuatoriana con su envergadura imponente y su plumaje negro?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Oso de anteojos",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoDeAnteojos.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Oso polar",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoPolar.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Oso perezoso",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoPerezoso.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso hormiguero",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoHormiguero.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál es el único oso que habita en Sudamérica y se encuentra en la Sierra ecuatoriana?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Puma.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Tigrillo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso hormiguero",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoHormiguero.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Caiman.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué felino acecha sigilosamente en las sombras de los bosques y las montañas de la Sierra?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Llama",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Llama.png",
            esCorrecta: true,
          },
          {
            enunciado: "Cabra",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Cabra.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Oso polar",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoPolar.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TucanAndino.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál es el animal que se ha adaptado perfectamente a la vida en las alturas de la Sierra ecuatoriana, con su pelaje lanudo y elegante andar?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Oso de anteojos",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoDeAnteojos.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Oso perezoso",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoPerezoso.png",
            esCorrecta: false,
          },
          {
            enunciado: "Puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Puma.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Llama",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Llama.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál es el animal que habita en Sudamérica y se encuentra en los bosques nublados de la Sierra ecuatoriana?",
      };
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasFaunaDelOrienteEcuatoriano = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Jaguar",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Jaguar.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Tigrillo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Puma.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Oso grizzly",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoGrizzly.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál es el mayor depredador de la selva amazónica y un símbolo de la belleza salvaje del oriente ecuatoriano?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Guacamayo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Guacamayo.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TucanAndino.png",
            esCorrecta: false,
          },
          {
            enunciado: "Pavo real",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PavoReal.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Pelicano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Pelicano.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué ave es reconocida por su plumaje colorido y su llamativo pico, y se alimenta principalmente de frutas en lo alto de los árboles?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Anaconda",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Anaconda.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Serpiente de agua",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/SerpienteAgua.png",
            esCorrecta: false,
          },
          {
            enunciado: "Serpiente cascabel",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/SerpienteCascabel.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Serpiente coral",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/SerpienteCoral.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál es una de las serpientes más grandes del mundo y se encuentra en los ríos y lagunas del oriente ecuatoriano?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Oso perezoso",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoPerezoso.png",
            esCorrecta: true,
          },
          {
            enunciado: "Mono aullador",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/MonoAullador.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Nutria gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/NutriaGigante.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Oso de anteojos",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoDeAnteojos.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué mamífero pasa la mayor parte de su vida suspendido entre las ramas y se alimenta de hojas en la selva amazónica?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Tigrillo.png",
            esCorrecta: true,
          },
          {
            enunciado: "Mono aullador",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/MonoAullador.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaMarina.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Mono araña",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/MonoAraña.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué pequeño felino, con su pelaje moteado y ojos brillantes, es un cazador ágil y sigiloso en la selva del oriente ecuatoriano?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Jaguar",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Jaguar.png",
            esCorrecta: true,
          },
          {
            enunciado: "Puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Puma.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Tigrillo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso hormiguero",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoHormiguero.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de los siguientes animales es conocido por su pelaje dorado y manchas negras, y es el mayor depredador de la región del oriente ecuatoriano?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Guacamayo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Guacamayo.png",
            esCorrecta: true,
          },
          {
            enunciado: "Albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Albatro.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Garza blanca",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/GarzaBlanca.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Piquero de patas azules",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PatasAzules.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué ave es emblemática de la región y se caracteriza por su llamativa coloración y su habilidad para imitar sonidos?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Anaconda",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Anaconda.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Caiman.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaMarina.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Serpiente de agua",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/SerpienteAgua.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de los siguientes reptiles es uno de los más grandes del mundo y habita en los cuerpos de agua del oriente ecuatoriano?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Oso perezoso",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoPerezoso.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tortuga marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TortugaMarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso hormiguero",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoHormiguero.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Pulpo",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Pulpo.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué mamífero es conocido por su lento movimiento y pasa la mayor parte de su vida en las copas de los árboles?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Tigrillo.png",
            esCorrecta: true,
          },
          {
            enunciado: "Mono aullador",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/MonoAullador.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Mono araña",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/MonoAraña.png",
            esCorrecta: false,
          },
          {
            enunciado: "Foca leopardo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/FocaLeopardo.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de los siguientes felinos es un pequeño depredador nativo de la región del oriente ecuatoriano?",
      };
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasFaunaDeLasIslasGalapagos = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Tortuga gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TortugaGigante.png",
            esCorrecta: true,
          },
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaMarina.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "León marino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/LeonMarino.png",
            esCorrecta: false,
          },
          {
            enunciado: "Piquero de patas azules",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PatasAzules.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál es el símbolo de las Islas Galápagos, conocido por sus caparazones imponentes y su paso pausado?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Piquero de patas azules",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PatasAzules.png",
            esCorrecta: true,
          },
          {
            enunciado: "Garza blanca",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/GarzaBlanca.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Albatro.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Pinzón de Darwin",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PinzonDeDarwin.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué ave marina de las Galápagos es conocida por sus patas de color particular y sus habilidades de pesca?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaMarina.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Iguana verde",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaVerde.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Iguana negra",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaNegra.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Lagartija",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Lagartija.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál es la única iguana del mundo que se ha adaptado para vivir y alimentarse en el océano?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "León marino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/LeonMarino.png",
            esCorrecta: true,
          },
          {
            enunciado: "Iguana verde",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaVerde.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Tortuga marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TortugaMarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "Foca leopardo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/FocaLeopardo.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué mamífero carismático se encuentra descansando bajo el sol tropical en las playas de las Galápagos?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Pinzón de Darwin",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PinzonDeDarwin.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Mono araña",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/MonoAraña.png",
            esCorrecta: false,
          },
          {
            enunciado: "Tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Tigrillo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso perezoso",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoPerezoso.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué grupo de animales se ha adaptado para vivir en diferentes nichos ecológicos en las distintas islas de las Galápagos?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado: "León marino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/LeonMarino.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tortuga gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TortugaGigante.png",
            esCorrecta: false,
          },
          {
            enunciado: "Iguana negra",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/IguanaNegra.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Camarón mantis",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/CamaronMantis.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de los siguientes animales es conocido por su comportamiento enérgico y sus expresiones faciales expresivas en las playas de las Galápagos?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Pinzón de Darwin",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PinzonDeDarwin.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Flamenco",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Flamenco.png",
            esCorrecta: false,
          },
          {
            enunciado: "Guacamayo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Guacamayo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TucanAndino.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué especie de aves de las Galápagos es emblemática por su diversidad y adaptaciones únicas en diferentes islas?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "León marino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/LeonMarino.png",
            esCorrecta: true,
          },
          {
            enunciado: "Puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Puma.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Jaguar",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Jaguar.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso polar",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/OsoPolar.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de las siguientes criaturas es conocida por ser el mayor depredador de las Galápagos?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Piquero de patas azules",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PatasAzules.png",
            esCorrecta: true,
          },
          {
            enunciado: "Guacamayo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Guacamayo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Pinzón de Darwin",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PinzonDeDarwin.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Pelicano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Pelicano.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué especie de aves marinas es conocida por realizar elaboradas danzas durante la temporada de apareamiento en las Galápagos?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Pinzón de Darwin",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/PinzonDeDarwin.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Lagartija",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Lagartija.png",
            esCorrecta: false,
          },
          {
            enunciado: "Foca",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Foca.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Tortuga gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/TortugaGigante.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de las siguientes criaturas es famosa por su diversidad y adaptaciones en el archipiélago, y ha sido objeto de estudio científico durante siglos?",
      };
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasFrutosDelEcuador = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Maracuyá",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Maracuya.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Mango",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Mango.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Papaya",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Papaya.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Kiwi",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Kiwi.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          '¿Cuál de los siguientes frutos típicos del Ecuador es conocido como "Fruta de la Pasión"?',
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Chirimoya",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Chirimoya.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Mandarina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Mandarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "Durazno",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Durazno.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Sandía",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Sandia.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          '¿Qué fruta, también llamada "la fruta más deliciosa del mundo", tiene una pulpa dulce y cremosa similar a una mezcla de plátano, piña y fresa?',
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Babaco",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Babaco.png",
            esCorrecta: true,
          },
          {
            enunciado: "Durazno",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Durazno.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Guayaba",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Guayaba.png",
            esCorrecta: false,
          },
          {
            enunciado: "Granadilla",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Granadilla.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de estos frutos es originario de los Andes ecuatorianos y tiene una pulpa suave y dulce, con un sabor que recuerda al de la piña y el melón?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Pitahaya",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Pitahaya.png",
            esCorrecta: true,
          },
          {
            enunciado: "Guanábana",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Guanabana.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Zapote",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Zapote.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Guayaba",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Guayaba.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cómo se conoce comúnmente a la fruta del dragón, una fruta exótica de sabor dulce y refrescante?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Cinchona",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Cinchona.png",
            esCorrecta: true,
          },
          {
            enunciado: "Plátano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Platano.png",
            esCorrecta: false,
          },
          {
            enunciado: "Maracuyá",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Maracuya.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Sandía",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Sandia.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de las siguientes plantas es conocida por ser la fuente de la quinina, un compuesto utilizado para tratar la malaria?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Aromo",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Aromo.png",
            esCorrecta: true,
          },
          {
            enunciado: "Granadilla",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Granadilla.png",
            esCorrecta: false,
          },
          {
            enunciado: "Babaco",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Babaco.png",
            esCorrecta: false,
          },
          {
            enunciado: "Coco",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Coco.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué árbol de hoja perenne se caracteriza por sus ramas extendidas y sus flores amarillas fragantes?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Maracuyá",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Maracuya.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Guayaba",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Guayaba.png",
            esCorrecta: false,
          },
          {
            enunciado: "Chirimoya",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Chirimoya.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Mango",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Mango.jpg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de estos frutos tiene una cáscara lisa y gruesa que puede variar en color desde el amarillo hasta el púrpura oscuro cuando está maduro?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Pitahaya",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Pitahaya.png",
            esCorrecta: true,
          },
          {
            enunciado: "Papaya",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Papaya.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Cinchona",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Cinchona.png",
            esCorrecta: false,
          },
          {
            enunciado: "Kiwi",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Kiwi.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de estas frutas tiene una forma ovalada con piel rosada o amarilla, cubierta de escamas?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Cinchona",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Cinchona.png",
            esCorrecta: true,
          },
          {
            enunciado: "Aromo",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Aromo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Maracuyá",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Maracuya.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Zapote",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Zapote.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál de estas plantas es conocida por sus hojas lanceoladas y sus flores blancas o rosadas en forma de racimos?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Chirimoya",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Chirimoya.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Mandarina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/Mandarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "Papaya",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Papaya.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Kiwi",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/Kiwi.png",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué fruta tropical, de forma irregular y piel verde cubierta de protuberancias, tiene una pulpa blanca y cremosa con un sabor similar a una mezcla de plátano, piña y fresa?",
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
