import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { courseListState } from '../../store/courseListState';
import { courseTabState } from '../../store/courseTabState';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DayCreater = () => {

    const setCourseTab = useSetRecoilState(courseTabState);

    const setCourseList = useSetRecoilState(courseListState);

    const location = useLocation();

    const [page, setPage] = useState(false);

    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname === '/course') setPage(true);

    }, [])

    const addDays = () => {
        setCourseTab((oldDays) => [
            ...oldDays,
            getDay()
        ]);
        setCourseList((oldCourse) => [
            ...oldCourse,
            []
        ])
    }

    return (
        <DayCreaterBlock onClick={addDays}>
            <div className={page ? "hidden" : ""}>+</div>
        </DayCreaterBlock>
    )
}

let day = 1;
function getDay() {
    return ++day;
}


const DayCreaterBlock = styled.div`
    background: black;
    color: white;
    font-size: 2rem;
    padding: 0px 6px 4px 6px;

    .hidden {
        display: none;
    }
`

export default DayCreater;