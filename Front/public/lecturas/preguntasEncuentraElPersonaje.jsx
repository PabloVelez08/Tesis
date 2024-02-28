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
            enunciado: "Delfin Manchado",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/delfinmanchado.png",
            esCorrecta: true,
          },
          {
            enunciado: "Delfin Jorobado",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/delfinjorobado.png",
            esCorrecta: false,
          },
          {
            enunciado: "Delfin Nariz de Botella",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/delfinnarizdebotella.png",
            esCorrecta: false,
          },
          {
            enunciado: "Delfin Rosado",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/delfinrosado.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/patasazules.png",
            esCorrecta: true,
          },
          {
            enunciado: "Pelícano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pelicano.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "gaviota",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/gaviota.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/albatro.jpg",
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
            imagen: "../../public/img/lecturas/encuentraelpersonaje/caiman.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/iguanamarina.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Tortuga marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tortugamarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "Serpiente de agua",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/serpienteagua.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/iguanamarina.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Mono aullador",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/monoaullador.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Nutria gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/nutriagigante.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/caiman.jpg",
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
            enunciado: "pulpo",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/pulpo.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Cangrejo ermitaño",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/cangrejoermitaño.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Camarón Mantis",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/camaronmantis.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Serpiente de agua",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/serpienteagua.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/ballenajorobada.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "orca",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/orca.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "foca",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/foca.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "foca leopardo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/focaLeopardo.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/garzablanca.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "flamenco",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/flamenco.png",
            esCorrecta: false,
          },
          {
            enunciado: "pelicano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pelicano.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/albatro.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/iguanamarina.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Tortuga marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tortugamarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/caiman.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "foca",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/foca.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/delfinnarizdebotella.png",
            esCorrecta: true,
          },
          {
            enunciado: "foca leopardo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/focaLeopardo.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Delfin manchado",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/delfinmanchado.png",
            esCorrecta: false,
          },
          {
            enunciado: "Nutria gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/nutriagigante.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/patasazules.png",
            esCorrecta: true,
          },
          {
            enunciado: "albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/albatro.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Pelícano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pelicano.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "gaviota",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/gaviota.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/condorandino.png",
            esCorrecta: true,
          },
          {
            enunciado: "Oso de anteojos",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osodeanteojos.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "gaviota",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/gaviota.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/albatro.jpg",
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
            enunciado: "llama",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/llama.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tucanandino.png",
            esCorrecta: false,
          },
          {
            enunciado: "puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/puma.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "cabra",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/cabra.jpeg",
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
            enunciado: "puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/puma.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Oso de anteojos",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osodeanteojos.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/caiman.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Oso grizzly",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osogrizzly.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/osodeanteojos.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Oso grizzly",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osogrizzly.png",
            esCorrecta: false,
          },
          {
            enunciado: "tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tigrillo.png",
            esCorrecta: false,
          },
          {
            enunciado: "puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/puma.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/tucanandino.png",
            esCorrecta: true,
          },
          {
            enunciado: "gaviota",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/gaviota.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "flamenco",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/flamenco.png",
            esCorrecta: false,
          },
          {
            enunciado: "Pavo real",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pavoreal.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/condorandino.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tucanandino.png",
            esCorrecta: false,
          },
          {
            enunciado: "Piquero de patas azules",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/patasazules.png",
            esCorrecta: false,
          },
          {
            enunciado: "pelicano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pelicano.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/osodeanteojos.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Oso polar",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osopolar.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Oso perezoso",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osoperezoso.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso hormiguero",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osohormiguero.jpg",
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
            enunciado: "puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/puma.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tigrillo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso hormiguero",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osohormiguero.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/caiman.jpg",
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
            enunciado: "llama",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/llama.png",
            esCorrecta: true,
          },
          {
            enunciado: "cabra",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/cabra.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Oso polar",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osopolar.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tucanandino.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/osodeanteojos.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Oso perezoso",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osoperezoso.png",
            esCorrecta: false,
          },
          {
            enunciado: "puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/puma.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "llama",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/llama.png",
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
            enunciado: "jaguar",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/jaguar.png",
            esCorrecta: true,
          },
          {
            enunciado: "tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tigrillo.png",
            esCorrecta: false,
          },
          {
            enunciado: "puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/puma.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Oso grizzly",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osogrizzly.png",
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
            enunciado: "guacamayo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/guacamayo.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tucanandino.png",
            esCorrecta: false,
          },
          {
            enunciado: "Pavo real",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pavoreal.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "pelicano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pelicano.jpg",
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
            enunciado: "anaconda",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/anaconda.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Serpiente de agua",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/serpienteagua.png",
            esCorrecta: false,
          },
          {
            enunciado: "Serpiente cascabel",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/serpientecascabel.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Serpiente coral",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/serpientecoral.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/osoperezoso.png",
            esCorrecta: true,
          },
          {
            enunciado: "Mono aullador",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/monoaullador.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Nutria gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/nutriagigante.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Oso de anteojos",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osodeanteojos.jpg",
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
            enunciado: "tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tigrillo.png",
            esCorrecta: true,
          },
          {
            enunciado: "Mono aullador",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/monoaullador.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/iguanamarina.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Mono araña",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/monoaraña.png",
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
            enunciado: "jaguar",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/jaguar.png",
            esCorrecta: true,
          },
          {
            enunciado: "puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/puma.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tigrillo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso hormiguero",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osohormiguero.jpg",
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
            enunciado: "guacamayo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/guacamayo.png",
            esCorrecta: true,
          },
          {
            enunciado: "albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/albatro.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Garza blanca",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/garzablanca.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Piquero de patas azules",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/patasazules.png",
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
            enunciado: "anaconda",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/anaconda.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Caimán",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/caiman.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/iguanamarina.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Serpiente de agua",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/serpienteagua.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/osoperezoso.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tortuga marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tortugamarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso hormiguero",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osohormiguero.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "pulpo",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/pulpo.jpg",
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
            enunciado: "tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tigrillo.png",
            esCorrecta: true,
          },
          {
            enunciado: "Mono aullador",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/monoaullador.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Mono araña",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/monoaraña.png",
            esCorrecta: false,
          },
          {
            enunciado: "foca leopardo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/focaLeopardo.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/tortugagigante.png",
            esCorrecta: true,
          },
          {
            enunciado: "Iguana marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/iguanamarina.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "León marino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/leonmarino.png",
            esCorrecta: false,
          },
          {
            enunciado: "Piquero de patas azules",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/patasazules.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/patasazules.png",
            esCorrecta: true,
          },
          {
            enunciado: "Garza blanca",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/garzablanca.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "albatro",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/albatro.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Pinzón de Darwin",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pinzondedarwin.jpeg",
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
              "../../public/img/lecturas/encuentraelpersonaje/iguanamarina.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "Iguana verde",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/iguanaverde.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Iguana negra",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/iguananegra.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "lagartija",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/lagartija.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/leonmarino.png",
            esCorrecta: true,
          },
          {
            enunciado: "Iguana verde",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/iguanaverde.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Tortuga marina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tortugamarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "foca leopardo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/focaLeopardo.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/pinzondedarwin.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Mono araña",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/monoaraña.png",
            esCorrecta: false,
          },
          {
            enunciado: "tigrillo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tigrillo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso perezoso",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osoperezoso.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/leonmarino.png",
            esCorrecta: true,
          },
          {
            enunciado: "Tortuga gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tortugagigante.png",
            esCorrecta: false,
          },
          {
            enunciado: "Iguana negra",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/iguananegra.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Camarón mantis",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/camaronmantis.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/pinzondedarwin.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "flamenco",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/flamenco.png",
            esCorrecta: false,
          },
          {
            enunciado: "guacamayo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/guacamayo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Tucán andino",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tucanandino.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/leonmarino.png",
            esCorrecta: true,
          },
          {
            enunciado: "puma",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/puma.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "jaguar",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/jaguar.png",
            esCorrecta: false,
          },
          {
            enunciado: "Oso polar",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/osopolar.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/patasazules.png",
            esCorrecta: true,
          },
          {
            enunciado: "guacamayo",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/guacamayo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Pinzón de Darwin",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pinzondedarwin.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "pelicano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pelicano.jpg",
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
              "../../public/img/lecturas/encuentraelpersonaje/pinzondedarwin.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "lagartija",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/lagartija.png",
            esCorrecta: false,
          },
          {
            enunciado: "foca",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/foca.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Tortuga gigante",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/tortugagigante.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/maracuya.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "mango",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/mango.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "papaya",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/papaya.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "kiwi",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/kiwi.png",
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
            enunciado: "chirimoya",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/chirimoya.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "mandarina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/mandarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "durazno",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/durazno.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Sandía",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/sandia.jpg",
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
            enunciado: "babaco",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/babaco.png",
            esCorrecta: true,
          },
          {
            enunciado: "durazno",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/durazno.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "guayaba",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/guayaba.png",
            esCorrecta: false,
          },
          {
            enunciado: "granadilla",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/granadilla.png",
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
            enunciado: "pitahaya",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pitahaya.png",
            esCorrecta: true,
          },
          {
            enunciado: "Guanábana",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/guanabana.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "zapote",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/zapote.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "guayaba",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/guayaba.png",
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
            enunciado: "cinchona",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/cinchona.png",
            esCorrecta: true,
          },
          {
            enunciado: "Plátano",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/platano.png",
            esCorrecta: false,
          },
          {
            enunciado: "Maracuyá",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/maracuya.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "Sandía",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/sandia.jpg",
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
            enunciado: "aromo",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/aromo.png",
            esCorrecta: true,
          },
          {
            enunciado: "granadilla",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/granadilla.png",
            esCorrecta: false,
          },
          {
            enunciado: "babaco",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/babaco.png",
            esCorrecta: false,
          },
          {
            enunciado: "coco",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/coco.png",
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
              "../../public/img/lecturas/encuentraelpersonaje/maracuya.jpg",
            esCorrecta: true,
          },
          {
            enunciado: "guayaba",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/guayaba.png",
            esCorrecta: false,
          },
          {
            enunciado: "chirimoya",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/chirimoya.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "mango",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/mango.jpg",
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
            enunciado: "pitahaya",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/pitahaya.png",
            esCorrecta: true,
          },
          {
            enunciado: "papaya",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/papaya.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "cinchona",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/cinchona.png",
            esCorrecta: false,
          },
          {
            enunciado: "kiwi",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/kiwi.png",
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
            enunciado: "cinchona",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/cinchona.png",
            esCorrecta: true,
          },
          {
            enunciado: "aromo",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/aromo.png",
            esCorrecta: false,
          },
          {
            enunciado: "Maracuyá",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/maracuya.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "zapote",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/zapote.jpeg",
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
            enunciado: "chirimoya",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/chirimoya.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "mandarina",
            imagen:
              "../../public/img/lecturas/encuentraelpersonaje/mandarina.png",
            esCorrecta: false,
          },
          {
            enunciado: "papaya",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/papaya.jpg",
            esCorrecta: false,
          },
          {
            enunciado: "kiwi",
            imagen: "../../public/img/lecturas/encuentraelpersonaje/kiwi.png",
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
