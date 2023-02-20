import { instance } from "./index";

const fetchPosting = (category, city) => {
  return instance.get(`/api/posting?keyword=${category}&city=${city}`);
};

export { fetchPosting };
