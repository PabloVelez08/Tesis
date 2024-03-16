export const preguntasEncuentraElPersonaje = (
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
            nombre: "Delfin Manchado",
            imagen:
              "../img/lecturas/encuentraElPersonaje/DelfinManchado.png",
            esCorrecta: true,
          },
          {
            nombre: "Delfin Jorobado",
            imagen:
              "../img/lecturas/encuentraElPersonaje/DelfinJorobado.png",
            esCorrecta: false,
          },
          {
            nombre: "Delfin Nariz de Botella",
            imagen:
              "../img/lecturas/encuentraElPersonaje/DelfinNarizDeBotella.png",
            esCorrecta: false,
          },
          {
            nombre: "Delfin Rosado",
            imagen:
              "../img/lecturas/encuentraElPersonaje/DelfinRosado.png",
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
            nombre: "Piquero Patas Azules",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PatasAzules.png",
            esCorrecta: true,
          },
          {
            nombre: "Pelícano",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Pelicano.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Gaviota",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Gaviota.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Albatro",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Albatro.jpg",
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
            nombre: "Caimán",
            imagen: "../img/lecturas/encuentraElPersonaje/Caiman.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Iguana marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaMarina.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Tortuga marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TortugaMarina.png",
            esCorrecta: false,
          },
          {
            nombre: "Serpiente de agua",
            imagen:
              "../img/lecturas/encuentraElPersonaje/SerpienteAgua.png",
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
            nombre: "Iguana marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaMarina.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Mono aullador",
            imagen:
              "../img/lecturas/encuentraElPersonaje/MonoAullador.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Nutria gigante",
            imagen:
              "../img/lecturas/encuentraElPersonaje/NutriaGigante.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Caimán",
            imagen: "../img/lecturas/encuentraElPersonaje/Caiman.jpg",
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
            nombre: "Pulpo",
            imagen: "../img/lecturas/encuentraElPersonaje/Pulpo.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Cangrejo ermitaño",
            imagen:
              "../img/lecturas/encuentraElPersonaje/CangrejoErmitaño.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Camarón Mantis",
            imagen:
              "../img/lecturas/encuentraElPersonaje/CamaronMantis.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Serpiente de agua",
            imagen:
              "../img/lecturas/encuentraElPersonaje/SerpienteAgua.png",
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
            nombre: "Ballena jorobada",
            imagen:
              "../img/lecturas/encuentraElPersonaje/BallenaJorobada.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Orca",
            imagen: "../img/lecturas/encuentraElPersonaje/Orca.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Foca",
            imagen: "../img/lecturas/encuentraElPersonaje/Foca.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Foca leopardo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/FocaLeopardo.jpg",
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
            nombre: "Garza blanca",
            imagen:
              "../img/lecturas/encuentraElPersonaje/GarzaBlanca.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Flamenco",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Flamenco.png",
            esCorrecta: false,
          },
          {
            nombre: "Pelicano",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Pelicano.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Albatro",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Albatro.jpg",
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
            nombre: "Iguana marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaMarina.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Tortuga marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TortugaMarina.png",
            esCorrecta: false,
          },
          {
            nombre: "Caimán",
            imagen: "../img/lecturas/encuentraElPersonaje/Caiman.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Foca",
            imagen: "../img/lecturas/encuentraElPersonaje/Foca.jpg",
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
            nombre: "Delfin nariz de botella",
            imagen:
              "../img/lecturas/encuentraElPersonaje/DelfinNarizDeBotella.png",
            esCorrecta: true,
          },
          {
            nombre: "Foca leopardo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/FocaLeopardo.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Delfin manchado",
            imagen:
              "../img/lecturas/encuentraElPersonaje/DelfinManchado.png",
            esCorrecta: false,
          },
          {
            nombre: "Nutria gigante",
            imagen:
              "../img/lecturas/encuentraElPersonaje/NutriaGigante.jpg",
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
            nombre: "Piquero de patas azules",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PatasAzules.png",
            esCorrecta: true,
          },
          {
            nombre: "Albatro",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Albatro.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Pelícano",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Pelicano.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Gaviota",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Gaviota.jpg",
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
            nombre: "Cóndor andino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/CondorAndino.png",
            esCorrecta: true,
          },
          {
            nombre: "Oso de anteojos",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoDeAnteojos.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Gaviota",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Gaviota.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Albatro",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Albatro.jpg",
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
            nombre: "Llama",
            imagen: "../img/lecturas/encuentraElPersonaje/Llama.png",
            esCorrecta: true,
          },
          {
            nombre: "Tucán andino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TucanAndino.png",
            esCorrecta: false,
          },
          {
            nombre: "Puma",
            imagen: "../img/lecturas/encuentraElPersonaje/Puma.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Cabra",
            imagen: "../img/lecturas/encuentraElPersonaje/Cabra.jpeg",
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
            nombre: "Puma",
            imagen: "../img/lecturas/encuentraElPersonaje/Puma.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Oso de anteojos",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoDeAnteojos.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Caimán",
            imagen: "../img/lecturas/encuentraElPersonaje/Caiman.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Oso grizzly",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoGrizzly.png",
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
            nombre: "Oso de anteojos",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoDeAnteojos.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Oso grizzly",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoGrizzly.png",
            esCorrecta: false,
          },
          {
            nombre: "Tigrillo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Tigrillo.png",
            esCorrecta: false,
          },
          {
            nombre: "Puma",
            imagen: "../img/lecturas/encuentraElPersonaje/Puma.jpg",
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
            nombre: "Tucán andino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TucanAndino.png",
            esCorrecta: true,
          },
          {
            nombre: "Gaviota",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Gaviota.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Flamenco",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Flamenco.png",
            esCorrecta: false,
          },
          {
            nombre: "Pavo real",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PavoReal.jpg",
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
            nombre: "Cóndor andino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/CondorAndino.png",
            esCorrecta: true,
          },
          {
            nombre: "Tucán andino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TucanAndino.png",
            esCorrecta: false,
          },
          {
            nombre: "Piquero de patas azules",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PatasAzules.png",
            esCorrecta: false,
          },
          {
            nombre: "Pelicano",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Pelicano.jpg",
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
            nombre: "Oso de anteojos",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoDeAnteojos.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Oso polar",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoPolar.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Oso perezoso",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoPerezoso.png",
            esCorrecta: false,
          },
          {
            nombre: "Oso hormiguero",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoHormiguero.jpg",
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
            nombre: "Puma",
            imagen: "../img/lecturas/encuentraElPersonaje/Puma.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Tigrillo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Tigrillo.png",
            esCorrecta: false,
          },
          {
            nombre: "Oso hormiguero",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoHormiguero.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Caimán",
            imagen: "../img/lecturas/encuentraElPersonaje/Caiman.jpg",
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
            nombre: "Llama",
            imagen: "../img/lecturas/encuentraElPersonaje/Llama.png",
            esCorrecta: true,
          },
          {
            nombre: "Cabra",
            imagen: "../img/lecturas/encuentraElPersonaje/Cabra.jpeg",
            esCorrecta: false,
          },
          {
            nombre: "Oso polar",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoPolar.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Tucán andino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TucanAndino.png",
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
            nombre: "Oso de anteojos",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoDeAnteojos.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Oso perezoso",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoPerezoso.png",
            esCorrecta: false,
          },
          {
            nombre: "Puma",
            imagen: "../img/lecturas/encuentraElPersonaje/Puma.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Llama",
            imagen: "../img/lecturas/encuentraElPersonaje/Llama.png",
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
            nombre: "Jaguar",
            imagen: "../img/lecturas/encuentraElPersonaje/Jaguar.png",
            esCorrecta: true,
          },
          {
            nombre: "Tigrillo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Tigrillo.png",
            esCorrecta: false,
          },
          {
            nombre: "Puma",
            imagen: "../img/lecturas/encuentraElPersonaje/Puma.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Oso grizzly",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoGrizzly.png",
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
            nombre: "Guacamayo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Guacamayo.png",
            esCorrecta: true,
          },
          {
            nombre: "Tucán andino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TucanAndino.png",
            esCorrecta: false,
          },
          {
            nombre: "Pavo real",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PavoReal.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Pelicano",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Pelicano.jpg",
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
            nombre: "Anaconda",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Anaconda.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Serpiente de agua",
            imagen:
              "../img/lecturas/encuentraElPersonaje/SerpienteAgua.png",
            esCorrecta: false,
          },
          {
            nombre: "Serpiente cascabel",
            imagen:
              "../img/lecturas/encuentraElPersonaje/SerpienteCascabel.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Serpiente coral",
            imagen:
              "../img/lecturas/encuentraElPersonaje/SerpienteCoral.jpg",
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
            nombre: "Oso perezoso",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoPerezoso.png",
            esCorrecta: true,
          },
          {
            nombre: "Mono aullador",
            imagen:
              "../img/lecturas/encuentraElPersonaje/MonoAullador.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Nutria gigante",
            imagen:
              "../img/lecturas/encuentraElPersonaje/NutriaGigante.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Oso de anteojos",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoDeAnteojos.jpg",
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
            nombre: "Tigrillo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Tigrillo.png",
            esCorrecta: true,
          },
          {
            nombre: "Mono aullador",
            imagen:
              "../img/lecturas/encuentraElPersonaje/MonoAullador.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Iguana marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaMarina.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Mono araña",
            imagen:
              "../img/lecturas/encuentraElPersonaje/MonoAraña.png",
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
            nombre: "Jaguar",
            imagen: "../img/lecturas/encuentraElPersonaje/Jaguar.png",
            esCorrecta: true,
          },
          {
            nombre: "Puma",
            imagen: "../img/lecturas/encuentraElPersonaje/Puma.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Tigrillo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Tigrillo.png",
            esCorrecta: false,
          },
          {
            nombre: "Oso hormiguero",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoHormiguero.jpg",
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
            nombre: "Guacamayo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Guacamayo.png",
            esCorrecta: true,
          },
          {
            nombre: "Albatro",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Albatro.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Garza blanca",
            imagen:
              "../img/lecturas/encuentraElPersonaje/GarzaBlanca.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Piquero de patas azules",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PatasAzules.png",
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
            nombre: "Anaconda",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Anaconda.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Caimán",
            imagen: "../img/lecturas/encuentraElPersonaje/Caiman.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Iguana marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaMarina.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Serpiente de agua",
            imagen:
              "../img/lecturas/encuentraElPersonaje/SerpienteAgua.png",
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
            nombre: "Oso perezoso",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoPerezoso.png",
            esCorrecta: true,
          },
          {
            nombre: "Tortuga marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TortugaMarina.png",
            esCorrecta: false,
          },
          {
            nombre: "Oso hormiguero",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoHormiguero.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Pulpo",
            imagen: "../img/lecturas/encuentraElPersonaje/Pulpo.jpg",
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
            nombre: "Tigrillo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Tigrillo.png",
            esCorrecta: true,
          },
          {
            nombre: "Mono aullador",
            imagen:
              "../img/lecturas/encuentraElPersonaje/MonoAullador.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Mono araña",
            imagen:
              "../img/lecturas/encuentraElPersonaje/MonoAraña.png",
            esCorrecta: false,
          },
          {
            nombre: "Foca leopardo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/FocaLeopardo.jpg",
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
            nombre: "Tortuga gigante",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TortugaGigante.png",
            esCorrecta: true,
          },
          {
            nombre: "Iguana marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaMarina.jpg",
            esCorrecta: false,
          },
          {
            nombre: "León marino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/LeonMarino.png",
            esCorrecta: false,
          },
          {
            nombre: "Piquero de patas azules",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PatasAzules.png",
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
            nombre: "Piquero de patas azules",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PatasAzules.png",
            esCorrecta: true,
          },
          {
            nombre: "Garza blanca",
            imagen:
              "../img/lecturas/encuentraElPersonaje/GarzaBlanca.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Albatro",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Albatro.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Pinzón de Darwin",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PinzonDeDarwin.jpeg",
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
            nombre: "Iguana marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaMarina.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Iguana verde",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaVerde.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Iguana negra",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaNegra.jpeg",
            esCorrecta: false,
          },
          {
            nombre: "Lagartija",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Lagartija.png",
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
            nombre: "León marino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/LeonMarino.png",
            esCorrecta: true,
          },
          {
            nombre: "Iguana verde",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaVerde.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Tortuga marina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TortugaMarina.png",
            esCorrecta: false,
          },
          {
            nombre: "Foca leopardo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/FocaLeopardo.jpg",
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
            nombre: "Pinzón de Darwin",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PinzonDeDarwin.jpeg",
            esCorrecta: true,
          },
          {
            nombre: "Mono araña",
            imagen:
              "../img/lecturas/encuentraElPersonaje/MonoAraña.png",
            esCorrecta: false,
          },
          {
            nombre: "Tigrillo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Tigrillo.png",
            esCorrecta: false,
          },
          {
            nombre: "Oso perezoso",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoPerezoso.png",
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
            nombre: "León marino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/LeonMarino.png",
            esCorrecta: true,
          },
          {
            nombre: "Tortuga gigante",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TortugaGigante.png",
            esCorrecta: false,
          },
          {
            nombre: "Iguana negra",
            imagen:
              "../img/lecturas/encuentraElPersonaje/IguanaNegra.jpeg",
            esCorrecta: false,
          },
          {
            nombre: "Camarón mantis",
            imagen:
              "../img/lecturas/encuentraElPersonaje/CamaronMantis.jpg",
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
            nombre: "Pinzón de Darwin",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PinzonDeDarwin.jpeg",
            esCorrecta: true,
          },
          {
            nombre: "Flamenco",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Flamenco.png",
            esCorrecta: false,
          },
          {
            nombre: "Guacamayo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Guacamayo.png",
            esCorrecta: false,
          },
          {
            nombre: "Tucán andino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TucanAndino.png",
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
            nombre: "León marino",
            imagen:
              "../img/lecturas/encuentraElPersonaje/LeonMarino.png",
            esCorrecta: true,
          },
          {
            nombre: "Puma",
            imagen: "../img/lecturas/encuentraElPersonaje/Puma.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Jaguar",
            imagen: "../img/lecturas/encuentraElPersonaje/Jaguar.png",
            esCorrecta: false,
          },
          {
            nombre: "Oso polar",
            imagen:
              "../img/lecturas/encuentraElPersonaje/OsoPolar.jpg",
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
            nombre: "Piquero de patas azules",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PatasAzules.png",
            esCorrecta: true,
          },
          {
            nombre: "Guacamayo",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Guacamayo.png",
            esCorrecta: false,
          },
          {
            nombre: "Pinzón de Darwin",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PinzonDeDarwin.jpeg",
            esCorrecta: false,
          },
          {
            nombre: "Pelicano",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Pelicano.jpg",
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
            nombre: "Pinzón de Darwin",
            imagen:
              "../img/lecturas/encuentraElPersonaje/PinzonDeDarwin.jpeg",
            esCorrecta: true,
          },
          {
            nombre: "Lagartija",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Lagartija.png",
            esCorrecta: false,
          },
          {
            nombre: "Foca",
            imagen: "../img/lecturas/encuentraElPersonaje/Foca.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Tortuga gigante",
            imagen:
              "../img/lecturas/encuentraElPersonaje/TortugaGigante.png",
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
            nombre: "Maracuyá",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Maracuya.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Mango",
            imagen: "../img/lecturas/encuentraElPersonaje/Mango.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Papaya",
            imagen: "../img/lecturas/encuentraElPersonaje/Papaya.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Kiwi",
            imagen: "../img/lecturas/encuentraElPersonaje/Kiwi.png",
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
            nombre: "Chirimoya",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Chirimoya.jpeg",
            esCorrecta: true,
          },
          {
            nombre: "Mandarina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Mandarina.png",
            esCorrecta: false,
          },
          {
            nombre: "Durazno",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Durazno.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Sandía",
            imagen: "../img/lecturas/encuentraElPersonaje/Sandia.jpg",
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
            nombre: "Babaco",
            imagen: "../img/lecturas/encuentraElPersonaje/Babaco.png",
            esCorrecta: true,
          },
          {
            nombre: "Durazno",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Durazno.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Guayaba",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Guayaba.png",
            esCorrecta: false,
          },
          {
            nombre: "Granadilla",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Granadilla.png",
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
            nombre: "Pitahaya",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Pitahaya.png",
            esCorrecta: true,
          },
          {
            nombre: "Guanábana",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Guanabana.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Zapote",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Zapote.jpeg",
            esCorrecta: false,
          },
          {
            nombre: "Guayaba",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Guayaba.png",
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
            nombre: "Cinchona",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Cinchona.png",
            esCorrecta: true,
          },
          {
            nombre: "Plátano",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Platano.png",
            esCorrecta: false,
          },
          {
            nombre: "Maracuyá",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Maracuya.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Sandía",
            imagen: "../img/lecturas/encuentraElPersonaje/Sandia.jpg",
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
            nombre: "Aromo",
            imagen: "../img/lecturas/encuentraElPersonaje/Aromo.png",
            esCorrecta: true,
          },
          {
            nombre: "Granadilla",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Granadilla.png",
            esCorrecta: false,
          },
          {
            nombre: "Babaco",
            imagen: "../img/lecturas/encuentraElPersonaje/Babaco.png",
            esCorrecta: false,
          },
          {
            nombre: "Coco",
            imagen: "../img/lecturas/encuentraElPersonaje/Coco.png",
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
            nombre: "Maracuyá",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Maracuya.jpg",
            esCorrecta: true,
          },
          {
            nombre: "Guayaba",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Guayaba.png",
            esCorrecta: false,
          },
          {
            nombre: "Chirimoya",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Chirimoya.jpeg",
            esCorrecta: false,
          },
          {
            nombre: "Mango",
            imagen: "../img/lecturas/encuentraElPersonaje/Mango.jpg",
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
            nombre: "Pitahaya",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Pitahaya.png",
            esCorrecta: true,
          },
          {
            nombre: "Papaya",
            imagen: "../img/lecturas/encuentraElPersonaje/Papaya.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Cinchona",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Cinchona.png",
            esCorrecta: false,
          },
          {
            nombre: "Kiwi",
            imagen: "../img/lecturas/encuentraElPersonaje/Kiwi.png",
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
            nombre: "Cinchona",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Cinchona.png",
            esCorrecta: true,
          },
          {
            nombre: "Aromo",
            imagen: "../img/lecturas/encuentraElPersonaje/Aromo.png",
            esCorrecta: false,
          },
          {
            nombre: "Maracuyá",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Maracuya.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Zapote",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Zapote.jpeg",
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
            nombre: "Chirimoya",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Chirimoya.jpeg",
            esCorrecta: true,
          },
          {
            nombre: "Mandarina",
            imagen:
              "../img/lecturas/encuentraElPersonaje/Mandarina.png",
            esCorrecta: false,
          },
          {
            nombre: "Papaya",
            imagen: "../img/lecturas/encuentraElPersonaje/Papaya.jpg",
            esCorrecta: false,
          },
          {
            nombre: "Kiwi",
            imagen: "../img/lecturas/encuentraElPersonaje/Kiwi.png",
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
      { nombre: "Opción A (Predeterminada)", esCorrecta: false },
      { nombre: "Opción B (Predeterminada)", esCorrecta: false },
      { nombre: "Opción C (Predeterminada)", esCorrecta: false },
      { nombre: "Opción D (Predeterminada)", esCorrecta: true },
    ],
    preguntaActual: "Pregunta predeterminada",
  };
};