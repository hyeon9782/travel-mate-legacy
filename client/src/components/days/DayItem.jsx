import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { dayListState } from '../../store/dayListState';

const DayItem = ({item}) => {

    const [dayList, setDayList] = useRecoilState(dayListState);
    
    const index = dayList.findIndex((listItem) => listItem === item);

    const deleteItem = () => {

        if (window.confirm(`${item.day}일차 여행 일정을 삭제하시겠습니까?`)) {
            const newList = removeItemAtIndex(dayList, index);
            setDayList(newList);
        } else {
            console.log("dd");
        }
        
    }

    const changeTab = () => {
        
    }

    return (
        <Day onDoubleClick={deleteItem} onClick={changeTab}>{item}일차</Day>
    )
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}



const Day = styled.div`
    background: lightgray;
    font-size: 28px;
    padding: 5px;
`


export default DayItem;