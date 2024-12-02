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
import { Link, useNavigate, useParams } from "react-router";
import { fetchShoesDetails } from "../../../services/apis";
import { Loader } from "../../../components/Loader";

import PinterestImg1 from "../../../assets/imgs/pinterest/pinterest-1.png";
import PinterestImg2 from "../../../assets/imgs/pinterest/pinterest-2.png";
import PinterestImg3 from "../../../assets/imgs/pinterest/pinterest-3.png";
import PinterestImg4 from "../../../assets/imgs/pinterest/pinterest-4.png";
import PinterestImg5 from "../../../assets/imgs/pinterest/pinterest-5.png";
import PinterestImg6 from "../../../assets/imgs/pinterest/pinterest-6.png";
import PinterestImg7 from "../../../assets/imgs/pinterest/pinterest-7.png";
import PinterestImg8 from "../../../assets/imgs/pinterest/pinterest-8.png";

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

interface Image {
  code: string;
  image: string;
  model: string;
  shoeId: string;
}

interface ShoesList {
  code: string;
  images: string[];
  model: string;
  description: string;
  title: string;
  colors: Image[];
  suggestion: Image[];
  _id: string;
}

export const MainContent = ({ onSwipe }: MainContentProps) => {
  const [shoesList, setShoesList] = useState<null | ShoesList>(null);
  const [loading, setLoading] = useState(false);
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
  }, [idParam]);

  return (
    <div className="main">
      <Container>
        {loading && <Loader />}

        {!loading && shoesList?.code && (
          <>
            <div className="shoes-slide">
              {shoesList.images.length > 1 ? (
                <Slider {...settings}>
                  {shoesList.images.map((image, index) => (
                    <div>
                      <Shoes
                        img={image}
                        shoesName={
                          splitShoesName(shoesList.model).shoesName ||
                          shoesList.model
                        }
                        variation={splitShoesName(shoesList.model).variation}
                        big
                        key={index}
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                shoesList.images.map((image, index) => (
                  <div>
                    <Shoes
                      img={image}
                      shoesName={
                        splitShoesName(shoesList.model).shoesName ||
                        shoesList.model
                      }
                      variation={splitShoesName(shoesList.model).variation}
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
                <p>{shoesList.title}</p>
              </p>
            </div>

            <div className="describe">
              <p>{shoesList.description}</p>
            </div>

            {shoesList.colors.length >= 1 && (
              <div className="other-colors">
                <p>outras cores:</p>

                <div className="shoes">
                  {shoesList.colors.map((color) => (
                    <Shoes img={color.image} code={color.shoeId} />
                  ))}
                </div>
              </div>
            )}

            {/* <div className="swipe">
              <img src={Pinterest} alt="" />

              <div>
                <p>arraste a tela para a esquerda</p>
                <p>E CONFIRA MAIS INSPIRAÇÕES DE LOOKS COM O SAMBA OG W</p>
              </div>
            </div>

            <div className="pinterest">
              <div className="pinterest-img">
                <img src={PinterestImg1} alt="" />
              </div>

              <div className="pinterest-img">
                <img src={PinterestImg2} alt="" />
              </div>

              <div className="pinterest-img">
                <img src={PinterestImg3} alt="" />
              </div>

              <div className="pinterest-img">
                <img src={PinterestImg4} alt="" />
              </div>

              <div className="pinterest-img">
                <img src={PinterestImg5} alt="" />
              </div>

              <div className="pinterest-img">
                <img src={PinterestImg6} alt="" />
              </div>

              <div className="pinterest-img">
                <img src={PinterestImg7} alt="" />
              </div>

              <div className="pinterest-img">
                <img src={PinterestImg8} alt="" />
              </div>
            </div> */}

            <div className="separator"></div>

            <div className="other-shoes">
              <h5>OUTROS MODELOS QUE VOCÊ TALVEZ GOSTE:</h5>
              <div className="options-container">
                <div className="wrapper-items">
                  {shoesList.suggestion.map((suggestion) => (
                    <Link to={`/listar-tenis/${suggestion.shoeId} `}>
                      <div className="shoes">
                        <img src={suggestion.image} alt="" />
                        <p>
                          {splitShoesName(shoesList.model).shoesName}
                          {splitShoesName(shoesList.model).variation}
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
          </>
        )}
      </Container>
    </div>
  );
};
