import { useNavigate } from "react-router";

export const useCTA = () => {
  const navigate = useNavigate();

  const bacToInit = () => {
    setTimeout(() => {
      navigate("/");
    }, 45000);
  };

  return {
    bacToInit,
  };
};
