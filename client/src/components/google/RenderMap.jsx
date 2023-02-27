import { useState, useCallback } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 37.5665,
  lng: 126.9780
};

const directionsServiceOptions = {
  destination: "Sydney, Australia",
  origin: "Melbourne, Australia",
  travelMode: "DRIVING"
};

const RenderMap = () => {
  const [response, setResponse] = useState(null);

  const directionsCallback = useCallback((res) => {
    if (res !== null) {
        console.log(res);
      setResponse(res);
    }
  }, []);

  const mapOptions = {
    zoomControl: true,
    fullscreenControl: true,
    streetViewControl: true,
    mapTypeControl: true,
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} options={mapOptions}>
        {response && <DirectionsRenderer options={{ directions: response }} />}
        <DirectionsService options={directionsServiceOptions} callback={directionsCallback} />
      </GoogleMap>
    </LoadScript>
  );
};

export default RenderMap;