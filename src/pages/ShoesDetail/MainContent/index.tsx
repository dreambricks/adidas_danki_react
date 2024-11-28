import Tenis2 from "../../../assets/imgs/shoes/shoes-2.png";
import AdidasBlack from "../../../assets/imgs/icons/adidas_black.png";
import Pinterest from "../../../assets/imgs/icons/pinterest.png";
import Pinterest1 from "../../../assets/imgs/pinterest/pinterest_1.png";
import Pinterest2 from "../../../assets/imgs/pinterest/pinterest_4.png";
import Slider from "react-slick";

import GoBack from "../../../assets/imgs/icons/go-back.png";

import { Container } from "./styles";
import { Shoes } from "../../../components/Shoes";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 500,
  cssEase: "linear",
  centerPadding: "60px",
};

interface MainContentProps {
  onSwipe: () => void;
}

export const MainContent = ({ onSwipe }: MainContentProps) => {
  const navigate = useNavigate();

  const goBackToList = () => navigate("/listar-tenis");

  const swipe = () => {
    onSwipe();
  };

  useEffect(() => {
    document.querySelector(".swipe")?.addEventListener("click", swipe);

    return () =>
      document.querySelector(".swipe")?.removeEventListener("touchmove", swipe);
  }, []);

  return (
    <div className="main">
      <Container>
        <div className="shoes-slide">
          <Slider {...settings}>
            <div>
              <Shoes img={Tenis2} shoesName="Teste" id={2} big />
            </div>
            <div>
              <Shoes img={Tenis2} shoesName="Teste" id={4} big />
            </div>
          </Slider>
        </div>

        <div className="info">
          <img src={AdidasBlack} alt="" />

          <p>
            <span>ELEGÂNCIA</span> COM <span>TOQUES </span>
            <span>MODERNOS DE COR</span>
          </p>
        </div>

        <div className="describe">
          <p>
            O tênis adidas Samba OG é ideal para caminhadas ou passeios, sempre
            mantendo seu <span>look alinhado</span>. Com{" "}
            <span>design moderno</span> inspirado nos anos 50, apresenta cabedal
            de suede e couro, além de um solado de borracha aderente. As{" "}
            <span>Três Listras</span> destacam seu amor pela marca em cada
            passo!
          </p>
        </div>

        <div className="other-colors">
          <p>outras cores:</p>

          <div className="shoes">
            <img src={Tenis2} alt="" />
            <img src={Tenis2} alt="" />
            <img src={Tenis2} alt="" />
          </div>
        </div>

        <div className="swipe">
          <img src={Pinterest} alt="" />

          <div>
            <p>arraste a tela para a esquerda</p>
            <p>E CONFIRA MAIS INSPIRAÇÕES DE LOOKS COM O SAMBA OG W</p>
          </div>
        </div>

        <div className="pinterest">
          <div className="pinterest-img">
            <img src={Pinterest1} alt="" />
          </div>

          <div className="pinterest-img">
            <img src={Pinterest2} alt="" />
          </div>

          <div className="pinterest-img">
            <img src={Pinterest1} alt="" />
          </div>

          <div className="pinterest-img">
            <img src={Pinterest2} alt="" />
          </div>

          <div className="pinterest-img">
            <img src={Pinterest1} alt="" />
          </div>

          <div className="pinterest-img">
            <img src={Pinterest2} alt="" />
          </div>

          <div className="pinterest-img">
            <img src={Pinterest1} alt="" />
          </div>

          <div className="pinterest-img">
            <img src={Pinterest2} alt="" />
          </div>

          <div className="pinterest-img">
            <img src={Pinterest1} alt="" />
          </div>

          <div className="pinterest-img">
            <img src={Pinterest2} alt="" />
          </div>
        </div>

        <div className="separator"></div>

        <div className="other-shoes">
          <h5>OUTROS MODELOS QUE VOCÊ TALVEZ GOSTE:</h5>
          <div className="options-container">
            <div className="wrapper-items">
              <div className="shoes">
                <img src={Tenis2} alt="" />
                <p>SAMBA</p>
              </div>
              <div className="shoes">
                <img src={Tenis2} alt="" />
                <p>SAMBA</p>
              </div>
              <div className="shoes">
                <img src={Tenis2} alt="" />
                <p>SAMBA</p>
              </div>
            </div>
          </div>
        </div>

        <button className="go-back" onClick={goBackToList}>
          <img src={GoBack} alt="" />
          VOLTAR PARA O CATÁLOGO
        </button>
      </Container>
    </div>
  );
};
