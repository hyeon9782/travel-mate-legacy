import styled from 'styled-components';
import Days from './Days';

const PlanningCourse = () => {
    return (
        <PlanningCourseContainer>
            <Days />
            안녕하세요
        </PlanningCourseContainer>
    )
}

const PlanningCourseContainer = styled.div`
    background-color: lightblue;
    width: 70%;
    height: 700px;
`

export default PlanningCourse;