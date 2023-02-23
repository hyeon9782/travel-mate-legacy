import { GoogleMap, InfoBoxF, InfoWindow, LoadScriptNext, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import styled from 'styled-components';

const GoogleMapMarker = () => {



    const locations = [
        {
            placeName: "",
            position: {lat: 12.356, lng: 354.352} 
        }
    ]

    const position = { lat: 33.772, lng: -117.214 }

    const options = { closeBoxURL: '', enableEventPropagation: true };

    const onLoad = infoBox => {
    console.log('infoBox: ', infoBox)
    };

    const divStyle = {
        background: `white`,
        border: `1px solid #ccc`,
        padding: 15
        }


    return (
        <Wrapper>
            <LoadScriptNext googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
                <GoogleMap zoom={18} center={position} mapContainerClassName="map-container">
                    <InfoWindow
                    onLoad={onLoad}
                    position={position}
                    >
                    <div style={divStyle}>
                        <h1>InfoWindow</h1>
                    </div>
                    </InfoWindow>
                    <Marker position={position}/>
                </GoogleMap>
            </LoadScriptNext>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .map-container {
        width: 100%;
        height: 800px;
  }
`

const WindowContent = styled.div`
    
`

export default GoogleMapMarker;