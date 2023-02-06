import { atom } from "recoil";
import CourceList from "../components/cource/CourceList";

export const courceTabState = atom({
  key: "courceTabState",
  default: [
    {
      id: 1,
      name: "1번",
      content: <CourceList />,
    },
    {
      id: 1,
      name: "2번",
      content: <CourceList />,
    },
  ],
});
