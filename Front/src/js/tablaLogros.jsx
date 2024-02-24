import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import axios from "axios";

import "../css/tablaLogros.css";

function TablaLogros() {
  const navigate = useNavigate();
  const [estudiantes, setEstudiantes] = useState([]);
  const [hayEstudiantes, setHayEstudiantes] = useState(true);
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";


  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    setVariableSession(sessionStorage.getItem("nombre"));

    obtenerEstudiantes();
  }, [navigate]);

  const obtenerEstudiantes = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/obtenerDatosEstudiantes`, {
        params: {
          usuario: sessionStorage.getItem("usuario"),
        },
      })
      .then((response) => {
        // Ordenar por la columna "Aciertos" de forma descendente
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
      <h1 className="tituloGeneral">Tabla de Logros</h1>

      {hayEstudiantes ? (
      <div className="tabla-scroll">
        <Table striped bordered hover className="mb-3 text-center">
          <thead>
            <tr>
              <th>Jugador</th>
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
        onClick={irMenuLecturas}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
    </Container>
  );
}

export default TablaLogros;
