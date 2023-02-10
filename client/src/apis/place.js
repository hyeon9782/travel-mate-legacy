import { instance } from "./index";

const getPlace = () => {
    return instance.get("/api/place");
}

export { getPlace }