import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { courseListState } from '../../store/courseListState';
import { courseTabState } from '../../store/courseTabState';

const DayCreater = () => {

    const setCourseTab = useSetRecoilState(courseTabState);

    const setCourseList = useSetRecoilState(courseListState);

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

    return <DayCreaterBlock onClick={addDays}>+</DayCreaterBlock>
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
`

export default DayCreater;