import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const center = {
  lat: -3.745,
  lng: -38.523
};

const containerStyle = {
  width: '100%',
  height: '100%'
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* {!Array.isArray(mapLocation) ? (
          <Marker position={mapLocation} />
        ) : (
          mapLocation.map((location, index) => (
            <Marker position={location} key={index} onClick={(e) => mapviewMarkerClickHandler(e)} />
          ))
        )} */}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);