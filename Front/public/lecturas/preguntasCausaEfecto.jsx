export const preguntasCausaEfecto = (tituloLectura, numeroPregunta) => {
  switch (tituloLectura) {
    case "La fuente de los talentos":
      return obtenerPreguntasLaFuenteDeLosTalentos(numeroPregunta);
    case "El espantapájaros solidario":
      return obtenerPreguntasElEspantapajarosSolidario(numeroPregunta);
    case "Los tres animalitos":
      return obtenerPreguntasLosTresAnimalitos(numeroPregunta);
    case "La lechera":
      return obtenerPreguntasLaLechera(numeroPregunta);
    case "Las dos vasijas":
      return obtenerPreguntasLasDosVasijas(numeroPregunta);
    default:
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaFuenteDeLosTalentos = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "El comportamiento orgulloso de aquellos con talentos",
            esCorrecta: true,
          },
          {
            enunciado: "La falta de cuidado de los habitantes",
            esCorrecta: false,
          },
          { enunciado: "La escasez de agua en la isla", esCorrecta: false },
          {
            enunciado: "La sequedad del Árbol de la Humildad",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál fue la causa principal de que la Fuente de Cien Talentos se secara?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Porque nunca llegaron a conocerlo",
            esCorrecta: true,
          },
          {
            enunciado: "Porque no querían compartir sus dones",
            esCorrecta: false,
          },
          {
            enunciado: "Debido a la falta de interés en perfeccionarlos",
            esCorrecta: false,
          },
          {
            enunciado: "A causa de la envidia que generaban",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Por qué algunos habitantes no poseian ningun talento?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "La actitud arrogante de aquellos con talentos",
            esCorrecta: true,
          },
          { enunciado: "La desaparición de los talentos", esCorrecta: false },
          {
            enunciado: "El comportamiento humilde de algunos",
            esCorrecta: false,
          },
          {
            enunciado: "La sequedad del Árbol de la Humildad",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué provocó la envidia entre los habitantes de la isla?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Aumento de la monotonía y el aburrimiento",
            esCorrecta: true,
          },
          {
            enunciado: "Incremento de la diversidad y la creatividad",
            esCorrecta: false,
          },
          {
            enunciado: "Mayor cooperación entre los habitantes",
            esCorrecta: false,
          },
          {
            enunciado: "Desarrollo de nuevos talentos de forma natural",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál fue el resultado de la desaparición de los talentos en la isla?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Experimentaron culpa y remordimiento",
            esCorrecta: true,
          },
          { enunciado: "Se sintieron aliviados", esCorrecta: false },
          {
            enunciado: "Celebraron la igualdad en la isla",
            esCorrecta: false,
          },
          { enunciado: "Ignoraron la situación", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo reaccionaron los habitantes cuando falleció el último individuo talentoso?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Aceptar las diferencias y no juzgar a los demás",
            esCorrecta: true,
          },
          { enunciado: "Deberían esconder sus talentos", esCorrecta: false },
          {
            enunciado: "Competir para destacar en la isla",
            esCorrecta: false,
          },
          { enunciado: "La humildad no tiene importancia", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál era la lección vital que aprendieron los habitantes tras la sequía de la fuente?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            enunciado: "El arrepentimiento de los habitantes",
            esCorrecta: true,
          },
          {
            enunciado: "La construcción de un nuevo pozo",
            esCorrecta: false,
          },
          {
            enunciado: "La búsqueda de talentos en otras islas",
            esCorrecta: false,
          },
          {
            enunciado: "Esperar lo suficiente para que la fuente se recargue",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué provocó que la Fuente de los Talentos volviera a fluir?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Volvieron a ser amorosas y respetuosas",
            esCorrecta: true,
          },
          { enunciado: "Se volvieron más orgullosos", esCorrecta: false },
          { enunciado: "Ignoraron las diferencias", esCorrecta: false },
          { enunciado: "Se volvieron más competitivos", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo cambiaron las relaciones entre los habitantes después de la lluvia de humildad?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Los padres y amigos de los nuevos talentosos",
            esCorrecta: true,
          },
          { enunciado: "Los ancianos de la isla", esCorrecta: false },
          { enunciado: "Los habitantes con talentos", esCorrecta: false },
          {
            enunciado: "Nadie, cada uno se enseñó a sí mismo",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Quiénes se encargaron de enseñar a los nuevos nacimientos a usar sus talentos de manera adecuada?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "Proveer agua a la Fuente de los Cien Talentos", esCorrecta: true },
          {
            enunciado: "Generar lluvia de humildad",
            esCorrecta: false,
          },
          { enunciado: "Secarse debido a la envidia", esCorrecta: false },
          {
            enunciado: "Desarrollar nuevos talentos en los habitantes",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál fue el papel del Árbol de la Humildad en la historia de la isla?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElEspantapajarosSolidario = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "La avaricia extrema del agricultor",
            esCorrecta: true,
          },
          {
            enunciado: "La abundancia de aves en el huerto",
            esCorrecta: false,
          },
          {
            enunciado: "La falta de métodos para proteger el cultivo",
            esCorrecta: false,
          },
          {
            enunciado: "La necesidad de decorar el huerto",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál fue la causa principal de la construcción del espantapájaros?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Cambio el corazón del agricultor", esCorrecta: true },
          { enunciado: "Aumento de la cosecha", esCorrecta: false },
          { enunciado: "Disminución de aves en el huerto", esCorrecta: false },
          { enunciado: "Pérdida de dientes de trigo", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué efecto tuvo la presencia del espantapájaros en el huerto?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "La necesidad de alimentar a sus crías",
            esCorrecta: true,
          },
          {
            enunciado: "La falta de alimento en el huerto",
            esCorrecta: false,
          },
          {
            enunciado: "Buscar comida para si mismo",
            esCorrecta: false,
          },
          { enunciado: "La generosidad del agricultor", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál fue la causa directa de que el pájaro se posara en un árbol y pidiera comida al espantapájaros?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Perdió la capacidad de entonar una canción",
            esCorrecta: true,
          },
          { enunciado: "Mejoró su eficacia", esCorrecta: false },
          {
            enunciado: "Lo hizo más amigable con los animales",
            esCorrecta: false,
          },
          { enunciado: "Aumentó su atractivo visual", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo afectó la generosidad del espantapájaros al cumplimiento de su función?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { enunciado: "La falta de boca y nariz", esCorrecta: true },
          {
            enunciado: "La falta de habilidades musicales",
            esCorrecta: false,
          },
          { enunciado: "La generosidad hacia el conejo", esCorrecta: false },
          { enunciado: "La falta técnica al silbar", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué causó que el espantapájaros perdiera la capacidad de entonar una canción?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado:
              "El deseo de prohibir a la gallina alimentar al agricultor.",
            esCorrecta: true,
          },
          {
            enunciado: "La falta de alimento para el gallo.",
            esCorrecta: false,
          },
          {
            enunciado: "La necesidad de proteger sus huevos.",
            esCorrecta: false,
          },
          { enunciado: "El miedo al espantapájaros.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue la causa del dilema del gallo madrugador?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "Le ofreció sus ojos de maíz.", esCorrecta: true },
          {
            enunciado: "Lo ahuyentó con sus brazos de caña.",
            esCorrecta: false,
          },
          {
            enunciado: "Ignoró la solicitud del gallo.",
            esCorrecta: false,
          },
          { enunciado: "Le ofreció sus granos de trigo.", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo resolvió el espantapájaros el dilema del gallo madrugador?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "La necesidad de abrigo del vagabundo.",
            esCorrecta: true,
          },
          { enunciado: "La generosidad del agricultor.", esCorrecta: false },
          { enunciado: "La degradación del espantapájaros.", esCorrecta: false },
          { enunciado: "La falta de ropa del trabajador.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue la causa de que el antiguo trabajador despedido recibiera el vestido del espantapájaros?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { enunciado: "Transformación del corazón del agricultor.", esCorrecta: true },
          { enunciado: "Aumento de la cosecha.", esCorrecta: false },
          { enunciado: "Pérdida de simpatía de los animales.", esCorrecta: false },
          { enunciado: "Desaparición del huerto.", esCorrecta: false },
        ],
        preguntaActual: "¿Qué efecto tuvo el acto del agricultor comerse el corazón de granada del espantapájaros?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "El huerto se convirtió en un lugar acogedor.", esCorrecta: true },
          { enunciado: "El huerto se volvió inhóspito.", esCorrecta: false },
          { enunciado: "El agricultor se volvió más avaro.", esCorrecta: false },
          { enunciado: "Los animales abandonaron el huerto.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto final del cambio en el corazón del agricultor?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLosTresAnimalitos = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { enunciado: "La busqueda de alimentos frescos y deliciosos", esCorrecta: true },
          { enunciado: "La escasez de alimentos en su hogar", esCorrecta: false },
          { enunciado: "La necesidad de encontrar nuevas amistades", esCorrecta: false },
          { enunciado: "La invitación de otros animales", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue la causa principal de la aventura al campo de Don Tortuga, Don Colibrí y Don Tigrillo?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Compartir bananos con sus amigos", esCorrecta: true },
          { enunciado: "Encontrar nuevos lugares para vivir", esCorrecta: false },
          { enunciado: "Alejarse de sus amigos", esCorrecta: false },
          { enunciado: "Desentenderse de la comida", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto de que Don Tortuga se encontrara con una plantación de bananos?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { enunciado: "Babano", esCorrecta: true },
          { enunciado: "Maracuyá", esCorrecta: false },
          { enunciado: "Aguacate", esCorrecta: false },
          { enunciado: "Peras", esCorrecta: false },
        ],
        preguntaActual: "¿Qué fruto encontro Don Trotuga?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { enunciado: "Compartir maracuyás con sus amigos", esCorrecta: true },
          { enunciado: "Deleitarse con una fruta", esCorrecta: false },
          { enunciado: "Ignorar las frutas tropicales", esCorrecta: false },
          { enunciado: "Alejarse del campo", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto de que Don Tigrillo descubriera un claro lleno de frutas tropicales?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { enunciado: "El gesto de generosidad entre ellos", esCorrecta: true },
          { enunciado: "La escasez de alimentos en la región", esCorrecta: false },
          { enunciado: "La necesidad de festejar un evento especial", esCorrecta: false },
          { enunciado: "La presencia de otros animales en la selva", esCorrecta: false },
        ],
        preguntaActual: "¿Qué causó que los tres amigos decidieran celebrar su amistad con un banquete?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { enunciado: "Experimentaron sorpresa y alegría", esCorrecta: true },
          { enunciado: "Decidieron no celebrar la amistad", esCorrecta: false },
          { enunciado: "Se distanciaron como amigos", esCorrecta: false },
          { enunciado: "Ignoraron los regalos", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto de que Don Tortuga, Don Colibrí y Don Tigrillo encontraran la comida completa y cuidadosamente colocada?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "La celebración de un banquete", esCorrecta: true },
          {
            enunciado: "La falta de comida en la selva",
            esCorrecta: false,
          },
          {
            enunciado: "La presencia de otros animales",
            esCorrecta: false,
          },
          { enunciado: "Encontrar la comida completa en sus madrigueras", esCorrecta: false },
        ],
        preguntaActual: "¿Qué causó que los tres amigos se percataran del hermoso gesto de generosidad entre ellos?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Fortalecieron aún más los lazos que los unían",
            esCorrecta: true,
          },
          { enunciado: "Debilitaron los lazos de amistad", esCorrecta: false },
          { enunciado: "Se alejaron de la selva", esCorrecta: false },
          { enunciado: "Ignoraron la diversidad natural de su hogar", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto de que los tres amigos celebraran su amistad en un festín en la exuberante selva de Ecuador?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { enunciado: "La emoción de compartir con amigos", esCorrecta: true },
          { enunciado: "La necesidad de impresionar a otros animales", esCorrecta: false },
          { enunciado: "La falta de interés en la comida regional", esCorrecta: false },
          { enunciado: "La tradición de celebrar con festines", esCorrecta: false },
        ],
        preguntaActual: "¿Qué causó que los tres amigos compartieran alimentos característicos de la región?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "Fortalecer aún más los lazos de amistad", esCorrecta: true },
          { enunciado: "Alejarse de la selva ecuatoriana", esCorrecta: false },
          { enunciado: "Celebrar festines más frecuentes", esCorrecta: false },
          { enunciado: "Ignorar la diversidad animal en su hogar", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto final del gesto de generosidad entre Don Tortuga, Don Colibrí y Don Tigrillo?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaLechera = (numeroPregunta) => {
    switch (numeroPregunta) {
      case 1:
        return {
          opcionesRespuesta: [
            { enunciado: "La solicitud de su madre, enferma y sin ánimo", esCorrecta: true },
            { enunciado: "La necesidad de comprar huevos para la familia", esCorrecta: false },
            { enunciado: "El deseo de la niña de explorar el mercado", esCorrecta: false },
            { enunciado: "La falta de otros miembros familiares para realizar la tarea", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue la causa principal de que la niña fuera al mercado con la leche?",
        };
      case 2:
        return {
          opcionesRespuesta: [
            { enunciado: "La niña recibió elogios y afecto de su madre", esCorrecta: true },
            { enunciado: "La madre se recuperó rápidamente", esCorrecta: false },
            { enunciado: "La niña decidió no cumplir la tarea", esCorrecta: false },
            { enunciado: "La niña cambió de opinión y se negó a ir al mercado", esCorrecta: false },
          ],
          preguntaActual: "¿Qué efecto tuvo la disposición y responsabilidad de la niña al recibir la tarea de su madre?",
        };
      case 3:
        return {
          opcionesRespuesta: [
            { enunciado: "El deseo de hacerse rica", esCorrecta: true },
            { enunciado: "El deseo de sorprender a su madre", esCorrecta: false },
            { enunciado: "La sugerencia de un amigo", esCorrecta: false },
            { enunciado: "La falta de ideas sobre cómo gastar el dinero", esCorrecta: false },
          ],
          preguntaActual: "¿Qué causó que la niña planificara comprar una docena de huevos con el dinero de la leche?",
        };
      case 4:
        return {
          opcionesRespuesta: [
            { enunciado: "Se distrajo de sus pensamientos", esCorrecta: true },
            { enunciado: "Se lastimó gravemente", esCorrecta: false },
            { enunciado: "Logró evitar caer", esCorrecta: false },
            { enunciado: "Continuó su camino sin problemas", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue la causa de que la niña tropezara con una piedra en el camino?",
        };
      case 5:
        return {
          opcionesRespuesta: [
            { enunciado: "Una piedra en el camino", esCorrecta: true },
            { enunciado: "La distracción de la niña", esCorrecta: false },
            { enunciado: "Un ataque de otro animal", esCorrecta: false },
            { enunciado: "La mala calidad del cántaro", esCorrecta: false },
          ],
          preguntaActual: "¿Qué causó la caída de la niña y la rotura del cántaro?",
        };
      case 6:
        return {
          opcionesRespuesta: [
            { enunciado: "Sus sueños se desvanecieron", esCorrecta: true },
            { enunciado: "Se volvió más ambiciosa", esCorrecta: false },
            { enunciado: "Encontró una solución alternativa", esCorrecta: false },
            { enunciado: "Decidió seguir adelante con su plan", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue el efecto de la caída de la niña en su planificación?",
        };
      case 7:
        return {
          opcionesRespuesta: [
            { enunciado: "La rotura del cántaro y la pérdida de la leche", esCorrecta: true },
            {
              enunciado: "La falta de interés en continuar con su plan",
              esCorrecta: false,
            },
            {
              enunciado: "La risa de otros al ver su caída",
              esCorrecta: false,
            },
            { enunciado: "La decisión de su madre de no vender la leche", esCorrecta: false },
          ],
          preguntaActual: "¿Qué causó que la niña lamentara la pérdida de los huevos, los pollitos, el lechón y la ternera?",
        };
      case 8:
        return {
          opcionesRespuesta: [
            {
              enunciado: "No contar con lo que no se tiene",
              esCorrecta: true,
            },
            { enunciado: "No soñar mientras caminamos", esCorrecta: false },
            { enunciado: "Vender todo al precio justo", esCorrecta: false },
            { enunciado: "Tener pollitos para venderlos", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue la valiosa lección aprendida?",
        };
      case 9:
        return {
          opcionesRespuesta: [
            { enunciado: "La consoló diciéndole que no se preocupara y que solo fue un accidente", esCorrecta: true },
            { enunciado: "La regaño por lo sucedido", esCorrecta: false },
            { enunciado: "Le perdonó", esCorrecta: false },
            { enunciado: "Le cobro lo que valia la leche derramada", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue el consejo de la madre ante lo sucedido?",
        };
      case 10:
        return {
          opcionesRespuesta: [
            { enunciado: "Reflexionó sobre la importancia de vivir el presente.", esCorrecta: true },
            { enunciado: "Decidió buscar otra fuente de ingresos.", esCorrecta: false },
            { enunciado: "La niña continuó siendo ambiciosa.", esCorrecta: false },
            { enunciado: "La niña abandonó la granja y se fue de casa.", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue el efecto final de la experiencia de la niña con la leche y el cántaro roto?",
        };
      default:
        return obtenerPreguntasPredeterminadas(numeroPregunta);
    }
  };

const obtenerPreguntasLasDosVasijas = (numeroPregunta) => {
    switch (numeroPregunta) {
      case 1:
        return {
          opcionesRespuesta: [
            { enunciado: "La necesidad de vender agua para ganar monedas", esCorrecta: true },
            { enunciado: "La falta de un burro de carga", esCorrecta: false },
            { enunciado: "El deseo de recoger agua para su hogar", esCorrecta: false },
            { enunciado: "La obligación de transportar agua en vasijas", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue la causa del trabajo del aguador en el oriente?",
        };
      case 2:
        return {
          opcionesRespuesta: [
            { enunciado: "Sentirse avergonzada por no cumplir adecuadamente su deber", esCorrecta: true },
            { enunciado: "Conservar el agua de manera eficiente", esCorrecta: false },
            { enunciado: "Contribuir a la creación de charcos en el camino", esCorrecta: false },
            { enunciado: "Mostrar orgullo por cumplir su función a la perfección", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál causaba las grietas en la vasija agrietada durante el transporte de agua?",
        };
      case 3:
        return {
          opcionesRespuesta: [
            { enunciado: "La incapacidad de cumplir su deber", esCorrecta: true },
            { enunciado: "La falta de agua en su interior", esCorrecta: false },
            { enunciado: "Las hermosas flores en el camino", esCorrecta: false },
            { enunciado: "Lo bien que realizaba su trabajo", esCorrecta: false },
          ],
          preguntaActual: "¿Qué causó que la vasija agrietada se sintiera avergonzada?",
        };
      case 4:
        return {
          opcionesRespuesta: [
            { enunciado: "Reconfortarse al comprender su contribución", esCorrecta: true },
            { enunciado: "Sentirse más avergonzada", esCorrecta: false },
            { enunciado: "Perder confianza en sí misma", esCorrecta: false },
            { enunciado: "Dejar de transportar agua", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue el efecto de la compasión y sabiduría del aguador en la vasija agrietada?",
        };
      case 5:
        return {
          opcionesRespuesta: [
            { enunciado: "La contribución a la creación de belleza", esCorrecta: true },
            { enunciado: "Las hermosas flores en el camino", esCorrecta: false },
            { enunciado: "La comparación con la otra vasija", esCorrecta: false },
            { enunciado: "La falta de agua en su interior", esCorrecta: false },
          ],
          preguntaActual: "¿Qué causó que la vasija agrietada se sintiera reconfortada?",
        };
      case 6:
        return {
          opcionesRespuesta: [
            { enunciado: "Sentirse inspirada para mejorar", esCorrecta: true },
            { enunciado: "Dejar de transportar agua", esCorrecta: false },
            { enunciado: "Perder confianza en sí misma", esCorrecta: false },
            { enunciado: "Ignorar su contribución", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue el efecto de la lección transmitida por el aguador a la vasija agrietada?",
        };
      case 7:
        return {
          opcionesRespuesta: [
            { enunciado: "Se sentia avergonzada por derramar el agua", esCorrecta: true },
            {
              enunciado: "La arrogancia de la otra vasija",
              esCorrecta: false,
            },
            {
              enunciado: "La comparación con el aguador",
              esCorrecta: false,
            },
            { enunciado: "La falta de empatía de la vasija", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue la causa para que el aguador mostrara las hermosas flores a la vasija agrietada?",
        };
      case 8:
        return {
          opcionesRespuesta: [
            {
              enunciado: "La creación de belleza en forma de hermosas flores.",
              esCorrecta: true,
            },
            { enunciado: "La pérdida total de agua durante el transporte.", esCorrecta: false },
            { enunciado: "La mejora en el rendimiento de la vasija agrietada.", esCorrecta: false },
            { enunciado: "El deterioro de la calidad del agua.", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue el efecto de las gotas de agua que se escapaban de la vasija agrietada en el camino?",
        };
      case 9:
        return {
          opcionesRespuesta: [
            { enunciado: "La lección transmitida por el aguador.", esCorrecta: true },
            { enunciado: "La pérdida total de agua durante el transporte.", esCorrecta: false },
            { enunciado: "La comparación con la otra vasija.", esCorrecta: false },
            { enunciado: "La falta de agua en su interior.", esCorrecta: false },
          ],
          preguntaActual: "¿Qué causó que la vasija agrietada comprendiera su contribución?",
        };
      case 10:
        return {
          opcionesRespuesta: [
            { enunciado: "Sentirse inspirada para mejorar.", esCorrecta: true },
            { enunciado: "Dejar de transportar agua.", esCorrecta: false },
            { enunciado: "Perder confianza en sí misma.", esCorrecta: false },
            { enunciado: "Ignorar su contribución.", esCorrecta: false },
          ],
          preguntaActual: "¿Cuál fue el efecto final de la historia en la vasija agrietada?",
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
