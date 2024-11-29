import { Container, ContainerNoLink } from "./styles";

interface ShoesProps {
  img: string;
  shoesName: string;
  big?: boolean;
  variation: string;
  code?: string;
}

export const Shoes = ({
  img,
  shoesName,
  big = false,
  variation,
  code,
}: ShoesProps) => {
  return code ? (
    <Container to={`/listar-tenis/${code}`} big={big}>
      <img src={img} alt="" />
      <div className="shoe-container">
        <div className="shoes-name">
          <p>
            <strong>{shoesName} </strong>
            {variation}
          </p>
        </div>
      </div>
    </Container>
  ) : (
    <ContainerNoLink big={big}>
      <img src={img} alt="" />
      <div className="shoe-container">
        <div className="shoes-name">
          <p>
            <strong>{shoesName} </strong>
            {variation}
          </p>
        </div>
      </div>
    </ContainerNoLink>
  );
};
