import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Table,
  Row,
  Col,
  InputGroup,
  Form,
} from "react-bootstrap";
import informacionLecturas from "../../public/lecturas/informacionLecturas";
import axios from "axios";
import "../css/insignias.css";
import BarraLogos from "./barraLogos";


function InsigniasTutor() {
  const navigate = useNavigate();
  const [insignias, setInsignias] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState("");

  useEffect(() => {
    const obtenerDatosInsignias = async () => {
        if (sessionStorage.getItem("usuario") === null) {
          navigate("/");
        } else {
          const tiposDeJuego = [
            "Sabia decisión",
            "Suelta la respuesta",
            "¿Quién es quién?",
            "¿Qué pasó primero?",
            "¿Qué pasaría si...?",
          ];

          const insigniasData = tiposDeJuego
            .map((tipoDeJuego) => {
              const tipoDeJuegoConVariante = tipoDeJuego + "2";

              if (
                informacionLecturas[tipoDeJuego] ||
                informacionLecturas[tipoDeJuegoConVariante]
              ) {
                const lecturas = (informacionLecturas[tipoDeJuego] || [])
                  .concat(informacionLecturas[tipoDeJuegoConVariante] || [])
                  .map((lectura) => ({
                    tituloLectura: lectura.tituloLectura,
                    insigniaObtenida: false, // Puedes obtener el estado real desde la base de datos
                    imagenURL: lectura.insignia,
                  }));

                return {
                  tipoDeJuego,
                  lecturas,
                };
              } else {
                return null;
              }
            })
            .filter(Boolean); // Filtra los tipos de juego que no están definidos

          setInsignias(insigniasData);
        }

    };
    obtenerEstudiantes();

    obtenerDatosInsignias();
    obtenerInsigniasObtenidas();
  }, [navigate]);

  const obtenerInsigniasObtenidas = async () => {
      const usuario = sessionStorage.getItem("usuario");
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/obtenerInsignias`,
        {
          params: {
            usuario,
          },
        }
      );

      const resultados = response.data;

      // Actualiza el estado de las insignias según el resultado de la consulta
      setInsignias((prevInsignias) =>
        prevInsignias.map((juego) => ({
          ...juego,
          lecturas: juego.lecturas.map((insignia) => ({
            ...insignia,
            insigniaObtenida: resultados.some(
              (resultado) =>
                resultado.TIPO_JUEGO === juego.tipoDeJuego &&
                resultado.NOMBRE_LECTURA === insignia.tituloLectura
            ),
          })),
        }))
      );

  };

  const obtenerEstudiantes = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/obtenerEstudiantesValidados`, {
        params: {
          usuario: sessionStorage.getItem("usuario"),
        },
      })
      .then((response) => {
        setEstudiantes(response.data);
      });
  };

  const seleccionarComboBox = (event) => {
    const valorSeleccionado = event.target.value;
    setEstudianteSeleccionado(valorSeleccionado);

    // Llamar a la función para obtener las insignias del estudiante seleccionado
    obtenerInsigniasObtenidasPorEstudiante(valorSeleccionado);
  };

  const obtenerInsigniasObtenidasPorEstudiante = async (estudianteSeleccionado) => {
      const usuario = estudianteSeleccionado;
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/obtenerInsignias`,
        {
          params: {
            usuario
          },
        }
      );
  

      const resultados = response.data;

      // Actualiza el estado de las insignias según el resultado de la consulta
      setInsignias((prevInsignias) =>
        prevInsignias.map((juego) => ({
          ...juego,
          lecturas: juego.lecturas.map((insignia) => ({
            ...insignia,
            insigniaObtenida: resultados.some(
              (resultado) =>
                resultado.TIPO_JUEGO === juego.tipoDeJuego &&
                resultado.NOMBRE_LECTURA === insignia.tituloLectura
            ),
          })),
        }))
      );

  };

  const convertirInicialEnMayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const irMenuTutor = () => {
    navigate("/menuTutor");
  };

  return (
    <Container>
      <h1 className="tituloGeneral">Insignias</h1>

      <InputGroup className="comboboxTutor">
        <Form.Select
          value={estudianteSeleccionado}
          onChange={seleccionarComboBox}
        >
          <option defaultValue disabled value="">
            Lista de estudiantes
          </option>
          {estudiantes.map((estudiante, index) => (
            <option key={index} value={estudiante.USER_ESTUDIANTE}>
              {`${convertirInicialEnMayuscula(
                estudiante.NOMBRE_ESTUDIANTE
              )} ${convertirInicialEnMayuscula(
                estudiante.APELLIDO_ESTUDIANTE
              )}`}
            </option>
          ))}
        </Form.Select>
      </InputGroup>

      {estudianteSeleccionado ? (
      <div className="contenedorInsignias">
        <Row>
          {insignias.map((juego, index) => (
            <Col key={index} xs={2} className="tablaInsignias">
              <Table striped bordered hover>
                <thead className="table-fixed-header">
                  <tr>
                    <th colSpan="2">{juego.tipoDeJuego}</th>
                  </tr>
                </thead>
                <tbody>
                  {juego.lecturas.map((insignia, innerIndex) => (
                    <tr key={innerIndex}>
                      <td className="columnaTituloLectura">{insignia.tituloLectura}</td>
                      <td>
                        {insignia.insigniaObtenida ? (
                          <img
                            src={insignia.imagenURL}
                            alt="Insignia obtenida"
                            className="imagenInsignia"
                          />
                        ) : (
                          <div className="imagenPlaceholder"></div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          ))}
        </Row>
      </div>
    ) : (
      <div className="contenedorAcercade mx-auto text-center">
      <p className="mensajeBienvenida">
      Seleccione un estudiante
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

export default InsigniasTutor;
