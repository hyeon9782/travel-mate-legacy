/*global kakao*/ 
import React, { useEffect } from 'react'
import styled from "styled-components";

const Location = () => {


  function mapMultipleMarker() {
    kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      // 주소-좌표 변환 객체를 생성합니다
      const geocoder = new kakao.maps.services.Geocoder();

      const positions = [
        {
          name: "만동제과",
          addr: "강원 강릉시 금성로 6",
          id: 1,
        },
        {
          name: "중화짬뽕빵",
          addr: "강원 강릉시 금성로13번길 17",
          id: 2,
        },
        {
          name: "회포차 THE30",
          addr: "강원 강를시 연곡면 영진길 30",
          id: 3,
        },
        {
          name: "꾸옥 GGUOK",
          addr: "강원 강릉시 창해로 378",
          id: 4,
        },
        {
          name: "바이크스토리",
          addr: "강원 강릉시 경포로 489-6",
          id: 5,
        },
      ];

      // // 주소로 좌표를 검색합니다
      // geocoder.addressSearch(placeAddr, function (result, status) {
      //   // 정상적으로 검색이 완료됐으면
      //   if (status === kakao.maps.services.Status.OK) {
      //     var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      //     // 결과값으로 받은 위치를 마커로 표시합니다
      //     var marker = new kakao.maps.Marker({
      //       map: map,
      //       position: coords,
      //     });

      //     // 인포윈도우로 장소에 대한 설명을 표시합니다
      //     var infowindow = new kakao.maps.InfoWindow({
      //       content: `<div style="width:150px;text-align:center;padding:6px 0;">${placeName}</div>`,
      //     });
      //     infowindow.open(map, marker);

      //     // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      //     map.setCenter(coords);
      //   }
      // });

      // // 마커를 표시할 위치와 title 객체 배열입니다
      // const positions = [
      //   {
      //     title: "카카오",
      //     latlng: new kakao.maps.LatLng(33.450705, 126.570677),
      //   },
      //   {
      //     title: "생태연못",
      //     latlng: new kakao.maps.LatLng(33.450936, 126.569477),
      //   },
      //   {
      //     title: "텃밭",
      //     latlng: new kakao.maps.LatLng(33.450879, 126.56994),
      //   },
      //   {
      //     title: "근린공원",
      //     latlng: new kakao.maps.LatLng(33.451393, 126.570738),
      //   },
      // ];

      // 마커 이미지의 이미지 주소입니다
      const imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      for (let i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        let imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
      }
    })
  }

  function mapBasic(){

    kakao.maps.load(() => {

      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
  
      const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  
      // 마커가 표시될 위치입니다
      const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
  
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
  
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    })
  }

  function mapAddr(placeAddr, placeName){
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(placeAddr, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${placeName}</div>`,
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });    
  }

  function mapMarker() {
    kakao.maps.load(() => {
      const mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

      const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      // 마커를 표시할 위치와 title 객체 배열입니다
      const positions = [
        {
          title: "카카오",
          latlng: new kakao.maps.LatLng(33.450705, 126.570677),
        },
        {
          title: "생태연못",
          latlng: new kakao.maps.LatLng(33.450936, 126.569477),
        },
        {
          title: "텃밭",
          latlng: new kakao.maps.LatLng(33.450879, 126.56994),
        },
        {
          title: "근린공원",
          latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        },
      ];

      // 마커 이미지의 이미지 주소입니다
      const imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      for (let i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        let imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
      }
    })
  }

  useEffect(()=>{
    // kakaoMap();
    // mapAddr("강원 강릉시 금성로13번길 17", "중화짬뽕빵");
    // mapMarker();
    mapMultipleMarker();
  }, [])


    return (
        <MapWrap>
          <div id="map" style={{width:"100%", height:"100%"}}></div> 
        </MapWrap>
    )
}

const MapWrap = styled.div`
  width: 30%;
`



export default Location;