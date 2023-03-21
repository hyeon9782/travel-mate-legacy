import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Back from '../components/common/Back';
import Container from '../components/common/Container';
import SelectedPlaces from '../components/place/SelectedPlaces'

const CoursePage = () => {

    const params = useParams();

    const { courseId } = params
    
    return (
        <Container>
            <Back />
            <CourseTitle>부산 여행</CourseTitle>
            <PlaceListBlock>
                <SelectedPlaces courseId={courseId}/>
            </PlaceListBlock>
        </Container>
    )
}

const CourseTitle = styled.div`
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    padding: 30px;
`

const PlaceListBlock = styled.div`
    
`



export default CoursePage;