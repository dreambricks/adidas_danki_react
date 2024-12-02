import { useNavigate } from "react-router";

export const useCTA = () => {
  const navigate = useNavigate();

  const bacToInit = () => {
    const clerTimer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearTimeout(clerTimer);
    };
  };

  return {
    bacToInit,
  };
};
