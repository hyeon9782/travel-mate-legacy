import styled from 'styled-components';
import axios from "axios";
import { useEffect, useState } from 'react';
import PlaceItem from './PlaceItem';

const PlaceList = () => {
    const [ placeList, setPlaceList ] = useState([]);

    const fetchData = async () => {
        const res = await axios.get('http://localhost:4000/api/place');
        console.log(res);
        console.log("place");
        console.log(res.data.place);
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
                return <PlaceItem placeName={place.name} placeAddr={place.addr} key={place.id} />
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