import { atom, selector } from "recoil";
import CourceList from "../components/cource/CourceList";
import { courseListState } from "./courceListState";

export const courseTabState = selector({
  key: "courceTabState",
  get: ({ get }) => {
    const courseList = get(courseListState);

    const courseList1 = [
      {
        name: 312,
        content: <CourceList item={courseList} />,
      },
    ];


    return courseList1;
  }
});
