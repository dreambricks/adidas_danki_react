import { API } from "./root";

export const fetchShoes = async () => {
  const response = await API.get("/shoes-with-images");

  return response.data;
};

export const fetchShoesDetails = async (code: string) => {
  const response = await API.get(`/shoe-details?id=${code}`);

  return response.data;
};
