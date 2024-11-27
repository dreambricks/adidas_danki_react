import { Container } from "./styles";
import AdidasLogo from "../../assets/imgs/icons/adidas_white.png";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  const redirectInit = () => navigate("/bem-vindo");

  return (
    <Container>
      <img src={AdidasLogo} alt="" />

      <div className="start">
        <button className="start" onClick={redirectInit}>
          CLIQUE AQUI
        </button>
      </div>

      <p className="try">PARA INICIAR SUA EXPERIÊNCIA ADIDAS</p>
    </Container>
  );
};
