import { Container } from "./styles";
import AdidasLogo from "../../assets/imgs/icons/adidas_white.png";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const videoList = [
  "src/assets/videos/vid1.mp4",
  "src/assets/videos/vid2.mp4",
  "src/assets/videos/vid3.mp4",
  "src/assets/videos/vid4.mp4",
  "src/assets/videos/vid5.mp4",
  "src/assets/videos/vid6.mp4",
  "src/assets/videos/vid7.mp4",
  "src/assets/videos/vid8.mp4",
  "src/assets/videos/vid9.mp4"
];

export const Home = () => {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const redirectInit = () => navigate("/bem-vindo");

  const handleVideoEnd = () => {
    console.log(`O vídeo ${videoList[currentVideoIndex]} terminou.`);

    setIsVideoVisible(false);
    setTimeout(() => {
      setIsVideoVisible(true);
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
    }, 10000);
  };

  useEffect(() => {
    if (!isVideoVisible) {
      console.log("Vídeo oculto por 10 segundos.");
    } else {
      console.log(`Tocando agora: ${videoList[currentVideoIndex]}`);
    }
  }, [currentVideoIndex, isVideoVisible]);

  return (
    <Container onClick={redirectInit}>
      {isVideoVisible && (
        <video
          autoPlay
          muted
          loop={false}
          onEnded={handleVideoEnd}
          key={currentVideoIndex}
        >
          <source src={videoList[currentVideoIndex]} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      )}

      <img src={AdidasLogo} alt="Adidas Logo" />

      <div className="start">
        <button className="start">CLIQUE AQUI</button>
      </div>

      <p className="try">PARA INICIAR SUA EXPERIÊNCIA ADIDAS</p>
    </Container>
  );
};
