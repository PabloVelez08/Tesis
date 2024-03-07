import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import BarraLogos from "./barraLogos";
import axios from "axios";
import "../css/index.css";
import useSound from "use-sound";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";


function Index() {
  const navigate = useNavigate();
  const [reproducirBoton] = useSound(SonidoBoton);

  const irMenuJuegos = async () => {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        usuario: "invitadoinvitado",
        animal: "Cuy",
        color: "Amarillo",
        accion: "Dormir",
      });
      if (response.data.success) {
        sessionStorage.setItem("usuario", "invitadoi");
        sessionStorage.setItem("nombre", "Invitado");
        sessionStorage.setItem("informacion", true);
        navigate("/menuJuegos");
      }

  };

  const irLogin = () => {
    navigate("/login");
  };

  const irRegistro = () => {
    navigate("/registro");
  };

  const irAcercaDe = () => {
    navigate("/acercaDe");
  };

  return (
    <Container>
      <h1 className="tituloIndex">
        <span className="letraAmarillo">Ecu</span>
        <span className="letraAzul">aLe</span>
        <span className="letraRoja">ctor</span>
      </h1>
      <img
        src="/img/login/OsoLector.png"
        alt="Oso Lector"
        className="mascota"
      />
      <div className="contenedorIndex">
        <Button
          type="button"
          variant="secondary"
          onClick={irMenuJuegos}
          className="botones amarillo"
          onMouseEnter={reproducirBoton}
        >
          Jugar como invitado
        </Button>

        <Button
          type="button"
          onClick={irLogin}
          variant="secondary"
          className="botones azul"
          onMouseEnter={reproducirBoton}
        >
          Iniciar sesión
        </Button>

        <Button
          type="button"
          onClick={irRegistro}
          variant="secondary"
          className="botones rojo"
          onMouseEnter={reproducirBoton}
        >
          Registrar jugador
        </Button>
      </div>

      <Button
        type="button"
        onClick={irAcercaDe}
        className="btn btn-secondary acercaDe"
        onMouseEnter={reproducirBoton}
      >
        Créditos
      </Button>

      <BarraLogos />
    </Container>
  );
}

export default Index;
