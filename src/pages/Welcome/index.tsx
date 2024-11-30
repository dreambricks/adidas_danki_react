import { Container } from "./styles";
import AdidasBlack from "../../assets/imgs/icons/adidas_black.png";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useCTA } from "../../hook/CTA";

export const Welcome = () => {
  const navigate = useNavigate();
  const redirectListt = () => navigate("/listar-tenis");

  const { bacToInit } = useCTA();

  useEffect(() => {
    bacToInit();
  }, []);

  return (
    <Container>
      <h1 className="welcome">
        SEJA <br /> BEM-VINDO
      </h1>

      <div className="dive-in">
        <img src={AdidasBlack} alt="" />
        <p>MERGULHE NO UNIVERSO ADIDAS!</p>
      </div>

      <p className="describe">
        <span>CONHEÇA</span> OS TÊNIS ADIDAS E <span>SE INSPIRE</span> PARA
        CRIAR SEUS <span>LOOKS MAIS INCRÍVEIS!</span>
      </p>

      <button className="init" onClick={redirectListt}>
        INICIAR
      </button>
    </Container>
  );
};
