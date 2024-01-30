import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../css/instrucciones.css";

const InstruccionesJuego = () => {
  const navigate = useNavigate();
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    setVariableSession(sessionStorage.getItem("nombre"));
  }, [navigate]);

  const irLecturas = () => {
    sessionStorage.removeItem("tituloLectura");
    navigate("/menuLecturas");
  };

  const leerLectura = () => {
    sessionStorage.setItem("horaInicio", new Date().toLocaleTimeString());
    navigate("/lectura");
  };

  // Obtener el texto de las instrucciones según el tipo de juego
  const obtenerTextoInstrucciones = () => {
    switch (sessionStorage.getItem("tipoJuego")) {
      case "Elige sabiamente":
        return "Lee con mucha atención la lectura seleccionada y al finalizar presiona el botón jugar, a continuación selecciona la respuesta referentes a la lectura, para avanzar pulsa continuar.";
      case "Suelta la respuesta":
        return "Lee con mucha atención la lectura seleccionada y al finalizar presiona el botón jugar, a continuación debes arrastrar la respuesta correcta entre las opciones presentadas y colocarla en el recuadro rojo, para avanzar pulsa continuar.";
      case "¿Quién es quién?":
        return `Lee con mucha atención la lectura seleccionada y al finalizar presiona el botón jugar,
        a continuación selecciona el personaje de la lectura que coincide con la descripción y colocalar en el recuadro rojo, para avanzar pulsa continuar.`;
      case "¿Qué paso primero?":
        return "Lee con mucha atención la lectura seleccionada y al finalizar presiona el botón jugar, a continuación ordena los cuadrados azules según como fueron ocurriendo los eventos en la historia y colocalar en el recuadro rojo, para avanzar pulsa continuar.";
      case "¿Qué pasaría si...?":
        return "Lee con mucha atención la lectura seleccionada y al finalizar presiona el botón jugar, a continuación selecciona la respuesta referentes a la lectura, para avanzar pulsa continuar.";
      default:
        return "Instrucciones por defecto o para otros tipos de juego.";
    }
  };

  return (
    <Container>
      {esUsuarioInvitado !== sessionStorage.getItem("usuario") ? (
        <h2 className="cartelUsuario">
          <span className="contenidoCartel">{variableSession}</span>
        </h2>
      ) : null}
      <h1 className="tituloGeneral">{sessionStorage.getItem("tipoJuego")}</h1>{" "}
      <Row className="fila">
        <Col md={7}>
          <div className="contenedorInstrucciones text-center">
            <p>{obtenerTextoInstrucciones()}</p>
          </div>
        </Col>
        <Col md={5}>
          <div className="contenedorInstrucciones text-center">
            Imagen del Juego
          </div>
        </Col>
      </Row>
      <Button
        type="button"
        onClick={irLecturas}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
      <Button
        type="button"
        onClick={leerLectura}
        variant="secondary"
        className="botones iniciar"
      >
        Continuar
      </Button>
    </Container>
  );
};

export default InstruccionesJuego;
