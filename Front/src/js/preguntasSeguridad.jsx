import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import useSound from "use-sound";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";

import "../css/acercaDe.css";

function AcercaDe() {
  const navigate = useNavigate();
  const [mascota, setMascota] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [nombreMama, setNombreMama] = useState("");
  const [reproducirBoton] = useSound(SonidoBoton);
  
  useEffect(() => {
    // if (sessionStorage.getItem("usuario") === null) {
    //   navigate("/");
    // }
  }, [navigate]);

  const irIndex = () => {
    Swal.fire({
        title: "¿Está seguro de cancelar el registro?",
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
            navigate("/");
        }
    });
  };

  const cambiarMascota = (event) => {
    const nuevaMascota = event.target.value.replace(/[^a-zñ]/g, "");
    setMascota(nuevaMascota.toLowerCase());
  };

  const cambiarCiudad = (event) => {
    const nuevaCiudad = event.target.value.replace(/[^a-zñ]/g, "");
    setCiudad(nuevaCiudad.toLowerCase());
  };

  const cambiarNombreMama = (event) => {
    const nuevoNombre = event.target.value.replace(/[^a-zñ]/g, "");
    setNombreMama(nuevoNombre.toLowerCase());
  };

  const convertirInicialEnMayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const iniciar = async (e) => {
    e.preventDefault();
    const nombre = sessionStorage.getItem("nombre");
    const apellido = sessionStorage.getItem("apellido");

      if (mascota && ciudad && nombreMama) {
        const nombreUsuario = `${nombre.toLowerCase()}${apellido.toLowerCase()}`;

        const nombreCapitalizado = convertirInicialEnMayuscula(nombre);
        const apellidoCapitalizado = convertirInicialEnMayuscula(apellido);

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/registrarEstudiante`, {
            idTutor: sessionStorage.getItem("idTutor"),
            nombre: nombre,
            apellido: apellido,
            animal: sessionStorage.getItem("animal"),
            color: sessionStorage.getItem("color"),
            accion: sessionStorage.getItem("accion"),
            }).then((response) => {
                if(response.data.success){
                  axios.post(`${import.meta.env.VITE_BACKEND_URL}/registrarPreguntasDeSeguridadEstudiante`, {
                        nombre: nombre,
                        apellido: apellido,
                        mascota: mascota,
                        ciudad: ciudad,
                        nombreMama: nombreMama,
                    }).then((response) => {
                        if(response.data.success){
                            Swal.fire({
                                    title: "Estudiante registrado con éxito",
                                    html: `Bienvenido, ${nombreCapitalizado} ${apellidoCapitalizado}! Tu nombre de <strong>usuario</strong> es: <strong>${nombreUsuario}</strong>`,
                                    icon: "success",
                                    confirmButtonText: '<span style="color:black">Aceptar</span>',
                                    confirmButtonColor: "yellow",
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                        sessionStorage.clear();
                                      navigate("/login");
                                    }
                                  });
                        } else {
                            Swal.fire({
                                title: "Error al registrar estudiante",
                                icon: "error",
                                confirmButtonText: '<span style="color:black">Aceptar</span>',
                                confirmButtonColor: "yellow",
                            });
                        }
                    }     
                    );                
                    
                }
            });

        
      } else {
        Swal.fire({
          title: "Existen campos sin completar",
          icon: "error",
          confirmButtonText: '<span style="color:black">Aceptar</span>',
          confirmButtonColor: "yellow",
        });
      }

  };

  return (
    <Container>
      <h1 className="tituloGeneral">Preguntas de Seguridad</h1>
      
      <Form onSubmit={iniciar} className="mt-5 ">
            <center className="contenedorPreguntas">
              <h2 className="titulo2 mb-2">¿Cuál es el nombre de su primera mascota?</h2>
              <InputGroup className="mb-4">
                <Form.Control
                  type="text"
                  value={mascota}
                  onChange={cambiarMascota}
                  placeholder="Ejemplo: candy"
                  aria-label="NombreMascota"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <h2 className="titulo2 mb-2">¿Cuál es la ciudad en la que nació?</h2>
              <InputGroup  className="mb-4">
                <Form.Control
                  type="text"
                  value={ciudad}
                  onChange={cambiarCiudad}
                  placeholder="Ejemplo: quito"
                  aria-label="NombreCiudad"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <h2 className="titulo2 mb-2">¿Cuál es el segundo nombre de su mamá?</h2>
              <InputGroup className="mb-2">
                <Form.Control
                  type="text"
                  value={nombreMama}
                  onChange={cambiarNombreMama}
                  placeholder="Ejemplo: marta"
                  aria-label="NombreMadre"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </center>


        <center>
          <Button
            type="submit"
            variant="secondary"
            className="iniciar"
            onMouseEnter={reproducirBoton}
          >
            Registrar
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
        <i className="bi bi-caret-left-fill"></i> Cancelar
      </Button>
    </Container>
  );
}

export default AcercaDe;
