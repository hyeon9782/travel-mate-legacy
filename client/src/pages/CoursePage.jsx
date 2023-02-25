import styled from 'styled-components';
import MapSearch from '../components/google/MapSearch';
import CourseList from '../components/course/CourseList';
import PlaceList from '../components/place/PlaceList';
import SearchMap from '../components/google/SearchMap';
import CourseMap from '../components/google/CourseMap';

const CoursePage = () => {
    return (
        <CoursePageBlock>
            <GoogleMapSection>
                <MapSearch />
                <SearchMap />
                <CourseMap />
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