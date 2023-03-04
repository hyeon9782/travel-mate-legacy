import styled from 'styled-components';
import { useRecoilValue } from "recoil";
import { currentTabState } from "../../store/currentTabState";
import DayList from '../days/DayList';
import { courseListState } from '../../store/courseListState';
import SelectedPlacesItem from './SelectedPlacesItem';

const SelectedPlaces = () => {

    const selectedPlaces = useRecoilValue(courseListState);
    
    const currentTab = useRecoilValue(currentTabState);

    return (
        <SelectedBlock>
            <DayList />
            <SelectedPlaceBox>
                {selectedPlaces[currentTab] && selectedPlaces[currentTab].map((place, index) => {
                    return (
                        <SelectedPlacesItem item={place} key={index} itemIndex={index} />
                    )
                })}
            </SelectedPlaceBox>
        </SelectedBlock>
    )
}

const SelectedBlock = styled.div`
    margin: 0 auto;
    padding: 10px;
`

const SelectedPlaceBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    height: 700px;
`

export default SelectedPlaces;