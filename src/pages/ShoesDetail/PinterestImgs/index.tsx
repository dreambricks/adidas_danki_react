import { Container } from "./styles";
import AdidasBlack from "../../../assets/imgs/icons/adidas_black.png";
import Pinterest from "../../../assets/imgs/icons/pinterest.png";
import GoBack from "../../../assets/imgs/icons/go-back.png";
import { useEffect } from "react";

interface PinterestImgsProps {
  prevSlide: () => void;
  pinterest: string[];
  shoeName: string;
}

export const PinterestImgs = ({
  prevSlide,
  pinterest,
  shoeName,
}: PinterestImgsProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <div className="header-slide">
        <div className="swipe">
          <img src={Pinterest} alt="" />

          <p>
            looks com o <span>{shoeName}</span>
          </p>
        </div>

        <img src={AdidasBlack} alt="" />
      </div>

      <div className="pinterest-imgs">
        {pinterest.map((pin: string) => (
          <div className="pinterest-img">
            <img src={pin} alt="" />
          </div>
        ))}
      </div>

      <button className="go-back" onClick={prevSlide}>
        <img src={GoBack} alt="" />
        VOLTAR
      </button>
    </Container>
  );
};
