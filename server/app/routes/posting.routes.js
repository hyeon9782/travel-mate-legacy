module.exports = app => {
  const posting = require("../controller/posting.controller.js");

  // 튜플 생성
  app.post("/api/posting", posting.create);

  // 전체 조회
  app.get("/api/posting", posting.findAll);

  // id로 조회
  app.get("/api/posting/:postingId", posting.findOne);

  // id로 수정
  app.put("/api/posting/:postingId", posting.update);

  // id로 삭제
  app.delete("/api/posting/:postingId", posting.delete);
}