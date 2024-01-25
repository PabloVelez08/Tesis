import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import Sonido from "./sonido";
import axios from "axios";
import useSound from "use-sound";
import SonidoInsigniaConseguida from "../../public/audios/InsigniaConseguida.mp3";
import SonidoAplausos from "../../public/audios/Aplausos.mp3";
import { preguntasArrastrarYSoltar } from "../../public/lecturas/preguntasArrastrarYSoltar";
import { mezclasOpciones } from "./mezclarOpciones";
import { generarNumeroAleatorio } from "./generarNumeroAleatorio";
import informacionLecturas from "../../public/lecturas/informacionLecturas";

import "../css/arrastrarYSoltar.css";

const ArrastrarYSoltar = () => {
  const navigate = useNavigate();
  const [pregunta, setPregunta] = useState("");
  const [opcionesRespuesta, setOpcionesRespuesta] = useState([]);
  const [opcion1] = useState(generarNumeroAleatorio(1, 10));
  var contadorPregunta = 1;
  var contadorPreguntasCorrectas = 0;
  const [tituloLectura, settituloLectura] = useState("");
  let urlInsigniaEncontrada = null;
  const [reproducirInsigniaConseguida] = useSound(SonidoInsigniaConseguida);
  const [reproducirAplausos] = useSound(SonidoAplausos);

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    // Obtengo las opciones de respuesta y la pregunta actual
    console.log("opcion 1:", opcion1);
    const { opcionesRespuesta: opciones, preguntaActual } =
      preguntasArrastrarYSoltar(
        sessionStorage.getItem("tituloLectura"),
        opcion1
      );

    // Actualiza los estados locales con los datos obtenidos
    setPregunta(preguntaActual);
    setOpcionesRespuesta(mezclasOpciones(opciones));
    settituloLectura(sessionStorage.getItem("tituloLectura"));
  }, [navigate, opcion1]);

  const obtenerURLInsignia = (tituloLectura) => {
    informacionLecturas[sessionStorage.getItem("tipoJuego")]?.forEach(
      (element) => {
        if (element.tituloLectura === tituloLectura) {
          urlInsigniaEncontrada = element.insignia;
        }
      }
    );
    return urlInsigniaEncontrada;
  };

  const cargarPreguntas = (numeroDePregunta) => {
    // Obtengo las opciones de respuesta y la pregunta actual
    const { opcionesRespuesta: opciones, preguntaActual } =
      preguntasArrastrarYSoltar(
        sessionStorage.getItem("tituloLectura"),
        numeroDePregunta
      );

    // Actualiza los estados locales con los datos obtenidos
    setPregunta(preguntaActual);
    setOpcionesRespuesta(mezclasOpciones(opciones));
  };

  const validarPreguntaNoRepetida = () => {
    var opcion2;
    var opcion3;
    var opcion4;
    var opcion5;

    var variableComparacion = generarNumeroAleatorio(1, 10);
    console.log("variable comparacion:", variableComparacion);

    if (sessionStorage.getItem("numeroPregunta") == 2) {
      while (variableComparacion == opcion1) {
        variableComparacion = generarNumeroAleatorio(1, 10);
        console.log(
          "variable comparacion dentro del while opcion2:",
          variableComparacion
        );
      }
      opcion2 = variableComparacion;
      console.log("opcion 2 fuera de while:", opcion2);
      sessionStorage.setItem("opcion2", opcion2);
      cargarPreguntas(opcion2);
    } else if (sessionStorage.getItem("numeroPregunta") == 3) {
      while (
        variableComparacion == opcion1 ||
        variableComparacion == sessionStorage.getItem("opcion2")
      ) {
        variableComparacion = generarNumeroAleatorio(1, 10);
        console.log(
          "variable comparacion dentro del while opcion3:",
          variableComparacion
        );
      }
      opcion3 = variableComparacion;
      console.log("opcion 3 fuera de while:", opcion3);
      sessionStorage.setItem("opcion3", opcion3);
      cargarPreguntas(opcion3);
    } else if (sessionStorage.getItem("numeroPregunta") == 4) {
      while (
        variableComparacion == opcion1 ||
        variableComparacion == sessionStorage.getItem("opcion2") ||
        variableComparacion == sessionStorage.getItem("opcion3")
      ) {
        variableComparacion = generarNumeroAleatorio(1, 10);
        console.log(
          "variable comparacion dentro del while opcion4:",
          variableComparacion
        );
      }
      opcion4 = variableComparacion;
      console.log("opcion 4 fuera del while:", opcion4);
      sessionStorage.setItem("opcion4", opcion4);
      cargarPreguntas(opcion4);
    } else if (sessionStorage.getItem("numeroPregunta") == 5) {
      while (
        variableComparacion == opcion1 ||
        variableComparacion == sessionStorage.getItem("opcion2") ||
        variableComparacion == sessionStorage.getItem("opcion3") ||
        variableComparacion == sessionStorage.getItem("opcion4")
      ) {
        variableComparacion = generarNumeroAleatorio(1, 10);
        console.log(
          "variable comparacion dentro del while opcion5:",
          variableComparacion
        );
      }
      opcion5 = variableComparacion;
      console.log("opcion 5 fuera del while:", opcion5);
      cargarPreguntas(opcion5);
    } else {
      ("que paso");
    }
  };

  const getList = (list) => {
    return opcionesRespuesta.filter((item) => item.list === list);
  };

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData("itemID", item.id);
    // console.log("Elemento arrastrado - ID:", item.id);
  };

  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = opcionesRespuesta.find((item) => item.id == itemID);
    // Verificar si ya hay un elemento en la columna 2
    const column2Tasks = getList(2);

    if (column2Tasks.length === 0) {
      // Si la columna 2 está vacía, simplemente mover el elemento
      item.list = list;
    } else {
      // Intercambiar posiciones si la columna 2 ya tiene un elemento
      const existingItem = column2Tasks[0];

      // Intercambiar elementos entre las columnas
      existingItem.list = item.list;
      item.list = list;
    }

    // Actualizar el estado con la nueva ubicación de los elementos
    const newState = opcionesRespuesta.map((task) =>
      task.id === itemID ? item : task
    );
    setOpcionesRespuesta(newState);
    // console.log("Elemento soltado en columna 2:", item.id);
  };

  const validarRespuestas = () => {
    const column2Tasks = getList(2);

    contadorPreguntasCorrectas = sessionStorage.getItem("preguntasCorrectas");
    console.log(
      "Preguntas correctas:",
      sessionStorage.getItem("preguntasCorrectas")
    );

    if (column2Tasks.length > 0) {
      if (column2Tasks[0].esCorrecta) {
        // Respuesta correcta
        contadorPreguntasCorrectas++;
        sessionStorage.setItem(
          "preguntasCorrectas",
          contadorPreguntasCorrectas
        );
        console.log(
          "Respuesta correcta despues de acertar:",
          contadorPreguntasCorrectas
        );
        // Puedes realizar acciones adicionales aqui
      }
      console.log("Elemento en la columna 2:", column2Tasks[0].enunciado);
    }
  };

  const avanzarPregunta = () => {
    contadorPregunta = sessionStorage.getItem("numeroPregunta");
    console.log(
      "Preguntas contestadas:",
      sessionStorage.getItem("numeroPregunta")
    );

    // Si hemos mostrado todas las preguntas, mostrar el mensaje de finalización
    if (sessionStorage.getItem("numeroPregunta") < 6) {
      contadorPregunta++;
      sessionStorage.setItem("numeroPregunta", contadorPregunta);
      console.log("Preguntas contestadas en el if:", contadorPregunta);
      validarRespuestas();
      validarPreguntaNoRepetida();
    }
    if (sessionStorage.getItem("numeroPregunta") == 6) {
      // ! Hay que disminuir el numero de la pregunta cuando se completan las 5 preguntas
      // ! al momento de registrar en la base
      // ? para que no se registre 6 sino 5
      // contadorPregunta--;
      sessionStorage.setItem("numeroPregunta", contadorPregunta);
      console.log("Preguntas contestadas en el if:", contadorPregunta);
      mostrarPuntuacion();
    }
  };

  const validarAvancePregunta = () => {
    const column2Tasks = getList(2);

    if (column2Tasks.length > 0) {
      avanzarPregunta();
    } else {
      Swal.fire({
        icon: "warning",
        title: "No has seleccionado ninguna respuesta",
        text: "¿Seguro que deseas continuar a la siguiente pregunta?",
        showCancelButton: true,
        cancelButtonColor: "red",
        confirmButtonText: '<span style="color:black">Continuar</span>',
        cancelButtonText: "Cancelar",
        confirmButtonColor: "yellow",
      }).then((result) => {
        if (result.isConfirmed) {
          avanzarPregunta();
        }
      });
    }
  };

  const limpiarVariablesDeSession = () => {
    sessionStorage.removeItem("preguntasCorrectas");
    sessionStorage.removeItem("numeroPregunta");
    for (let i = 2; i < 5; i++) {
      sessionStorage.removeItem("opcion" + i);
    }
  };

  const guardarPuntuacion = () => {
    const horaInicio = sessionStorage.getItem("horaInicio");
    const horaFin = sessionStorage.getItem("horaFin");
    const preguntasContestadas = sessionStorage.getItem("numeroPregunta");
    const preguntasCorrectas = sessionStorage.getItem("preguntasCorrectas");
    const usuario = sessionStorage.getItem("usuario");
    const tituloLectura = sessionStorage.getItem("tituloLectura");
    const tipoJuego = sessionStorage.getItem("tipoJuego");
    let insigniaObtenida = false;

    if (preguntasCorrectas == 5) {
      insigniaObtenida = true;
    }

    const puntuacion = {
      horaInicio,
      horaFin,
      preguntasContestadas,
      preguntasCorrectas,
      usuario,
      tituloLectura,
      tipoJuego,
      insigniaObtenida,
    };

    axios
      .post("http://localhost:3001/guardarPuntuacion", puntuacion)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const mostrarPuntuacion = () => {
    sessionStorage.setItem("horaFin", new Date().toLocaleTimeString());
    let preguntasContestadas = sessionStorage.getItem("numeroPregunta");
    const preguntasCorrectas = sessionStorage.getItem("preguntasCorrectas");
    const urlInsignia = obtenerURLInsignia(tituloLectura);

    if (preguntasContestadas == 6) {
      preguntasContestadas--;
      sessionStorage.setItem("numeroPregunta", preguntasContestadas);
    }

    guardarPuntuacion();
    let imagenInsignia = "";
    if (preguntasCorrectas === "5") {
      imagenInsignia = `<p><img src="${urlInsignia}" alt="Imagen" style="max-width: 100%; height: 50px;"></p>`;
      reproducirInsigniaConseguida();
    } else {
      reproducirAplausos();
      imagenInsignia = `<p style="border: 1px solid black; background: #dcdcdc; font-weight: bold;">Vuelvelo a intentar, lo lograrás !!</p>`;
    }

    Swal.fire({
      title: "Puntajes",
      html: `
      <div style="overflow: hidden; display: flex; align-items: center;">
      <div style="flex: 1; text-align: left;">
        <p>Preguntas contestadas:</p>
        <p>Preguntas correctas:</p>
        <p>Insignia:</p>
      </div>
      <div style="flex: 1; text-align: center;">
        <p>${preguntasContestadas}</p>
        <p>${preguntasCorrectas}</p>
        ${imagenInsignia}      </div>
    </div>
      `,
      confirmButtonText: "Salir",
      confirmButtonColor: "red",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarVariablesDeSession();
        navigate("/menuLecturas");
      }
    });
  };

  const terminarJuego = () => {
    Swal.fire({
      title: "¿Deseas salir del juego?",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "red",
      cancelButtonText: "Cancelar",
      confirmButtonText: '<span style="color:black">Aceptar</span>',
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        mostrarPuntuacion();
      }
    });
  };

  const mostrarInformacion = () => {
    Swal.fire({
      icon: "info",
      html: '<span style="font-weight:bold">Lee la porción de la lectura, arrastra la respuesta correcto entre las opciones presentadas y colocala en el recuadro rojo. Despues presiona el botón continuar.</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    });
  };

  return (
    <Container>
      <h1 className="tituloGeneral">Suelta la respuesta</h1>
      <h2 className="ordenLecturas">
        Arrastra la respuesta correcta al recuadro rojo
      </h2>

      <div className="pregunta">
        <p>{pregunta}</p>
        <div
          className="contenedorRespuesta"
          onDragOver={(evt) => draggingOver(evt)}
          onDrop={(evt) => onDrop(evt, 2)}
        >
          {getList(2).map((item) => (
            <div
              className="opcionSeleccionada"
              key={item.id}
              draggable
              onDragStart={(evt) => startDrag(evt, item)}
            >
              <strong>{item.enunciado}</strong>
            </div>
          ))}
        </div>
      </div>

      <Row
        className="contenedorOpciones"
        onDragOver={(evt) => draggingOver(evt)}
        onDrop={(evt) => onDrop(evt, 1)}
      >
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center mx-auto"
        >
          {getList(1)
            .slice(0, 2)
            .map((item) => (
              <div
                key={item.id}
                className="opcionIndividual"
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="letra">{item.enunciado}</strong>
              </div>
            ))}
        </Col>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center mx-auto"
        >
          {getList(1)
            .slice(2, 4)
            .map((item) => (
              <div
                key={item.id}
                className="opcionIndividual"
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="letra">{item.enunciado}</strong>
              </div>
            ))}
        </Col>
      </Row>

      <Button
        type="button"
        onClick={validarAvancePregunta}
        variant="secondary"
        className="iniciar"
      >
        Continuar
      </Button>

      <Button
        type="button"
        onClick={terminarJuego}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Salir
      </Button>

      <i
        className="bi bi-info-circle-fill botonInformacion"
        onClick={mostrarInformacion}
      ></i>

      <Sonido />
    </Container>
  );
};

export default ArrastrarYSoltar;
