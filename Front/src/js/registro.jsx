import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  ProgressBar,
} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import useSound from "use-sound";
import SonidoTigrillo from "../../public/audios/login/Tigrillo.mp3";
import SonidoCuy from "../../public/audios/login/Cuy.mp3";
import SonidoTortuga from "../../public/audios/login/Tortuga.mp3";
import SonidoOsoAnteojos from "../../public/audios/login/OsoAnteojos.mp3";
import SonidoVerde from "../../public/audios/login/Verde.mp3";
import SonidoRojo from "../../public/audios/login/Rojo.mp3";
import SonidoAmarillo from "../../public/audios/login/Amarillo.mp3";
import SonidoAzul from "../../public/audios/login/Azul.mp3";
import SonidoComer from "../../public/audios/login/Comer.mp3";
import SonidoDormir from "../../public/audios/login/Dormir.mp3";
import SonidoNadar from "../../public/audios/login/Nadar.mp3";
import SonidoSaltar from "../../public/audios/login/Saltar.mp3";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";
import { mezclasOpciones } from "./mezclarOpciones";

const FormularioRegistro = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [usuarioTutor, setUsuarioTutor] = useState("");
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);
  const [animalesMezclados, setAnimalesMezclados] = useState([]);
  const [coloresMezclados, setColoresMezclados] = useState([]);
  const [accionesMezcladas, setAccionesMezcladas] = useState([]);
  const [reproducirTigrillo] = useSound(SonidoTigrillo);
  const [reproducirCuy] = useSound(SonidoCuy);
  const [reproducirTortuga] = useSound(SonidoTortuga);
  const [reproducirOsoAnteojos] = useSound(SonidoOsoAnteojos);
  const [reproducirVerde] = useSound(SonidoVerde);
  const [reproducirRojo] = useSound(SonidoRojo);
  const [reproducirAmarillo] = useSound(SonidoAmarillo);
  const [reproducirAzul] = useSound(SonidoAzul);
  const [reproducirComer] = useSound(SonidoComer);
  const [reproducirDormir] = useSound(SonidoDormir);
  const [reproducirNadar] = useSound(SonidoNadar);
  const [reproducirSaltar] = useSound(SonidoSaltar);
  const [reproducirBoton] = useSound(SonidoBoton);

  useEffect(() => {
    setAnimalesMezclados(
      mezclasOpciones(["Tigrillo", "Cuy", "Tortuga", "OsoAnteojos"])
    );
    setColoresMezclados(mezclasOpciones(["Amarillo", "Azul", "Rojo", "Verde"]));
    setAccionesMezcladas(
      mezclasOpciones(["Comer", "Dormir", "Nadar", "Saltar"])
    );
  }, []);

  const renderProgressBar = () => (
    <ProgressBar key="progress-bar">
      {nombre && <ProgressBar striped animated variant="success" now={16.8} key="nombre" />}
      {apellido && <ProgressBar striped animated variant="success" now={16.8} key="apellido" />}
      {opcionSeleccionada === "Docente" && <ProgressBar striped animated variant="success" now={16.6} key="docente" />}
      {opcionSeleccionada === "Estudiante" && <ProgressBar striped animated variant="success" now={8.3} key="estudiante" />}
      {usuarioTutor && <ProgressBar striped animated variant="success" now={8.3} key="usuarioTutor" />}
      {animal && <ProgressBar striped animated variant="success" now={16.6} key="animal" />}
      {color && <ProgressBar striped animated variant="success" now={16.6} key="color" />}
      {accion && <ProgressBar striped animated variant="success" now={16.6} key="accion" />}
    </ProgressBar>
  );

  const cambiarNombre = (event) => {
    const nuevoNombre = event.target.value.replace(/[^a-zA-ZñÑ]/g, "");
    setNombre(nuevoNombre.toLowerCase());
  };

  const cambiarApellido = (event) => {
    const nuevoApellido = event.target.value.replace(/[^a-zA-ZñÑ]/g, "");
    setApellido(nuevoApellido.toLowerCase());
  };

  const seleccionarComboBox = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);
    if (valorSeleccionado === "Docente") {
      setUsuarioTutor("");
    }
  };

  const cambiarCodigoTutor = (event) => {
    const nuevoUsuarioTutor = event.target.value.replace(/[^a-zA-ZñÑ]/g, "");
    setUsuarioTutor(nuevoUsuarioTutor.toLowerCase());
  };

  const seleccionarAnimal = (selectedAnimal) => {
    // Si ya hay un animal seleccionado, restablecer su estilo
    if (animal === selectedAnimal) {
      setAnimal(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setAnimal(selectedAnimal);
      if (selectedAnimal === "Tigrillo") {
        reproducirTigrillo();
      }
      if (selectedAnimal === "Cuy") {
        reproducirCuy();
      }
      if (selectedAnimal === "Tortuga") {
        reproducirTortuga();
      }
      if (selectedAnimal === "OsoAnteojos") {
        reproducirOsoAnteojos();
      }
    }
  };

  const seleccionarColor = (selectedColor) => {
    if (color === selectedColor) {
      setColor(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setColor(selectedColor);

      if (selectedColor === "Verde") {
        reproducirVerde();
      }
      if (selectedColor === "Rojo") {
        reproducirRojo();
      }
      if (selectedColor === "Amarillo") {
        reproducirAmarillo();
      }
      if (selectedColor === "Azul") {
        reproducirAzul();
      }
    }
  };

  const seleccionarAccion = (selectedAccion) => {
    if (accion === selectedAccion) {
      setAccion(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setAccion(selectedAccion);

      if (selectedAccion === "Comer") {
        reproducirComer();
      }
      if (selectedAccion === "Dormir") {
        reproducirDormir();
      }
      if (selectedAccion === "Nadar") {
        reproducirNadar();
      }
      if (selectedAccion === "Saltar") {
        reproducirSaltar();
      }
    }
  };

  const convertirInicialEnMayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const registrar = (e) => {
    e.preventDefault();
    if (nombre && apellido && opcionSeleccionada && animal && color && accion) {
      const nombreUsuario = `${nombre.toLowerCase()}${apellido.toLowerCase()}`;

      const nombreCapitalizado = convertirInicialEnMayuscula(nombre);
      const apellidoCapitalizado = convertirInicialEnMayuscula(apellido);

      if (opcionSeleccionada === "Docente") {
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/registrarTutor`, {
            nombre: nombre,
            apellido: apellido,
            animal: animal,
            color: color,
            accion: accion,
          })
          .then((response) => {
            const tutorYaRegistrado = response.data.success;
            if (tutorYaRegistrado) {
              Swal.fire({
                title: "El docente ya existe",
                icon: "error",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
              });
            } else {
              Swal.fire({
                title: "Docente registrado con éxito",
                html: `Bienvenido, ${nombreCapitalizado} ${apellidoCapitalizado}! Tu nombre de <strong>usuario</strong> es: <strong>${nombreUsuario}</strong>`,
                icon: "success",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login");
                }
              });
            }
          });
      }
      if (opcionSeleccionada === "Estudiante" && usuarioTutor) {
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/validarEstudiante`, {
            usuarioTutor: usuarioTutor,
            nombre: nombre,
            apellido: apellido,
            animal: animal,
            color: color,
            accion: accion,
          })
          .then((response) => {
            const tutorNoExiste = response.data.success;
            if (tutorNoExiste == "TutorNoExiste") {
              Swal.fire({
                title: "El código de tutor no existe",
                icon: "error",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
              });
            } else if (tutorNoExiste == "TutorExiste") {
              sessionStorage.setItem("idTutor", response.data.idTutor);
              sessionStorage.setItem("nombre", nombre);
              sessionStorage.setItem("apellido", apellido);
              sessionStorage.setItem("animal", animal);
              sessionStorage.setItem("color", color);
              sessionStorage.setItem("accion", accion);

              navigate("/preguntasSeguridad");
            } else if (tutorNoExiste == "EstudianteExiste") {
              Swal.fire({
                title: "El estudiante ya existe",
                icon: "error",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
              });
            }
          });
      }
    } else {
      Swal.fire({
        title: "Existen campos sin completar",
        icon: "error",
        confirmButtonText: '<span style="color:black">Aceptar</span>',
        confirmButtonColor: "yellow",
      });
    }
  };

  const irIndex = () => {
    navigate("/");
  };

  const renderImagen = (nombreAnimal) => (
    <Col key={nombreAnimal} md={3} className="d-flex justify-content-center">
      <img
        src={`/img/login/${nombreAnimal.toLowerCase()}.png`}
        alt={nombreAnimal}
        className={`imagen ${animal === nombreAnimal ? "selected" : ""}`}
        onClick={() => seleccionarAnimal(nombreAnimal, setAnimal)}
      />
    </Col>
  );

  const renderOpcion = (nombreOpcion) => (
    <Col key={nombreOpcion} md={3} className="d-flex justify-content-center">
      <div
        className={`opcion${nombreOpcion} ${
          color === nombreOpcion ? "selected" : ""
        }`}
        onClick={() => seleccionarColor(nombreOpcion, setColor)}
      ></div>
    </Col>
  );

  const renderAccion = (nombreAccion) => (
    <Col key={nombreAccion} md={3} className="d-flex justify-content-center">
      <div
        className={`accion ${accion === nombreAccion ? "selected" : ""}`}
        onClick={() => seleccionarAccion(nombreAccion, setAccion)}
      >
        {nombreAccion}
      </div>
    </Col>
  );


  return (
    <Container>
      <h1 className="tituloGeneral">Registro de Jugador</h1>
      <Row>
        <Col md={5} className="tituloLogin">
          <h2>Complete su información</h2>
        </Col>
        <Col md={7} className="tituloLogin">
          <h2>Elija un animal, color y acción como su contraseña</h2>
        </Col>
      </Row>
      {renderProgressBar()}
      <Form onSubmit={registrar}>
        <Row className="fila">
          <Col md={5}>
            <center>
              <h2 className="titulo2">Nombre</h2>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={cambiarNombre}
                  placeholder="Ejemplo: pablo"
                  aria-label="NombreUsuario"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <h2 className="titulo2">Apellido</h2>
              <InputGroup className=" mb-3">
                <Form.Control
                  type="text"
                  value={apellido}
                  onChange={cambiarApellido}
                  placeholder="Ejemplo: velez"
                  aria-label="ApellidoUsuario"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <h2 className="titulo2">¿Cuál será su rol?</h2>
              <InputGroup className="mb-3">
                <Form.Select
                  value={opcionSeleccionada}
                  onChange={seleccionarComboBox}
                >
                  <option defaultValue disabled value="">
                    Selecciona
                  </option>
                  <option value="Docente">Docente</option>
                  <option value="Estudiante">Estudiante</option>
                </Form.Select>
              </InputGroup>
              {opcionSeleccionada === "Estudiante" && (
                // Mostrar el campo de entrada del usuario del tutor solo cuando se selecciona "Estudiante"
                <div>
                  <h2 className="titulo2">Código de Tutor</h2>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      value={usuarioTutor}
                      onChange={cambiarCodigoTutor}
                      placeholder="Ejemplo: juanp"
                      aria-label="CodigoDeTutor"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
              )}
            </center>
          </Col>

          <Col md={7} className="contenedorLogin">
            <center>
              <h2 className="titulo2">Contraseña</h2>
            </center>

            {(!nombre || !apellido || !opcionSeleccionada) && (
              <div className="bloqueo">
                Complete la información de usuario para poder ingresar su
                contraseña
              </div>
            )}
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
          <Button
            type="submit"
            variant="secondary"
            className="iniciar"
            onMouseEnter={reproducirBoton}
          >
            Continuar
          </Button>
        </center>
      </Form>
      <Button
        type="button"
        onClick={irIndex}
        variant="secondary"
        className="regresar"
        onMouseEnter={reproducirBoton}
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>

    </Container>
  );
};

export default FormularioRegistro;
