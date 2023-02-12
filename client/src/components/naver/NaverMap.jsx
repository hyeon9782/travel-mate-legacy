import { useEffect, useState } from "react";

const NaverMap = () => {

    const [myLocation, setMyLocation] = useState('');

    // 현재 위치 추적
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }

        function success(position) {
            setMyLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        }

         // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
        function error() {
            setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
        }
    }, [])

    return (
        <div></div>
    )
}

export default NaverMap;