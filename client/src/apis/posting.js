import { instance } from "./index";

const fetchPosting = (category, city) => {
  return instance.get(`/api/posting?keyword=${category}&city=${city}`);
};

const registerPosting = () => {
  return instance.post(`/api/posting/:id`);
};

const modifyPosting = () => {
  return instance.patch(`/api/posting/:id`);
}

const deletePostring = () => {
  return instance.delete(`/api/posting/:id`);
}

export { fetchPosting, registerPosting, modifyPosting, deletePostring };
