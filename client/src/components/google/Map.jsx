import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { searchState } from "../../store/searchState";
import InfoWindowContent from "./InfoWindowContent";

const GoogleMapMarker = () => {

    const searchList = useRecoilState(searchState);

    

    const locations = [
        {
            placeName: "평양 냉면",
            position: {lat: 12.356, lng: 354.352} 
        }
    ]

    useEffect(() => {
        console.log(searchList[0])
        console.log(searchList[0].length > 0)
    }, [])

    const position = { lat: 33.772, lng: -117.214 }

    const options = { closeBoxURL: '', enableEventPropagation: true };

    // const onLoad = infoBox => {
    // console.log('infoBox: ', infoBox)
    // };

    const divStyle = {
        background: `white`,
        border: `1px solid #ccc`,
        padding: 15
        }
    /* {!Array.isArray(mapLocation) ? (
          <Marker position={mapLocation} />
        ) : (
          mapLocation.map((location, index) => (
            <Marker position={location} key={index} onClick={(e) => mapviewMarkerClickHandler(e)} />
          ))
        )} */


    return (
        <Wrapper>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
                <GoogleMap zoom={10} center={searchList[0].length > 0 ? searchList[0][0].geometry.location : position } mapContainerClassName="map-container">
                    {searchList[0].length > 0 && (     
                        searchList[0].map(item => (
                            <InfoWindow
                                key={item.place_id}
                                position={item.geometry.location}
                            >
                                <InfoWindowContent key={item.place_id} item={item} />
                            </InfoWindow>
                        ))
                    )}
                    
                    {/* <Marker position={position}/> */}
                </GoogleMap>
            </LoadScript>
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