import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table, ButtonGroup } from "react-bootstrap";
import BarraLogos from "./barraLogos";
import Swal from "sweetalert2";
import axios from "axios";

import "../css/aceptarEstudiantes.css";

function AceptarEstudiantes() {
  const navigate = useNavigate();
  const [estudiantes, setEstudiantes] = useState([]);
  const [hayEstudiantes, setHayEstudiantes] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    obtenerEstudiantes();
  }, [navigate]);

  const obtenerEstudiantes = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/obtenerEstudiantesNoValidados`, {
        params: {
          usuario: sessionStorage.getItem("usuario"),
        },
      })
      .then((response) => {
        setEstudiantes(response.data);
              setHayEstudiantes(response.data.length > 0);
      
      });
  };

  const convertirInicialEnMayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const eliminarEstudiante = (userEstudiante, nombre, apellido) => {
    const nombreMayuscula = convertirInicialEnMayuscula(nombre);
    const apellidoMayuscula = convertirInicialEnMayuscula(apellido);

    Swal.fire({
      title: "Confirmar eliminación",
      icon: "warning",
      html:
        "<i>¿Está seguro que desea eliminar al estudiante <strong>" +
        nombreMayuscula +
        " " +
        apellidoMayuscula +
        "</strong>?</i>",
      showCancelButton: true,
      cancelButtonColor: "red",
      confirmButtonText: '<span style="color:black">Confirmar</span>',
      cancelButtonText: "Cancelar",
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/eliminarEstudiante`, {
            params: {
              userEstudiante: userEstudiante,
              userTutor: sessionStorage.getItem("usuario"),
              nombre: nombre,
              apellido: apellido,
            },
          })
            Swal.fire({
              title: "¡Estudiante eliminado con exito!",
              icon: "success",
              confirmButtonText: '<span style="color:black">Confirmar</span>',
              confirmButtonColor: "yellow",
            });
            obtenerEstudiantes();

      }
    });
  };

  const aprobarEstudiante = (userEstudiante, nombre, apellido) => {
    const nombreMayuscula = convertirInicialEnMayuscula(nombre);
    const apellidoMayuscula = convertirInicialEnMayuscula(apellido);

    Swal.fire({
      title: "Confirmar aprobación",
      icon: "warning",
      html:
        "<i>¿Está seguro que desea aprobar al estudiante <strong>" +
        nombreMayuscula +
        " " +
        apellidoMayuscula +
        "</strong>?</i>",
      showCancelButton: true,
      cancelButtonColor: "red",
      confirmButtonText: '<span style="color:black">Confirmar</span>',
      cancelButtonText: "Cancelar",
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`${import.meta.env.VITE_BACKEND_URL}/aprobarEstudiante`, {
            userEstudiante: userEstudiante,
            userTutor: sessionStorage.getItem("usuario"),
            nombre: nombre,
            apellido: apellido,
          })
          
            Swal.fire({
              title: "Estudiante aprobado con exito!!!",
              icon: "success",
              confirmButtonText: '<span style="color:black">Confirmar</span>',
              confirmButtonColor: "yellow",
            });
            obtenerEstudiantes();
      }
    });
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

    return (
      <tr key={estudiante.USER_ESTUDIANTE}>
        <td>
          {nombreConMayuscula} {apellidoConMayuscula}
        </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={() =>
                aprobarEstudiante(
                  estudiante.USER_ESTUDIANTE,
                  estudiante.NOMBRE_ESTUDIANTEe,
                  estudiante.APELLIDO_ESTUDIANTE
                )
              }
            >
              Aceptar
            </Button>
            <Button
              variant="danger"
              onClick={() =>
                eliminarEstudiante(
                  estudiante.USER_ESTUDIANTE,
                  estudiante.NOMBRE_ESTUDIANTE,
                  estudiante.APELLIDO_ESTUDIANTE
                )
              }
            >
              Rechazar
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  }

  return (
    <Container>
      <h1 className="tituloGeneral">Aceptar Estudiantes</h1>

      {hayEstudiantes ? (
      <div className="tabla-scroll">
        <Table striped bordered hover className="mb-3 text-center">
          <thead>
            <tr>
              <th>Nombre Estudiante</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{estudiantes.map(renderizarEstudiante)}</tbody>
        </Table>
      </div>
    ) : (
      <div className="contenedorAcercade mx-auto text-center">
      <p className="mensajeBienvenida">
      No existen solicitudes actualmente
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

export default AceptarEstudiantes;
