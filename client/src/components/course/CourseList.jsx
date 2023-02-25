import { useRecoilState, useRecoilValue } from "recoil";
import { courseListState } from "../../store/courseListState";
import CourceItem from "./CourseItem";
import styled from 'styled-components';
import { useState } from "react";
import DayList from "../days/DayList";
import { currentTabState } from "../../store/currentTabState";

const CourseList = () => {

    const [courceList, setCourceList] = useRecoilState(courseListState)

    const currentTab = useRecoilValue(currentTabState);

    return (
        <CourceListBlock>
            <DayList />
            <CourseListBox>
                {courceList[currentTab] && courceList[currentTab].map((cource, index) => {
                    return <CourceItem item={cource} key={index} itemIndex={index}/>
                })}
            </CourseListBox>
        </CourceListBlock>
    )
}

const CourceListBlock = styled.div`
    margin: 0 auto;
`

const CourseListBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const CourseTabItem = styled.div`
    
`


export default CourseList;