const express = require("express");
const app = express();
const cors = require('cors');
const request = require("request");
const axios = require("axios");
const port = 4000;

app.use(cors())

const myStore = [
  {
    store_title: "강릉",
    place: [
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
      {
        name: "엄용백 돼지국밥",
        addr: "부산 수영구 수영로680번길 39",
        id: 6,
      },
      {
        name: "선창횟집",
        addr: "부산 해운대구 달맞이길62번길 67",
        id: 7,
      },
      {
        name: "에이치어스",
        addr: "부산 해운대구 청사포로 135",
        id: 8,
      },
      {
        name: "다대포해수욕장",
        addr: "부산 사하구 다대동",
        id: 9,
      },
      {
        name: "해운대밀면",
        addr: "부산광역시 해운대구 중동2로10번길 21",
        id: 10,
      },
    ],
    store_id: 1,
  },
  {
    store_title: "부산",
    place: [
      {
        name: "엄용백 돼지국밥",
        addr: "부산 수영구 수영로680번길 39",
        id: 6,
      },
      {
        name: "선창횟집",
        addr: "부산 해운대구 달맞이길62번길 67",
        id: 7,
      },
      {
        name: "에이치어스",
        addr: "부산 해운대구 청사포로 135",
        id: 8,
      },
      {
        name: "다대포해수욕장",
        addr: "부산 사하구 다대동",
        id: 9,
      },
      {
        name: "해운대밀면",
        addr: "부산광역시 해운대구 중동2로10번길 21",
        id: 10,
      },
    ],
    store_id: 2,
  },
];

// const myPlace = [
//   {
    
//   }
// ]


app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 나의 저장소들을 가져온다.
app.get("/api/store", (req, res) => {
    res.json(myStore);
});

// 선택한 저장소의 장소를 가져온다.
app.get("/api/place/", (req, res) => {
   
  res.json(myStore[0]);
});



app.get("/api/naver_route", async (req, res) => {

  console.log("안녕");

  const start = "37.6412,127.0276";
  const goal = "37.5813,127.0463";
  const option = "trafast";

  const result = await axios.get(
    `https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving?start=${start}$goal=${goal}&option=${option}`,
    {
      
    }
  );
  console.log("잘가");

  // console.log(result);
  console.log(result.data);
  res.json();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});