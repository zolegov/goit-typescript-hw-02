import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchPhotos = async (topic, currentPage) => {
  const response = await axios.get(
    `?client_id=BH-XSEiXX0ib12NuXFVSB2PgTq0ewo4BVn4pq7oxOZU&query=${topic}&orientation=landscape&page=${currentPage}&per_page=10`
  );
  // const response = await axios.get("photos", {
  //   params: {
  //     client_id: "BH-XSEiXX0ib12NuXFVSB2PgTq0ewo4BVn4pq7oxOZU",
  //     query: topic,
  //     orientation: "landscape",
  //     page: page,
  //     per_page: 10,
  //   },
  // });
  return response.data;
};
