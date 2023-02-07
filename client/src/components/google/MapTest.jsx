import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const center = {
  lat: 37.54,
  lng: 127.04,
};

const MapTest = ({ mapLocation, containerStyle, mapviewMarkerClickHandler }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {!Array.isArray(mapLocation) ? (
          <Marker position={mapLocation} />
        ) : (
          mapLocation.map((location, index) => (
            <Marker position={location} key={index} onClick={(e) => mapviewMarkerClickHandler(e)} />
          ))
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapTest);