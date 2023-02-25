import { InfoWindow } from "@react-google-maps/api";
import { useRecoilValue } from "recoil";
import { courseListState } from "../../store/courseListState";
import { currentTabState } from "../../store/currentTabState";
import InfoWindowContent from "./InfoWindowContent";
import Map from "./Map";

const CourseMap = () => {

    const courseList = useRecoilValue(courseListState);

    const currentTab = useRecoilValue(currentTabState);

    let markerList = [];

    if (courseList[currentTab]) {
        markerList = [...courseList[currentTab]]
    }

    return (
        <Map markerList={markerList} type="course">
            {markerList.length > 0 && (     
                markerList.map((item, index) => (
                    <InfoWindow
                        key={index}
                        position={item.coord}
                    >
                        <InfoWindowContent key={index} item={item} itemIndex={index}  />
                    </InfoWindow>
                ))
            )}
        </Map>
    )
}

export default CourseMap;