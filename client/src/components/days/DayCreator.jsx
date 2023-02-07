import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { courceTabState } from '../../store/courceTabState';
import CourceItem from '../cource/CourceItem';
import CourceList from '../cource/CourceList';

const DayCreator = () => {

    const setCourceTab= useSetRecoilState(courceTabState);

    const addItem = () => {
        setCourceTab((oldDayList) => [
            ...oldDayList,
            {
                day: getDay(),
                content: <CourceList />
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