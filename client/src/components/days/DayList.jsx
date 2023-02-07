import styled from 'styled-components';
import DayCreator from './DayCreator';
import DayItem from './DayItem';

const DayList = ({list}) => {

    // const dayList = useRecoilValue(dayListState);

    return (
        <DayWrap>
            {list.map((dayItem) => {
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