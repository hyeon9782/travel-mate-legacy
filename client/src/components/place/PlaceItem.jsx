import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { courseListState } from '../../store/courseListState';
import { currentTabState } from '../../store/currentTabState';
import { placeState } from '../../store/placeState';


const PlaceItem = ({ item }) => {

    const [ placeList, setPlaceList ] = useRecoilState(placeState);
    
    const index = placeList.findIndex((listItem) => listItem === item);

    const [courseList, setCourseList] = useRecoilState(courseListState);

    const currentTab = useRecoilValue(currentTabState);

    // 카카오 맵에 마커를 추가하는 함수
    function addMarker(id, name) {
        console.log(`${id}번째 목적지 ${name}`);
    }

    // 선택한 장소를 여행 코스에 추가하는 함수
    function addCource(name, coord, id) {
        console.log(`${item.name} 클릭`);
        
        let currentCourseList = []
        if (courseList[currentTab]) {
            currentCourseList = [...courseList[currentTab]];
        }
        
        currentCourseList.push({
            id,
            name,
            coord
        });

        const newCourseList = [...courseList];

        newCourseList[currentTab] = currentCourseList;

        console.log(newCourseList);


        setCourseList(newCourseList);
        
        
        // 선택한 장소 장소 리스트에서 삭제하기
        const newPlaceList = removePlaceAtIndex(placeList, index)
        setPlaceList(newPlaceList)

        
    }

    return (
        <Wrap onClick={() => addCource(item.name, item.coord, item.id)}>
            {item.name}
        </Wrap>
    )
}


function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removePlaceAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}


const Wrap = styled.div`
    padding: 10px;
    background-color: lightgray;
    margin: 10px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`


export default PlaceItem;