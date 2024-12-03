import AdidasBlack from "../../../assets/imgs/icons/adidas_black.png";
import Pinterest from "../../../assets/imgs/icons/pinterest.png";
import Slider from "react-slick";

import GoBack from "../../../assets/imgs/icons/go-back.png";

import { Container } from "./styles";
import { Shoes } from "../../../components/Shoes";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ShoesList } from "../index";

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
  shoesDetails: ShoesList;
}

export const MainContent = ({ onSwipe, shoesDetails }: MainContentProps) => {
  const navigate = useNavigate();
  const { id: idParam } = useParams<{ id: string }>();

  const goBackToList = () => navigate("/listar-tenis");

  const swipe = () => {
    onSwipe();
  };

  const splitShoesName = (name: string) => {
    const splittedShoesName = name.split(" ");

    const shoesName = splittedShoesName?.shift();
    const variation = splittedShoesName?.join().replaceAll(",", " ") || "";

    return {
      shoesName,
      variation,
    };
  };

  const reducedPinterestImgs = shoesDetails.pinterest.slice(0, 8);

  useEffect(() => {
    document.querySelector(".swipe")?.addEventListener("click", swipe);

    return () =>
      document.querySelector(".swipe")?.removeEventListener("click", swipe);
  }, [idParam]);

  return (
    <div className="main">
      <Container>
        <div className="shoes-slide">
          {shoesDetails.images.length > 1 ? (
            <Slider {...settings}>
              {shoesDetails.images.map((image, index) => (
                <div>
                  <Shoes
                    img={image}
                    shoesName={
                      splitShoesName(shoesDetails.model).shoesName ||
                      shoesDetails.model
                    }
                    variation={splitShoesName(shoesDetails.model).variation}
                    big
                    key={index}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            shoesDetails.images.map((image, index) => (
              <div>
                <Shoes
                  img={image}
                  shoesName={
                    splitShoesName(shoesDetails.model).shoesName ||
                    shoesDetails.model
                  }
                  variation={splitShoesName(shoesDetails.model).variation}
                  big
                  key={index}
                />
              </div>
            ))
          )}
        </div>

        <div className="info">
          <img src={AdidasBlack} alt="" />

          <p>
            <p>{shoesDetails.title}</p>
          </p>
        </div>

        <div className="describe">
          <p>{shoesDetails.description}</p>
        </div>

        {shoesDetails.colors.length >= 1 && (
          <div className="other-colors">
            <p>outras cores:</p>

            <div className="shoes">
              {shoesDetails.colors.map((color) => (
                <Shoes img={color.image} code={color.shoeId} />
              ))}
            </div>
          </div>
        )}

        {shoesDetails.pinterest.length >= 1 && (
          <>
            <div className="swipe">
              <img src={Pinterest} alt="" />

              <div>
                <p>arraste a tela para a esquerda</p>
                <p>E CONFIRA MAIS INSPIRAÇÕES DE LOOKS COM O SAMBA OG W</p>
              </div>
            </div>

            <div className="pinterest">
              {reducedPinterestImgs.map((pinterest: string) => (
                <div className="pinterest-img">
                  <img src={pinterest} alt="" />
                </div>
              ))}
            </div>
          </>
        )}

        <div className="separator"></div>

        <div className="other-shoes">
          <h5>OUTROS MODELOS QUE VOCÊ TALVEZ GOSTE:</h5>
          <div className="options-container">
            <div className="wrapper-items">
              {shoesDetails.suggestion.map((suggestion) => (
                <Link to={`/listar-tenis/${suggestion.shoeId} `}>
                  <div className="shoes">
                    <img src={suggestion.image} alt="" />
                    <p>
                      {splitShoesName(suggestion.model).shoesName}{" "}
                      {splitShoesName(suggestion.model).variation}
                    </p>
                  </div>
                </Link>
              ))}
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
