import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from "recoil";
import { currentTabState } from "../../store/currentTabState";
import DayList from '../days/DayList';
import { courseListState } from '../../store/courseListState';
import SelectedPlacesItem from './SelectedPlacesItem';
import { useEffect } from 'react';
import useFetchCourse from '../../hooks/useFetchCourse';
import { useLocation } from 'react-router-dom';
import Loading from '../common/Loading';

const SelectedPlaces = ({ courseId }) => {

    const [selectedPlace, setSelectPlaces ] = useRecoilState(courseListState);
    
    const currentTab = useRecoilValue(currentTabState);

    const location = useLocation();

    const { data, isFetching } = useFetchCourse({ id: courseId, category: "courseId" })

    


    useEffect(() => {
        
        if (data && location.pathname === "/course") {
            setSelectPlaces(data.data.contents[0].selectedPlaces);
        }
    }, [data, location.pathname])

    useEffect(() => {
        if (!isFetching && data) {
            setSelectPlaces(data.data.contents[0].selectedPlaces);
        }
    }, [isFetching, data])

    

    // const memoizedPlaces = useMemo(() => selectedPlace, [selectedPlace]);

    return (
        <SelectedBlock>
            <DayList />
            <SelectedPlaceBox>
                {selectedPlace[currentTab] && selectedPlace[currentTab].map((place, index) => {
                    return (
                        <SelectedPlacesItem item={place} key={index} itemIndex={index} />
                    )
                })}
                {isFetching && <Loading />}
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