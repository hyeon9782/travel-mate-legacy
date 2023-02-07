/*global kakao*/ 
import styled from 'styled-components';
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil';
import { courceListState } from '../../store/courceListState';

const Map = () => {

    const courceList = useRecoilValue(courceListState);


    async function mapBasic() {
        const positions = await addrToCoord(courceList)
        console.log(positions)
        console.log(positions.length)
    }


    // async function mapBasic(){

    //     let positions = await addrToCoord(courceList);
    //     console.log("dd")
    //     console.log(positions)
    //     console.log(positions[0])
    //     console.log(positions.length)
        

    //     await kakao.maps.load(() => {    

    //         const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    //         const mapOption = {
    //             center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    //             level: 3, // 지도의 확대 레벨
    //         };


    //         const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    //         console.log(positions.length)
    //         console.log(courceList.length)

    //         if (courceList.length === positions.length) {
    //             for (let i = 0; i < courceList.length; i++) {

    //             // 마커를 생성합니다
    //             var marker = new kakao.maps.Marker({
    //                 map: map, // 마커를 표시할 지도
    //                 position: positions[i].addr // 마커의 위치
    //             });

    //             // 마커에 표시할 인포윈도우를 생성합니다 
    //             var infowindow = new kakao.maps.InfoWindow({
    //                 content: positions[i].name // 인포윈도우에 표시할 내용
    //             });
    //             console.log("쿵")

    //             console.log(marker)

    //             // 마커가 지도 위에 표시되도록 설정합니다
    //             marker.setMap(map);

    //             infowindow.open(map, marker);

    //             }
                
    //         }
            
    //     })
    // }

    useEffect(()=>{
        mapBasic()
    }, [courceList])

    return (
        <MapWrap>
            <div id="map" style={{width:"100%", height:"100%"}}></div> 
        </MapWrap>
    )
}

// function addrToCoord(list) {
//     let positions = []

//     kakao.maps.load(() => {

//         // 주소-좌표 변환 객체를 생성합니다
//         const geocoder = new kakao.maps.services.Geocoder();
    
//         list.map((item) => {
//             return (
//                 geocoder.addressSearch(item.addr, (result, status) => {
//                     positions.push({
//                         name: item.name,
//                         addr: new kakao.maps.LatLng(result[0].y, result[0].x)
//                     })
//                 })
//             )
//         })
//     })

    
//     return positions;
// }

function addrToCoord(list) {
    let positions = []

    kakao.maps.load(() => {

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();
    
        return new Promise((resolve, reject) => {
            list.map((item, index, array) => {
                geocoder.addressSearch(item.addr, (result, status) => {
                    positions.push({
                        name: item.name,
                        addr: new kakao.maps.LatLng(result[0].y, result[0].x)
                    })
    
                    if (index === array.length - 1) {
                        resolve(positions);
                    }
                })
            })
        })
    })

}


const MapWrap = styled.div`
    width: 30%;
`

export default Map;