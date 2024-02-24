import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { mezclasOpciones } from "./mezclarOpciones";

import "../css/login.css";

const RestaurarContrasena = () => {
  const navigate = useNavigate();

  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);
  const [animalesMezclados, setAnimalesMezclados] = useState([]);
  const [coloresMezclados, setColoresMezclados] = useState([]);
  const [accionesMezcladas, setAccionesMezcladas] = useState([]);


  useEffect(() => {
    if (sessionStorage.getItem("usuarioParaRecuperarContrasena") === null) {
      navigate("/");
    }

    setAnimalesMezclados(
      mezclasOpciones(["Tigrillo", "Cuy", "Tortuga", "OsoAnteojos"])
    );
    setColoresMezclados(mezclasOpciones(["Amarillo", "Azul", "Rojo", "Verde"]));
    setAccionesMezcladas(
      mezclasOpciones(["Comer", "Dormir", "Nadar", "Saltar"])
    );
    if (sessionStorage.getItem("informacion")) {
      mostrarInformacion();
    }
    }, []);

  const seleccionarOpcion = (opcion, setOpcion) => {
    setOpcion((prevOpcion) => (prevOpcion === opcion ? null : opcion));
  };

  const reestablecerContrasena = (e) => {
    e.preventDefault();
    const userEstudiante = sessionStorage.getItem("usuarioParaRecuperarContrasena");

    if (animal && color && accion) {
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/actualizarContrasena`, {
            userEstudiante,
            animal,
            color,
            accion,
          })
        .then(() => {
          Swal.fire({
            title: "Contraseña actualizada",
            icon: "success",
            confirmButtonText: '<span style="color:black">Confirmar</span>',
            confirmButtonColor: "yellow",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login");
            }
          });
        });
    }else{
        Swal.fire({
            title: "Seleccione todos los elementos de la contraseña",
            icon: "error",
            confirmButtonText: '<span style="color:black">Confirmar</span>',
            confirmButtonColor: "yellow",
        });
    }
  };

  const mostrarInformacion = () => {
    Swal.fire({
      icon: "info",
      title: '<span style="font-weight:bold">Información sobre la contraseña</span>',
      html: '<span style="font-weight:bold">Seleccione los elementos que compondran su nueva contraseña.</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("informacion");
      }
    });
  };

  const irLogin = () => {
    Swal.fire({
      title: "¿Está seguro de cancelar el cambio de contraseña?",
      text: "Los datos ingresados se perderán",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "yellow",
      cancelButtonColor: "#d33",
      confirmButtonText: '<span style="color:black">Confirmar</span>',
      cancelButtonText: "Cancelar",
      }).then((result) => {
      if (result.isConfirmed) {
          sessionStorage.clear();
          navigate("/login");
        }
  });  
  };

  const renderImagen = (nombreAnimal) => (
    <Col key={nombreAnimal} md={3} className="d-flex justify-content-center">
      <img
        src={`/img/login/${nombreAnimal.toLowerCase()}.png`}
        alt={nombreAnimal}
        className={`imagen ${animal === nombreAnimal ? "selected" : ""}`}
        onClick={() => seleccionarOpcion(nombreAnimal, setAnimal)}
      />
    </Col>
  );

  const renderOpcion = (nombreOpcion) => (
    <Col key={nombreOpcion} md={3} className="d-flex justify-content-center">
      <div
        className={`opcion${nombreOpcion} ${
          color === nombreOpcion ? "selected" : ""
        }`}
        onClick={() => seleccionarOpcion(nombreOpcion, setColor)}
      ></div>
    </Col>
  );

  const renderAccion = (nombreAccion) => (
    <Col key={nombreAccion} md={3} className="d-flex justify-content-center">
      <div
        className={`accion ${accion === nombreAccion ? "selected" : ""}`}
        onClick={() => seleccionarOpcion(nombreAccion, setAccion)}
      >
        {nombreAccion}
      </div>
    </Col>
  );

  return (
    <Container>
      <h1 className="tituloGeneral">Restaurar Contraseña</h1>
      <Form onSubmit={reestablecerContrasena}>
        <Row className="fila">
          <Col md={5}>
            <center>
              <h2 className="titulo2">Usuario</h2>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  value={sessionStorage.getItem(
                    "usuarioParaRecuperarContrasena"
                  )}
                  aria-label="NombreUsuario"
                  aria-describedby="basic-addon1"
                  readOnly
                />
              </InputGroup>
            </center>
          </Col>

          <Col md={7} border="dark" className="contenedorLogin">
            <center>
              <h2 className="titulo2">Contraseña</h2>
            </center>
            {/* Animales */}
            <Row className="fila">
              {animalesMezclados.map((animal) => renderImagen(animal))}
            </Row>

            {/* Colores */}
            <Row className="fila">
              {coloresMezclados.map((color) => renderOpcion(color))}
            </Row>

            {/* Acciones */}
            <Row className="fila">
              {accionesMezcladas.map((accion) => renderAccion(accion))}
            </Row>
          </Col>
        </Row>

        <center>
          <Button type="submit" variant="secondary" className="iniciar">
            Iniciar
          </Button>
        </center>
      </Form>
      <Button
        type="button"
        onClick={irLogin}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>

      <i
        className="bi bi-info-circle-fill botonInformacion"
        onClick={mostrarInformacion}
      ></i>

    </Container>
  );
};

export default RestaurarContrasena;
