import { useState } from "react";
import { MainContent } from "./MainContent";
import { PinterestImgs } from "./PinterestImgs";
import { Container } from "./styles";

export const ShoesDetail = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  const onSwipeNextSlide = () => setActiveSlide(2);

  const onSwipePrevSlide = () => setActiveSlide(1);

  return (
    <Container>
      {activeSlide === 1 ? (
        <div className="mySlides active fade">
          <MainContent onSwipe={onSwipeNextSlide} />
        </div>
      ) : (
        <div className="mySlides active fade">
          <PinterestImgs prevSlide={onSwipePrevSlide} />
        </div>
      )}
    </Container>
  );
};
