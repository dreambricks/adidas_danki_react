import { Container } from "./styles";
import AdidasBlack from "../../../assets/imgs/icons/adidas_black.png";
import Pinterest from "../../../assets/imgs/icons/pinterest.png";
import Pinterest1 from "../../../assets/imgs/pinterest/pinterest_1.png";
import Pinterest2 from "../../../assets/imgs/pinterest/pinterest_4.png";
import GoBack from "../../../assets/imgs/icons/go-back.png";

interface PinterestImgsProps {
  prevSlide: () => void;
}

export const PinterestImgs = ({ prevSlide }: PinterestImgsProps) => {
  return (
    <Container>
      <div className="header-slide">
        <div className="swipe">
          <img src={Pinterest} alt="" />

          <p>
            looks com o <span>samba og w</span>
          </p>
        </div>

        <img src={AdidasBlack} alt="" />
      </div>

      <div className="pinterest-imgs">
        <div className="pinterest-img">
          <img src={Pinterest1} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>

        <div className="pinterest-img">
          <img src={Pinterest2} alt="" />
        </div>
      </div>

      <button className="go-back" onClick={prevSlide}>
        <img src={GoBack} alt="" />
        VOLTAR
      </button>
    </Container>
  );
};
