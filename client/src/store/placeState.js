import { atom } from "recoil";

export const placeState = atom({
  key: "placeState",
  default: [
    {
        id: 1
    }
  ],
});
