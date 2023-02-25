import styled from 'styled-components';
import MapSearch from '../components/google/MapSearch';
import Map from '../components/google/Map';
import CourseList from '../components/course/CourseList';
import PlaceList from '../components/place/PlaceList';

const CoursePage = () => {
    return (
        <CoursePageBlock>
            <GoogleMapSection>
                <MapSearch />
                <Map />
            </GoogleMapSection>
            <CourseListSection>
                <PlaceList />
                <CourseList />
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
    
`

export default CoursePage;