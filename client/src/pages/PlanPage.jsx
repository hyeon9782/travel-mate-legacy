import styled from 'styled-components';
import MapSearch from '../components/google/MapSearch';
import PlaceList from '../components/place/PlaceList';
import SearchMap from '../components/google/SearchMap';
import CourseMap from '../components/google/CourseMap';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { placeState } from '../store/placeState';
import { currentTabState } from '../store/currentTabState';
import { courseListState } from '../store/courseListState';
import { registerCourse } from '../apis/course';
import RenderMap from '../components/google/RenderMap';
import SelectedPlaces from '../components/place/SelectedPlaces';

const PlanPage = () => {

    const [placeList, setPlaceList] = useRecoilState(placeState);

    const currentTab = useSetRecoilState(currentTabState);

    const [courseList, setCourseList] = useRecoilState(courseListState);

    const reset = () => {
        // 여행 일차 삭제 시 해당 일차에 있던 코스 리스트 제거
        const newCourseList = removeItemAtIndex(courseList, currentTab);
        setCourseList(newCourseList);

        // 여행 일차 삭제 시 해당 일차에 있던 장소 리스트 다시 추가
        setPlaceList((oldPlaceList) => [
            ...oldPlaceList,
            ...courseList[currentTab]
        ])
    }

    const save = async () => {
        const res = await registerCourse(courseList, placeList);
        console.log(res);
    }

    return (
        <PlanPageBlock>
            <GoogleMapSection>
                <MapSearch />
                
                <SearchMap />
                {/* <CourseMap /> */}
                {/* <RenderMap /> */}
            </GoogleMapSection>
            <CourseListSection>
                <PlaceList />
                <SelectedPlaces />
                <BtnSection>
                    <button className='btn reset' onClick={reset}>초기화</button>
                    <button className='btn traffic'>교통추가</button>
                    <button className='btn save' onClick={save}>저장하기</button>
                </BtnSection>
            </CourseListSection>
        </PlanPageBlock>
    )
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const PlanPageBlock = styled.div`
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

const BtnSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .btn {
        padding: 10px 0;
        width: 30%;
        font-weight: bold;
        font-size: 1.5em;
    }
    

    .reset {
        background: lightgray;
        border: 1px solid lightgray;
    }

    .traffic {
        background: gray;
        border: 1px solid gray;
    }

    .save {
        background: black;
        border: 1px solid black;
        color: white;
    }
`

export default PlanPage;