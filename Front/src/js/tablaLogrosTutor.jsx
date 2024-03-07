import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import BarraLogos from "./barraLogos";


import "../css/tablaLogros.css";

function TablaLogrosTutor() {
  const navigate = useNavigate();
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiantesParaCombobox, setEstudiantesParaCombobox] = useState([]); // [
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState("");
  const [tipoJuego, setTipoJuego] = useState("");
  const [hayEstudiantes, setHayEstudiantes] = useState(true);
  const [valorSeleccionado, setValorSeleccionado] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    obtenerEstudiantesParaCombobox();
    obtenerEstudiantes();
  }, [navigate]);

  const obtenerEstudiantesParaCombobox = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/obtenerEstudiantesValidados`, {
        params: {
          usuario: sessionStorage.getItem("usuario"),
        },
      })
      .then((response) => {
        setEstudiantesParaCombobox(response.data);
      });
  };

  const seleccionarComboBox = (event) => {
    setValorSeleccionado(event.target.value);
    setEstudianteSeleccionado(valorSeleccionado);
  };

  const obtenerEstudiantes = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/obtenerDatosEstudiantesParaTutor`, {
        params: {
          usuarioTutor: sessionStorage.getItem("usuario"),
          usuarioEstudiante: valorSeleccionado,
          tipoJuego: tipoJuego,
        },
      })
      .then((response) => {
        const estudiantesOrdenados = response.data.sort((a, b) => {
          return b.PREGUNTAS_CORRECTAS - a.PREGUNTAS_CORRECTAS;
        });
        setEstudiantes(estudiantesOrdenados);
        setHayEstudiantes(response.data.length > 0);
      });
  };

  const convertirInicialEnMayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const irMenuTutor = () => {
    navigate("/menuTutor");
  };

  function renderizarEstudiante(estudiante) {
    const nombreConMayuscula = convertirInicialEnMayuscula(
      estudiante.NOMBRE_ESTUDIANTE
    );
    const apellidoConMayuscula = convertirInicialEnMayuscula(
      estudiante.APELLIDO_ESTUDIANTE
    );

    let insigniaObtenida;
    if (estudiante.INSIGNIA_OBTENIDA === 1) {
      insigniaObtenida = "Obtenida";
    } else {
      insigniaObtenida = "Pendiente";
    }

    return (
      <tr key={estudiante.ID_LECTURA}>
        <td>
          {nombreConMayuscula} {apellidoConMayuscula}
        </td>
        <td>{estudiante.TIPO_JUEGO}</td>
        <td>{estudiante.NOMBRE_LECTURA}</td>
        <td>{insigniaObtenida}</td>
        <td>{estudiante.PREGUNTAS_CONTESTADAS}</td>
        <td>{estudiante.PREGUNTAS_CORRECTAS}</td>
        <td>{estudiante.DURACION} minutos</td>
      </tr>
    );
  }

  return (
    <Container>
      <h1 className="tituloGeneral">Tabla de Logros</h1>
      <Form
        className="mb-3 mt-3"
        onSubmit={(e) => {
          e.preventDefault();
          obtenerEstudiantes();
        }}
      >
        <Row>
          <Col md={2}></Col>
          <Col md={3}>
            <Form.Select
              value={estudianteSeleccionado}
              onChange={seleccionarComboBox}
            >
              <option value="">Todos los estudiantes</option>
              {estudiantesParaCombobox.map((estudiantesParaCombobox, index) => (
                <option
                  key={index}
                  value={estudiantesParaCombobox.USER_ESTUDIANTE}
                >
                  {`${convertirInicialEnMayuscula(
                    estudiantesParaCombobox.NOMBRE_ESTUDIANTE
                  )} ${convertirInicialEnMayuscula(
                    estudiantesParaCombobox.APELLIDO_ESTUDIANTE
                  )}`}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select
              value={tipoJuego}
              onChange={(e) => setTipoJuego(e.target.value)}
            >
              <option value="">Todos los juegos</option>
              <option value="Sabia decisión">Sabia decisión</option>
              <option value="Suelta la respuesta">Suelta la respuesta</option>
              <option value="¿Quién es quién?">¿Quién es quién?</option>
              <option value="¿Qué pasó primero?">¿Qué pasó primero?</option>
              <option value="¿Qué pasaría si...?">¿Qué pasaría si...?</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Button type="submit" variant="secondary" className="botonBuscar">
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>

      {hayEstudiantes ? (
        <div className="tabla-scroll-tutor">
          <Table striped bordered hover className="mb-3 text-center">
            <thead>
              <tr>
                <th>Estudiante</th>
                <th>Juego</th>
                <th>Lectura</th>
                <th>Insignia</th>
                <th># Preguntas</th>
                <th>Aciertos</th>
                <th>Tiempo de Intento</th>
              </tr>
            </thead>
            <tbody>{estudiantes.map(renderizarEstudiante)}</tbody>
          </Table>
          </div>
      ) : (
        <div className="contenedorAcercade mx-auto text-center">
          <p className="mensajeBienvenida">
            No existe actividad de estudiantes{" "}
          </p>
        </div>
      )}

      <Button
        type="button"
        onClick={irMenuTutor}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>

      <BarraLogos />
    </Container>
  );
}

export default TablaLogrosTutor;
