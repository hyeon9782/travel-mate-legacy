import { atom, selector } from "recoil";
import CourceList from "../components/cource/CourceList";
import { courceListState } from "./courceListState";

export const courceTabState = selector({
  key: "courceTabState",
  get: ({ get }) => {
    const courceList = get(courceListState);

    const courceList1 = [
      {
        name: 312,
        content: <CourceList item={courceList} />,
      },
    ];


    return courceList1;
  }
});
