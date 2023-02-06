import styled from 'styled-components';
import axios from "axios";
import { useEffect } from 'react';
import PlaceItem from './PlaceItem';
import { useRecoilState } from 'recoil';
import { placeState } from '../../store/placeState';

const PlaceList = () => {
    const [ placeList, setPlaceList ] = useRecoilState(placeState);

    const fetchData = async () => {
        const res = await axios.get('http://localhost:4000/api/place');
        
        setPlaceList(res.data.place);
    }

    function addMarker(name, sequence) {
        console.log(`${sequence}번째 목적지 ${name}`);
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <PlaceContainer>
            {placeList.map((place) => {
                return <PlaceItem item={place} key={place.id} />
            })}
        </PlaceContainer>  
    )
}

const PlaceContainer = styled.div`
    display: flex;
    height: 150px;
    background: lightcoral;
`

export default PlaceList;