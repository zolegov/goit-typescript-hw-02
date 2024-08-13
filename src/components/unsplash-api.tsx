// unsplash-api.ts
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

interface FetchPhotosResponse {
  results: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
    likes: number;
    description: string;
  }[];
}

export const fetchPhotos = async (
  topic: string,
  currentPage: number
): Promise<FetchPhotosResponse> => {
  const response = await axios.get<FetchPhotosResponse>(
    `?client_id=BH-XSEiXX0ib12NuXFVSB2PgTq0ewo4BVn4pq7oxOZU&query=${topic}&orientation=landscape&page=${currentPage}&per_page=10`
  );

  return response.data;
};
