import styled from 'styled-components';


const PlaceItem = ({ placeName, placeAddr }) => {

    function addMarker(placeName, placeNo) {
        console.log(`${placeNo}번째 목적지 ${placeName}`);
    }

    return (
        <Wrap onClick={addMarker}>
            {placeName}
        </Wrap>
    )
}

const Wrap = styled.div`
    padding: 10px;
    background-color: lightgray;
    margin: 10px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`


export default PlaceItem;