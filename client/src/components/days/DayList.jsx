import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { courseTabState } from '../../store/courseTabState';
import DayCreater from './DayCreater';
import DayItem from './DayItem';

const DayList = () => {

    const days = useRecoilValue(courseTabState);

    return (
        <DayListBlock>
            {days.map((day, index) => <DayItem key={index} item={day} />)}
            <DayCreater />
        </DayListBlock>
    )
}

const DayListBlock = styled.div`
    display: flex;
`

export default DayList;