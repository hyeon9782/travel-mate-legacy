import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { dayListState } from '../../store/dayListState';
import DayCreator from './DayCreator';
import DayItem from './DayItem';

const DayList = () => {

    const dayList = useRecoilValue(dayListState);

    return (
        <DayWrap>
            {dayList.map((dayItem) => {
                return <DayItem key={dayItem.day} item={dayItem} />
            })}
            <DayCreator />
        </DayWrap>
    )
}

const DayWrap = styled.div`
    display: flex;
`




export default DayList;