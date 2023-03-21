import { rest } from "msw";
import axios from 'axios';

const city = ["서울", "강릉", "부산", "전주", "오사카", "방콩"]

const category = ["동행 모집", "여행 후기", "여행 질문"]

const user = ["김보빈", "전룡재", "박다솔", "방지영", "최재희", "김태현", "조현우", "임창우"]

let id = 100;

const postings = Array.from(Array(32).keys()).map((postingId) => ({
  postingId,
  title: `게시글 제목 ${postingId}`,
  city: city[Math.floor(Math.random() * city.length)],
  category: category[Math.floor(Math.random() * category.length)],
  startDate: "2022-01-25",
  endDate: "2022-02-03",
  deadline: "2022-02-01",
  userName: user[Math.floor(Math.random() * user.length)],
  userId: Math.floor(Math.random() * 3),
  contents: `<h1>게시글 내용 ${postingId}</h1>`,
}));

const courseList = Array.from(Array(3).keys()).map((id) => ({
  courseId: id,
  userId: 1,
  title: `${city[Math.floor(Math.random() * city.length)]} 여행 코스 ${id}`,
  city: "강릉",
  selectedPlaces: [
    [
      {
        placId: 0,
        name: "강릉 순두부 1",
        coord: { lat: "", lng: "" },
      },
      {
        placId: 1,
        name: "강릉 순두부 2",
        coord: { lat: "", lng: "" },
      },
      {
        placId: 3,
        name: "강릉 순두부 3",
        coord: { lat: "", lng: "" },
      },
      {
        placId: 4,
        name: "강릉 순두부 4",
        coord: { lat: "", lng: "" },
      },
      {
        placId: 5,
        name: "강릉 순두부 5",
        coord: { lat: "", lng: "" },
      },
      {
        placId: 6,
        name: "강릉 순두부 6",
        coord: { lat: "", lng: "" },
      },
    ],
  ],
  storagePlaces: [
    {
      placeId: 9,
      name: "순두부 젤라또",
      coord: { lat: "", lng: "" },
    },
  ],
})); 

function getId() {
  return id++;
}

export const handlers = [
  // 무한 스크롤 api 포스팅 가져오기
  rest.get("/api/posting", async (req, res, ctx) => {
    const { searchParams } = req.url;
    const size = Number(searchParams.get("size"));
    const page = Number(searchParams.get("page"));
    const category = searchParams.get("category");
    const city = searchParams.get("city");
    const userId = searchParams.get("userId");
    const postingId = searchParams.get("postingId");
    const totalCount = postings.length;
    const totalPages = Math.round(totalCount / size);

    let newPostings = [];

    console.log(category);
    console.log(city);
    console.log(userId);

    if (postingId !== null) {
      newPostings = postings.filter(
        (posting) => posting["postingId"] === Number(postingId)
      );
    } else if (userId !== null) {
      newPostings = postings.filter(
        (posting) => posting["userId"] === Number(userId)
      );
    } else if (category !== null && city === null) {
      newPostings = postings.filter(
        (posting) => posting["category"] === category
      );
    } else if (category === null && city !== null) {
      newPostings = postings.filter((posting) => posting["city"] === city);
    } else if (category !== null && city !== null) {
      newPostings = postings.filter(
        (posting) =>
          posting["city"] === city && posting["category"] === category
      );
    } else if (category === null && city === null) {
      newPostings = [...postings];
    }

    return res(
      ctx.status(200),
      ctx.json({
        contents: newPostings.reverse().slice(page * size, (page + 1) * size),
        pageNumber: page,
        pageSize: size,
        totalPages,
        totalCount,
        isLastPage: totalPages <= page,
        isFirstPage: page === 0,
      }),
      ctx.delay(100)
    );
  }),

  // // 포스팅 조회하기 (userId)
  // rest.get("/api/posting", async (req, res, ctx) => {
  //   return;
  // }),

  // 구글 맵 검색
  rest.get("/api/search", async (req, res, ctx) => {
    const keyword = "강릉 중국집";
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${keyword}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    const result = await axios.get(url);
    console.log(result.data.results);
    const test = result.data.results;
    return res(ctx.status(200), ctx.json(test));
  }),

  // 포스팅 등록하기
  rest.post("/api/posting", async (req, res, ctx) => {
    const posting = req.body;

    posting["id"] = getId();

    postings.push(posting);

    console.log(postings[postings.length - 1]);

    return res(ctx.status(201), ctx.json({ message: "Success" }));
  }),

  // 포스팅 수정하기
  rest.put("/api/posting", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Success" }));
  }),

  // 포스팅 삭제하기
  rest.delete("/api/posting", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Success" }));
  }),

  // // 여행 코스 조회하기 (userId)
  // rest.get("/api/course", async (req, res, ctx) => {
  //   const { searchParams } = req.url;
  //   const userId = Number(searchParams.get("userId"));
  //   const selectCourse = courseList.filter(
  //     (course) => course["userId"] === userId
  //   );

  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       contents: selectCourse,
  //     }),
  //   );
  // }),

  // 여행 코스 조회하기 (courseId)
  rest.get("/api/course", async (req, res, ctx) => {
    const { searchParams } = req.url;
    console.log(req);

    const category = searchParams.get("category");
    
    const courseId = Number(searchParams.get("courseId"));

    const userId = Number(searchParams.get("userId"));

    let id = 0;

    if (category === 'userId') {
      id = userId;
    } else if (category === 'courseId') {
      id = courseId;
    }
  
    const selectCourse = courseList.filter((course) => course[category] === id);
    return res(
      ctx.status(200),
      ctx.json({
        contents: selectCourse,
      })
    );
  }),

  // 여행 코스 등록하기
  rest.post("/api/course", async (req, res, ctx) => {
    
    courseList.filter((course) => course);
    return res(ctx.status(200), ctx.json({ message: "Success" }));
  }),

  // 여행 코스 수정하기
  rest.put("/api/course", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json());
  }),

  // 여행 코스 삭제하기
  rest.delete("/api/course", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json());
  }),
];
