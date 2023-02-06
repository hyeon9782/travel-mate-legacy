import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { courceListState } from '../../store/courceListState';


const PlaceItem = ({ item }) => {

    const setCourceList = useSetRecoilState(courceListState);

    // 카카오 맵에 마커를 추가하는 함수
    function addMarker(id, name) {
        console.log(`${id}번째 목적지 ${name}`);
    }

    // 선택한 장소를 여행 코스에 추가하는 함수
    function addCource(name, addr, id) {



        setCourceList((oldCourceList) => [
            ...oldCourceList,
            {
                id,
                name,
                addr,
            }
        ])
    } 

    return (
        <Wrap onClick={addMarker()}>
            {item.name}
        </Wrap>
    )
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