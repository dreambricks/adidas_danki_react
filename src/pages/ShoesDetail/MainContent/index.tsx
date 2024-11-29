import Tenis2 from "../../../assets/imgs/shoes/shoes-2.png";
import AdidasBlack from "../../../assets/imgs/icons/adidas_black.png";
import Pinterest from "../../../assets/imgs/icons/pinterest.png";
import Pinterest1 from "../../../assets/imgs/pinterest/pinterest_1.png";
import Pinterest2 from "../../../assets/imgs/pinterest/pinterest_4.png";
import Slider from "react-slick";

import GoBack from "../../../assets/imgs/icons/go-back.png";

import { Container } from "./styles";
import { Shoes } from "../../../components/Shoes";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchShoesDetails } from "../../../services/apis";
import { Loader } from "../../../components/Loader";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  cssEase: "linear",
  centerPadding: "60px",
};

interface MainContentProps {
  onSwipe: () => void;
}

interface ShoesList {
  code: string;
  images: string[];
  model: string;
  description: string;
  title: string;
}

export const MainContent = ({ onSwipe }: MainContentProps) => {
  const [shoesList, setShoesList] = useState<null | ShoesList>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id: idParam } = useParams<{ id: string }>();

  const splittedShoesName = shoesList?.model.split(" ");

  const shoesName = splittedShoesName?.shift();
  const variation = splittedShoesName?.join().replaceAll(",", " ") || "";

  const goBackToList = () => navigate("/listar-tenis");

  const swipe = () => {
    onSwipe();
  };

  const getShoesDetails = async (idParam: string) => {
    try {
      setLoading(true);
      const response = await fetchShoesDetails(idParam);
      setShoesList(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idParam) getShoesDetails(idParam);
    document.querySelector(".swipe")?.addEventListener("click", swipe);

    return () =>
      document.querySelector(".swipe")?.removeEventListener("click", swipe);
  }, []);

  return (
    <div className="main">
      <Container>
        {loading && <Loader />}

        {!loading && shoesList?.code && (
          <>
            <div className="shoes-slide">
              <Slider {...settings}>
                {shoesList.images.map((image, index) => (
                  <div>
                    <Shoes
                      img={image}
                      shoesName={shoesName || shoesList.model}
                      variation={variation}
                      big
                      key={index}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="info">
              <img src={AdidasBlack} alt="" />

              <p>
                <p>{shoesList.title}</p>
              </p>
            </div>

            <div className="describe">
              <p>{shoesList.description}</p>
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
          </>
        )}
      </Container>
    </div>
  );
};
