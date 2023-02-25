import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styled from 'styled-components';

const Map = ({ markerList, type, children }) => {

    let position = { lat: 33.772, lng: -117.214 };

    const options = { closeBoxURL: '', enableEventPropagation: true };

    return (
        <Wrapper>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
                <GoogleMap zoom={14} center={type === "search" ? (markerList.length > 0 ? markerList[0].geometry.location : position) : (markerList.length > 0 ? markerList[0].coord : position) } mapContainerClassName="map-container">
                    {children}
                </GoogleMap>
            </LoadScript>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .map-container {
        width: 100%;
        height: 550px;
  }
`

const WindowContent = styled.div`
    
`

export default Map;