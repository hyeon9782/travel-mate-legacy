import { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { courseListState } from '../../store/courseListState';
import { courseTabState } from '../../store/courseTabState';
import { currentTabState } from '../../store/currentTabState';
import { placeState } from '../../store/placeState';

const DayItem = ({ item }) => {

    const [currentTab, setCurrentTab] = useRecoilState(currentTabState);

    const [days, setDays] = useRecoilState(courseTabState);

    const [courseList, setCourseList] = useRecoilState(courseListState);

    const setPlaceList = useSetRecoilState(placeState);

    const index = days.findIndex((day) => day === item);

    const deleteDay = () => {
        if (window.confirm(`${index + 1}일차 여행 일정을 삭제하시겠습니까?`)) {
            const newList = removeItemAtIndex(days, index);
            setDays(newList);
            
            // 여행 일차 삭제 시 해당 일차에 있던 코스 리스트 제거
            const newCourseList = removeItemAtIndex(courseList, currentTab);
            setCourseList(newCourseList);

            // 여행 일차 삭제 시 해당 일차에 있던 장소 리스트 다시 추가
            setPlaceList((oldPlaceList) => [
                ...oldPlaceList,
                ...courseList[currentTab]
            ])
        }
    }

    const selectDay = () => {
        setCurrentTab(index)
    }

    return (    
        <DayItemBlock onDoubleClick={deleteDay} onClick={selectDay}>
            <div className={currentTab === index ? "select" : "day"}>
                {index + 1}일차
            </div>
        </DayItemBlock>
    )
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const DayItemBlock = styled.div`
    
    font-size: 1rem;
    font-weight: bold;
    

    .select {
        background: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .day {
        background: lightgray;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
`


export default DayItem;