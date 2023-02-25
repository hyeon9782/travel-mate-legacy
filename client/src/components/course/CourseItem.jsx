import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { courceListState } from '../../store/courceListState';
import { placeState } from '../../store/placeState';

const CourseItem = ({item}) => {
    const setPlaceList = useSetRecoilState(placeState);

    const [ courceList, setCourceList ] = useRecoilState(courceListState);

    const index = courceList.findIndex((listItem) => listItem === item);

    const deleteCource = (id, name, addr) => {

        console.log(`${item.name} 삭제`)
        const newCourceList = removePlaceAtIndex(courceList, index)

        setCourceList(newCourceList)

        setPlaceList((oldPlaceList) => [
            ...oldPlaceList,
            {
                id,
                name,
                addr
            }
        ])
    }
    return (
        <Item onClick={() => deleteCource(item.id, item.name, item.addr)}>
            {item ? item.name : "기본1"} 
        </Item>
    )
}

function removePlaceAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const Item = styled.div`
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



export default CourseItem;