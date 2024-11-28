import { Container } from "./styles";

interface ShoesProps {
  img: string;
  shoesName: string;
  id: number;
  big: boolean;
}

export const Shoes = ({ img, shoesName, id, big = false }: ShoesProps) => {
  return (
    <Container to={`/listar-tenis/${id}`} big={big}>
      <img src={img} alt="" />
      <div className="shoe-container">
        <div className="shoes-name">
          <p>{shoesName}</p>
        </div>
      </div>
    </Container>
  );
};
