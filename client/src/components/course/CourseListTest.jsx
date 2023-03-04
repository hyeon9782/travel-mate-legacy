import { useRecoilState, useRecoilValue } from "recoil";
import { courseListState } from "../../store/courseListState";
import CourceItem from "./CourseItemTest";
import Move from "./Move";
import styled from 'styled-components';
import DayList from "../days/DayList";
import { currentTabState } from "../../store/currentTabState";

const CourseListTest = () => {

    const [courceList, setCourceList] = useRecoilState(courseListState)

    const currentTab = useRecoilValue(currentTabState);

    return (
        <CourceListBlock>
            <DayList />
            <CourseListBox>
                {courceList[currentTab] && courceList[currentTab].map((cource, index) => {
                    return (
                        <CourceItem item={cource} key={index} itemIndex={index}/>
                    )
                })}
            </CourseListBox>
        </CourceListBlock>
    )
}

const CourceListBlock = styled.div`
    margin: 0 auto;
    padding: 10px;
`

const CourseListBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    height: 700px;
`



export default CourseListTest;