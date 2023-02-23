import styled from 'styled-components';
import Marker from '../components/google/Marker';

const CoursePage = () => {
    return (
        <CoursePageBlock>
            <GoogleMapSection>
                <Marker />
            </GoogleMapSection>
            <CourseListSection>

            </CourseListSection>
        </CoursePageBlock>
    )
}

const CoursePageBlock = styled.div`
    display: flex;
`

const GoogleMapSection = styled.div`
    width: 50%;
    height: 94.5vh;
    /* background: red; */
`

const CourseListSection = styled.div`
    width: 50%;
    /* height: 100vh; */
    background: blue;
`

export default CoursePage;