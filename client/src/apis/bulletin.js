import { instance } from "./index";

const fetchBulletin = () => {
  return instance.get("/api/bulletin");
};

export { fetchBulletin };
