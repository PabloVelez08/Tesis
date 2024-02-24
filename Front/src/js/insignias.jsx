import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table, Row, Col } from "react-bootstrap";
import informacionLecturas from "../../public/lecturas/informacionLecturas";
import axios from "axios";
import "../css/insignias.css";

function Insignias() {
  const navigate = useNavigate();
  const [insignias, setInsignias] = useState([]);
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";

  useEffect(() => {
    const obtenerDatosInsignias = async () => {
        if (sessionStorage.getItem("usuario") === null) {
          navigate("/");
        }
        setVariableSession(sessionStorage.getItem("nombre"));

          const tiposDeJuego = ["Sabia decisión", "Suelta la respuesta", "¿Quién es quién?", "¿Qué pasó primero?", "¿Qué pasaría si...?"];
  
          const insigniasData = tiposDeJuego.map((tipoDeJuego) => {
            const tipoDeJuegoConVariante = tipoDeJuego + "2";
  
            if (informacionLecturas[tipoDeJuego] || informacionLecturas[tipoDeJuegoConVariante]) {
              const lecturas = (informacionLecturas[tipoDeJuego] || []).concat(informacionLecturas[tipoDeJuegoConVariante] || []).map((lectura) => ({
                tituloLectura: lectura.tituloLectura,
                insigniaObtenida: false, // Puedes obtener el estado real desde la base de datos
                imagenURL: lectura.insignia,
              }));
  
              return {
                tipoDeJuego,
                lecturas,
              };
            } else {
              console.error(`El tipo de juego '${tipoDeJuego}' no está definido en informacionLecturas`);
              return null;
            }
          }).filter(Boolean); // Filtra los tipos de juego que no están definidos
  
          setInsignias(insigniasData);
        
      
    };
  
    obtenerDatosInsignias();
    obtenerInsigniasObtenidas();
  }, [navigate]);

  const obtenerInsigniasObtenidas = async () => {
    try {
      const usuario = sessionStorage.getItem("usuario");
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/obtenerInsignias`, {
        params: {
          usuario,
        },
      });
  
      const resultados = response.data;
      console.log('Resultados de Insignias Obtenidas:', resultados);

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
    } catch (error) {
      console.error('Error al obtener información de insignias obtenidas:', error);
    }
  };

  const irMenuLecturas = () => {
    navigate("/menuJuegos");
  };

  return (
    <Container>
      {esUsuarioInvitado !== sessionStorage.getItem("usuario") ? (
    <>
    <img
      src="/img/fondo/Cartel.png"
      alt="Cartel"
      className="contenedorCartel"
    />

    <h2 className="cartelUsuario">
      <span className="contenidoCartel">{variableSession}</span>
    </h2>
  </>
) : null}
      <h1 className="tituloGeneral">Insignias</h1>

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
                          <div className="imagenPlaceholder" ></div>
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

      <Button
        type="button"
        onClick={irMenuLecturas}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
    </Container>
  );
}

export default Insignias;
