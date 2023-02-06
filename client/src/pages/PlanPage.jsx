import styled from 'styled-components';
import PlaceList from "../components/place/PlaceList";
import PlanningCourse from '../components/plan/PlanningCourse';
import Location from '../components/kakao/Location';

const PlanPage = () => {
    return (
        <PlanContainer>
            <PlaceList />
            <div style={{"display": "flex", "width":"100%", "height":"100%"}}>
                <PlanningCourse />
                <Location />
            </div>
            <ButtonBox />
        </PlanContainer>
    )
}

const PlanContainer = styled.div`
    margin-top: 80px;
    height:100%;
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-around;
`

export default PlanPage;