import { rest } from "msw";

const city = ["서울", "강릉", "부산", "전주", "오사카", "방콩"]

const category = ["동행 모집", "여행 후기", "여행 질문"]

const user = ["김보빈", "전룡재", "박다솔", "방지영", "최재희", "김태현", "조현우", "임창우"]

let id = 100;

const postings = Array.from(Array(99).keys()).map((id) => ({
  id,
  title: `게시글 제목 ${id}`,
  city: city[Math.floor(Math.random() * city.length)],
  category: category[Math.floor(Math.random() * category.length)],
  startDate: "2022-01-25",
  endDate: "2022-02-03",
  deadline: "2022-02-01",
  userName: user[Math.floor(Math.random() * user.length)],
}));

const courseList = Array.from(Array(3).keys()).map((id) => ({
  id,
  title: `${city[Math.floor(Math.random() * city.length)]} 여행 코스 ${id}`,
  city: "강릉",
  selectPlace: [
    {
      id,
      name: "강릉 순두부",
      coord: { lat: "", lng: "" },
      days: "",
    },
  ],
  storagePlace: [
    {
      id,
      name: "순두부 젤라또",
      coord: { lat: "", lng: "" },
      days: "",
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
    const totalCount = postings.length;
    const totalPages = Math.round(totalCount / size);

    let newPostings = [];

    console.log(category);
    console.log(city);

    if (category !== null && city === null) {
      newPostings = postings.filter(
        (posting) => posting["category"] === category
      );
    } else if (category === null && city !== null) {
      newPostings = postings.filter((posting) => posting["city"] === city);
    } else if (category !== null && city !== null) {
      newPostings = postings.filter((posting) => posting["city"] === city);
    } else if (category === null && city === null) {
      newPostings = [...postings];
    }

    return res(
      ctx.status(200),
      ctx.json({
        contents: newPostings.slice(page * size, (page + 1) * size),
        pageNumber: page,
        pageSize: size,
        totalPages,
        totalCount,
        isLastPage: totalPages <= page,
        isFirstPage: page === 0,
      }),
      ctx.delay(500)
    );
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

  // 여행 코스 조회하기
  rest.get("/api/course", async (req, res, ctx) => {
    
    return res(ctx.status(200), ctx.json(courseList));
  }),

  // 여행 코스 등록하기
  rest.post("/api/course", async (req, res, ctx) => {
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
