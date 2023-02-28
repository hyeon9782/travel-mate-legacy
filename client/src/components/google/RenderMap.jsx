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

// -33.86969151376161, 151.20789706561482
// -33.896875101086955, 151.18635356262402
// -33.87173854711706, 151.20795294698576
// -33.86272054515335, 151.2094070656604

// const directionsServiceOptions = {
//   destination: "Sydney, Australia",
//   origin: "Melbourne, Australia",
//   travelMode: "TRANSIT"
// };

const destinations = [
  { address: '서울특별시 종로구 종로 1', lat: 37.572036, lng: 126.976939 },
  { address: '서울특별시 용산구 이태원로 192', lat: 37.534537, lng: 126.993041 },
  { address: '서울특별시 강남구 삼성로 212', lat: 37.508929, lng: 127.063008 }
];

// const directionsServiceOptions = {
//   destination: {lat: -33.86272054515335,  lng: 151.2094070656604},
//   origin: {lat: -33.86969151376161,  lng: 151.20789706561482},
//   travelMode: "TRANSIT"
// };

const directionsServiceOptions = {
  origin: destinations[0],
  destination: destinations[destinations.length - 1],
  travelMode: "TRANSIT"
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