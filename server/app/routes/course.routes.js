module.exports = (app) => {
  const course = require("../controller/course.controller.js");

  // 코스 등록
  app.post("/api/course", course.create);

  // user_id로 코스 조회
  app.get("/api/course/:user_id", course.findCourse);

  // course_id로 코스 조회
  app.get("/api/course/:course_id", course.findOne);

  // course_id로 코스 수정
  app.put("/api/course/:course_id", course.update);

  // course_id로 코스 삭제
  app.delete("/api/course/:course_id", course.delete);
};
