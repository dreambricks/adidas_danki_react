import { Container } from "./styles";
import AdidasBlack from "../../assets/imgs/icons/adidas_black.png";

import { Shoes } from "../../components/Shoes";
import { shoeslist } from "./fakeData";

export const ListShoes = () => {
  return (
    <Container>
      <img src={AdidasBlack} alt="" className="logo" />

      <div className="shoes-list">
        {shoeslist.map((shoes) => (
          <Shoes
            img={shoes.img}
            shoesName={shoes.shoesName}
            id={shoes.id}
            key={shoes.id}
          />
        ))}
      </div>
    </Container>
  );
};
