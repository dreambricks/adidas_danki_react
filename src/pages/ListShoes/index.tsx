import { Container } from "./styles";
import AdidasBlack from "../../assets/imgs/icons/adidas_black.png";

import { Shoes } from "../../components/Shoes";
import { useEffect, useState } from "react";
import { fetchShoes } from "../../services/apis";
import { Loader } from "../../components/Loader";
import { useCTA } from "../../hook/CTA";
import NoImage from "../../assets/imgs/no-img.jpeg";

interface ShoesList {
  code: string;
  images: string[];
  model: string;
  variation: string;
}

export const ListShoes = () => {
  const [shoesList, setShoesList] = useState<ShoesList[] | null>(null);
  const [loading, setLoading] = useState(false);
  const { bacToInit } = useCTA();

  const getShoes = async () => {
    try {
      setLoading(true);
      const response = await fetchShoes();

      const formattedReponse = response.map((shoe: ShoesList) => {
        const splittedShoesName = shoe.model.split(" ");

        const shoesName = splittedShoesName.shift();
        const variation = splittedShoesName.join().replaceAll(",", " ") || "";

        return {
          ...shoe,
          model: shoesName,
          variation,
        };
      });

      setShoesList(formattedReponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getShoes();
    bacToInit();
  }, []);

  return (
    <Container>
      <img src={AdidasBlack} alt="" className="logo" />

      {loading && <Loader />}

      {!loading && shoesList?.length && (
        <div className="shoes-list">
          {shoesList?.map((shoes) => (
            <Shoes
              shoesName={shoes.model}
              variation={shoes.variation}
              img={shoes.images[0] || NoImage}
              key={shoes.code}
              code={shoes.code}
            />
          ))}
        </div>
      )}
    </Container>
  );
};
