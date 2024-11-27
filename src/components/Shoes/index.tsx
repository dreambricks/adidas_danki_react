import { Container } from "./styles";

interface ShoesProps {
  img: string;
  shoesName: string;
  id: number;
}

export const Shoes = ({ img, shoesName, id }: ShoesProps) => {
  return (
    <Container to={`/listar-tenis/${id}`}>
      <img src={img} alt="" />
      <div className="shoes-name">
        <p>{shoesName}</p>
      </div>
    </Container>
  );
};
