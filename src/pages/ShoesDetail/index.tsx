import { useEffect, useState } from "react";
import { MainContent } from "./MainContent";
import { PinterestImgs } from "./PinterestImgs";
import { Container } from "./styles";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate, useParams } from "react-router";
import { fetchShoesDetails } from "../../services/apis";
import { Loader } from "../../components/Loader";

interface Image {
  code: string;
  image: string;
  model: string;
  shoeId: string;
}

export interface ShoesList {
  code: string;
  images: string[];
  model: string;
  description: string;
  title: string;
  colors: Image[];
  suggestion: Image[];
  pinterest: string[];
  _id: string;
}

export const ShoesDetail = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [shoesList, setShoesList] = useState<null | ShoesList>(null);
  const [loading, setLoading] = useState(false);
  const { id: idParam } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const onSwipeNextSlide = () => setActiveSlide(2);

  const onSwipePrevSlide = () => setActiveSlide(1);

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
    const clerTimer = setTimeout(() => {
      navigate("/");
    }, 45000);

    return () => {
      clearTimeout(clerTimer);
    };
  }, []);

  useEffect(() => {
    if (idParam) getShoesDetails(idParam);
  }, [idParam]);

  return (
    <Container>
      {loading && <Loader />}

      {!loading && shoesList?.code && (
        <TransitionGroup className="slide-group">
          <CSSTransition
            timeout={{ enter: 500, exit: 500 }}
            key={activeSlide}
            classNames="slide"
          >
            {activeSlide === 1 ? (
              <div>
                <MainContent
                  onSwipe={onSwipeNextSlide}
                  shoesDetails={shoesList}
                />
              </div>
            ) : (
              <div>
                <PinterestImgs
                  prevSlide={onSwipePrevSlide}
                  pinterest={shoesList.pinterest}
                />
              </div>
            )}
          </CSSTransition>
        </TransitionGroup>
      )}
    </Container>
  );
};
