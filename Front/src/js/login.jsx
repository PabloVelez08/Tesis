import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import Tigrillo from "../../public/audios/login/Tigrillo.mp3";
import Cuy from "../../public/audios/login/Cuy.mp3";
import Tortuga from "../../public/audios/login/Tortuga.mp3";
import OsoAnteojos from "../../public/audios/login/OsoAnteojos.mp3";
import Verde from "../../public/audios/login/Verde.mp3";
import Rojo from "../../public/audios/login/Rojo.mp3";
import Amarillo from "../../public/audios/login/Amarillo.mp3";
import Azul from "../../public/audios/login/Azul.mp3";
import Comer from "../../public/audios/login/Comer.mp3";
import Dormir from "../../public/audios/login/Dormir.mp3";
import Nadar from "../../public/audios/login/Nadar.mp3";
import Saltar from "../../public/audios/login/Saltar.mp3";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";
import { mezclasOpciones } from "./mezclarOpciones";
import { generarNumeroAleatorio } from "./generarNumeroAleatorio";

import "../css/login.css";

const PreguntasSeguridad = [
  {
    pregunta: "¿Cuál es el nombre de su primera mascota?",
    tipo: "mascota",
  },
  {
    pregunta: "¿Cuál es la ciudad en la que nació?",
    tipo: "ciudad",
  },
  {
    pregunta: "¿Cuál es el segundo nombre de su mamá?",
    tipo: "nombreMama",
  },
];

const Login = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);
  const [animalesMezclados, setAnimalesMezclados] = useState([]);
  const [coloresMezclados, setColoresMezclados] = useState([]);
  const [accionesMezcladas, setAccionesMezcladas] = useState([]);
  const [reproducirTigrillo] = useSound(Tigrillo);
  const [reproducirCuy] = useSound(Cuy);
  const [reproducirTortuga] = useSound(Tortuga);
  const [reproducirOsoAnteojos] = useSound(OsoAnteojos);
  const [reproducirVerde] = useSound(Verde);
  const [reproducirRojo] = useSound(Rojo);
  const [reproducirAmarillo] = useSound(Amarillo);
  const [reproducirAzul] = useSound(Azul);
  const [reproducirComer] = useSound(Comer);
  const [reproducirDormir] = useSound(Dormir);
  const [reproducirNadar] = useSound(Nadar);
  const [reproducirSaltar] = useSound(Saltar);
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

  const mostrarPreguntaAleatoria = async (usuario) => {
    const preguntaAleatoria =
      PreguntasSeguridad[
        generarNumeroAleatorio(0, PreguntasSeguridad.length - 1)
      ];
  
    try {
      const respuesta = await Swal.fire({
        title: preguntaAleatoria.pregunta,
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Verificar",
        cancelButtonText: "Cancelar",
      });
  
      if (respuesta.isConfirmed) {
        console.log("Respuesta: ", respuesta.value);
        console.log("Tipo: ", preguntaAleatoria.tipo);
        
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/validarPreguntaSeguridadEstudiante`, {
          tipoPregunta: preguntaAleatoria.tipo,
          respuesta: respuesta.value,
        });
  
        if (response.data.success) {
          Swal.fire({
            title: "Respuesta correcta",
            icon: "success",
            confirmButtonText: '<span style="color:black">Continuar</span>',
            confirmButtonColor: "yellow",
          }).then((result) => {
            if (result.isConfirmed) {
              sessionStorage.setItem(
                "usuarioParaRecuperarContrasena",
                usuario
              );
              sessionStorage.setItem("informacion", true);
              navigate("/restaurarContrasena");
            }
          });
        } else {
          Swal.fire({
            title: "Respuesta incorrecta",
            text: "La respuesta proporcionada no es correcta. Intentelo de nuevo.",
            icon: "error",
            confirmButtonText: '<span style="color:black">Confirmar</span>',
            confirmButtonColor: "yellow",
          });
        }
      }
    } catch (error) {
      console.error("Error al mostrar la pregunta de seguridad:", error.message);
      // Manejar el error aquí
      Swal.fire({
        title: "Error",
        text: "Se produjo un error al mostrar la pregunta de seguridad. Por favor, intenta de nuevo más tarde.",
        icon: "error",
        confirmButtonText: '<span style="color:black">Aceptar</span>',
        confirmButtonColor: "yellow",
      });
    }
  };
  
  

  const renderProgressBar = () => (
    <ProgressBar>
      {usuario && (
        <ProgressBar striped animated variant="success" now={25} key={1} />
      )}
      {animal && (
        <ProgressBar striped animated variant="success" now={25} key={6} />
      )}
      {color && (
        <ProgressBar striped animated variant="success" now={25} key={7} />
      )}
      {accion && (
        <ProgressBar striped animated variant="success" now={25} key={8} />
      )}
    </ProgressBar>
  );

  const cambiarUsuario = (event) => {
    const nuevoUsuario = event.target.value.replace(/[^a-zA-ZñÑ]/g, "");
    setUsuario(nuevoUsuario.toLowerCase());
  };

  const seleccionarOpcion = (opcion, setOpcion) => {
    setOpcion((prevOpcion) => (prevOpcion === opcion ? null : opcion));
    if (opcion === "Tigrillo") {
      reproducirTigrillo();
    }
    if (opcion === "Cuy") {
      reproducirCuy();
    }
    if (opcion === "Tortuga") {
      reproducirTortuga();
    }
    if (opcion === "OsoAnteojos") {
      reproducirOsoAnteojos();
    }
    if (opcion === "Verde") {
      reproducirVerde();
    }
    if (opcion === "Rojo") {
      reproducirRojo();
    }
    if (opcion === "Amarillo") {
      reproducirAmarillo();
    }
    if (opcion === "Azul") {
      reproducirAzul();
    }
    if (opcion === "Comer") {
      reproducirComer();
    }
    if (opcion === "Dormir") {
      reproducirDormir();
    }
    if (opcion === "Nadar") {
      reproducirNadar();
    }
    if (opcion === "Saltar") {
      reproducirSaltar();
    }
  };

  const convertirInicialEnMayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const iniciar = async (e) => {
    e.preventDefault();

    try {
      if (usuario && animal && color && accion) {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
          usuario,
          animal,
          color,
          accion,
        });

        if (response.data.success) {
          if (response.data.message === "Estudiante") {
            const estudianteResponse = await axios.get(
              `${import.meta.env.VITE_BACKEND_URL}/obtenerNombreEstudiante`,
              {
                params: {
                  usuario,
                },
              }
            );
            const nombreUsuario = convertirInicialEnMayuscula(
              estudianteResponse.data[0].NOMBRE_ESTUDIANTE
            );
            const apellidoUsuario = convertirInicialEnMayuscula(
              estudianteResponse.data[0].APELLIDO_ESTUDIANTE
            );
            if (estudianteResponse.data[0].USUARIO_VALIDADO === 1) {
              sessionStorage.setItem("usuario", usuario);
              sessionStorage.setItem(
                "nombre",
                nombreUsuario + " " + apellidoUsuario
              );
              sessionStorage.setItem("informacion", true);
              navigate("/menuJuegos");
            } else {
              Swal.fire({
                title: "Su tutor debe validar su usuario",
                icon: "error",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
              });
            }
          } else if (response.data.message === "Tutor") {
            const tutorResponse = await axios.get(
              `${import.meta.env.VITE_BACKEND_URL}/obtenerNombreTutor`,
              {
                params: {
                  usuario,
                },
              }
            );
            const nombreTutor = convertirInicialEnMayuscula(
              tutorResponse.data[0].NOMBRE_TUTOR
            );
            const apellidoTutor = convertirInicialEnMayuscula(
              tutorResponse.data[0].APELLIDO_TUTOR
            );
            sessionStorage.setItem("usuario", usuario);
            sessionStorage.setItem("nombre", nombreTutor + " " + apellidoTutor);
            navigate("/menuTutor");
          } else {
            mostrarUsuarioIncorrecto();
          }
        } else if (!response.data.success) {
          // Mostrar Sweet Alert si el usuario o la contraseña son inválidos
          mostrarUsuarioIncorrecto();
        }
      } else {
        Swal.fire({
          title: "Existen campos sin completar",
          icon: "error",
          confirmButtonText: '<span style="color:black">Aceptar</span>',
          confirmButtonColor: "yellow",
        });
      }
    } catch (error) {
      console.error("Error en iniciar:", error.message);
      // Puedes mostrar una alerta o realizar acciones adicionales según sea necesario.
    }
  };

  const mostrarUsuarioIncorrecto = () => {
    Swal.fire({
      title: "Usuario o contraseña incorrectos",
      icon: "error",
      confirmButtonText: '<span style="color:black">Aceptar</span>',
      confirmButtonColor: "yellow",
    });
  };

  const mostrarInformacion = () => {
    Swal.fire({
      icon: "info",
      title: '<span style="font-weight:bold">Información sobre usuario</span>',
      html: '<span style="font-weight:bold">Su usuario corresponde su nombre, seguido su apellido, sin espacio.</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the 'informacion' session variable
        sessionStorage.removeItem("informacion");
      }
    });
  };

  const irIndex = () => {
    navigate("/");
  };

  const irRestaurarContrasena = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/validarUsuarioEstudiante`,
      {
        usuario,
      }
    );

    if (usuario == "") {
      Swal.fire({
        title: "Debe ingresar un usuario",
        icon: "error",
        confirmButtonText: '<span style="color:black">Aceptar</span>',
        confirmButtonColor: "yellow",
      });
    } else if (!response.data.success) {
      Swal.fire({
        title: "El usuario no existe",
        icon: "error",
        confirmButtonText: '<span style="color:black">Aceptar</span>',
        confirmButtonColor: "yellow",
      });
    } else if (response.data.success) {
      const usuarioEstudiante = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/obtenerNombreEstudiante`,
        {
          params: {
            usuario,
          },
        }
      );
      mostrarPreguntaAleatoria(usuarioEstudiante.data[0].user_estudiante);

    }
  };

  const renderImagen = (nombreAnimal) => (
    <Col key={nombreAnimal} md={3} className="d-flex justify-content-center">
      <img
        src={`/img/login/${nombreAnimal.toLowerCase()}.png`}
        alt={nombreAnimal}
        className={`imagen ${animal === nombreAnimal ? "selected" : ""}`}
        onClick={() => usuario && seleccionarOpcion(nombreAnimal, setAnimal)}
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
      <h1 className="tituloGeneral">Iniciar Sesión</h1>
      <Row>
        <Col md={5} className="tituloLogin">
          <h2>Complete su información</h2>
        </Col>
        <Col md={7} className="tituloLogin">
          {/* Lógica condicional para mostrar el mensaje o la sección */}

          <h2>Elija un animal, color y acción como su contraseña</h2>
        </Col>
      </Row>
      {renderProgressBar()}
      <Form onSubmit={iniciar}>
        <Row className="fila">
          <Col md={5}>
            <center>
              <h2 className="titulo2">Usuario</h2>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-person-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  value={usuario}
                  onChange={cambiarUsuario}
                  placeholder="Ejemplo: pablovelez"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Link
                onClick={() => irRestaurarContrasena()}
                id="olvideContrasena"
                className="sinContrasena"
              >
                ¿Olvidó su Contraseña?
              </Link>
            </center>
          </Col>

          <Col md={7} border="dark" className="contenedorLogin">
            <center>
              <h2 className="titulo2">Contraseña</h2>
            </center>

            {!usuario && (
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
            Iniciar
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

      <i
        className="bi bi-info-circle-fill botonInformacion"
        onClick={mostrarInformacion}
        onMouseEnter={reproducirBoton}
      ></i>
    </Container>
  );
};

export default Login;
