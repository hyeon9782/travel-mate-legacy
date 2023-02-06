import { atom } from "recoil";

export const courceListState = atom({
  key: "courceListState",
  default: [
    {
      id: 1,
      name: '만동제과'
    },
  ],
});
