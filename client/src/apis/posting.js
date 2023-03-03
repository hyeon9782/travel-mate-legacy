import { instance } from "./index";

const fetchPosting = (category, city, params) => {
  return instance.get(`/api/posting`, {
    params
  });
};

const fetchPostingWithId = (postingId) => {
  return instance.get(`/api/posting/:postingId`);
}

const registerPosting = (posting) => {
  return instance.post(`/api/posting`, posting);
};

const modifyPosting = (posting) => {
  return instance.put(`/api/posting/:postingId`, posting);
};

const deletePostring = (postingId) => {
  return instance.delete(`/api/posting/:postingId`);
};

export {
  fetchPosting,
  fetchPostingWithId,
  registerPosting,
  modifyPosting,
  deletePostring,
};
