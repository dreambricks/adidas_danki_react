import { useEffect, useState } from "react";
import { MainContent } from "./MainContent";
import { PinterestImgs } from "./PinterestImgs";
import { Container } from "./styles";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router";

export const ShoesDetail = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const navigate = useNavigate();

  const onSwipeNextSlide = () => setActiveSlide(2);

  const onSwipePrevSlide = () => setActiveSlide(1);

  useEffect(() => {
    const clerTimer = setTimeout(() => {
      navigate("/");
    }, 45000);

    return () => {
      clearTimeout(clerTimer);
    };
  }, []);

  return (
    <Container>
      <TransitionGroup className="slide-group">
        <CSSTransition
          timeout={{ enter: 500, exit: 500 }}
          key={activeSlide}
          classNames="slide"
        >
          {activeSlide === 1 ? (
            <div>
              <MainContent onSwipe={onSwipeNextSlide} />
            </div>
          ) : (
            <div>
              <PinterestImgs prevSlide={onSwipePrevSlide} />
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};
