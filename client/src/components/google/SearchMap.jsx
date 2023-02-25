import { InfoWindow } from "@react-google-maps/api";
import { useRecoilValue } from "recoil";
import { searchState } from "../../store/searchState";
import InfoWindowContent from "./InfoWindowContent";
import Map from "./Map";

const SearchMap = () => {

    const searchList = useRecoilValue(searchState);

    return (
        <Map markerList={searchList} type="search">
            {searchList.length > 0 && (     
                searchList.map((item, index) => (
                    <InfoWindow
                        key={item.place_id}
                        position={item.geometry.location}
                    >
                        <InfoWindowContent key={item.place_id} item={item} itemIndex={index}  />
                    </InfoWindow>
                ))
            )}
        </Map>
    )
}

export default SearchMap;