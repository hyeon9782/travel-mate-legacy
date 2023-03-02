import { rest } from "msw";

const city = ["서울", "강릉", "부산", "전주", "오사카", "방콩"]

const category = ["동행 모집", "여행 후기", "여행 질문"]

const user = ["김보빈", "전룡재", "박다솔", "방지영", "최재희", "김태현", "조현우", "임창우"]

const postings = Array.from(Array(100).keys()).map((id) => ({
  id,
  title: `게시글 제목 ${id}`,
  city: city[Math.floor(Math.random() * city.length)],
  category: category[Math.floor(Math.random() * category.length)],
  startDate: "2022-01-25",
  endDate: "2022-02-03",
  deadline: "2022-02-01",
  userName: user[Math.floor(Math.random() * user.length)],
}));

export const handlers = [
  // 무한 스크롤 api
  rest.get("/api/posting", async (req, res, ctx) => {
    const { searchParams } = req.url;
    const size = Number(searchParams.get("size"));
    const page = Number(searchParams.get("page"));
    const category = searchParams.get("category");
    const city = searchParams.get("city");
    const totalCount = postings.length;
    const totalPages = Math.round(totalCount / size);

    let newPostings = [];

    console.log(category)
    console.log(city)

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
];
