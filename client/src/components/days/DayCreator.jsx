import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { dayListState } from '../../store/dayListState';
import CourceItem from '../cource/CourceItem';

const DayCreator = () => {

    const setDayList = useSetRecoilState(dayListState);

    const addItem = () => {
        setDayList((oldDayList) => [
            ...oldDayList,
            {
                day: getDay(),
                content: <CourceItem />
            }
        ]);
    }
    return (
        <Plus onClick={addItem}>추가</Plus>
    )
}


const Plus = styled.div`
    /* font-size: 60px; */
    background: lightcyan;
    display: flex;
    justify-content: center;
    align-items: center;
`


let day = 1;
function getDay() {
    return ++day;
}

export default DayCreator;