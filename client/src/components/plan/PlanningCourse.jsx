import styled from 'styled-components';
import CourceTab from '../cource/CourceTab';
import DayList from '../days/DayList';

const PlanningCourse = () => {
    return (
        <PlanningCourseContainer>
            {/* <DayList /> */}
            <CourceTab />
        </PlanningCourseContainer>
    )
}

const PlanningCourseContainer = styled.div`
    background-color: lightblue;
    width: 70%;
    height: 700px;
`

export default PlanningCourse;