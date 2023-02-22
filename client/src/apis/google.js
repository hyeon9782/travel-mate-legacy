import { instance } from "./index";

const searchGoogleMap = (keyword) => {
  return instance.get(`/api/search?keyword=${keyword}`);
};

export { searchGoogleMap };
