const sql = require("./db.js");

// 생성자
const Course = function(course) {
    this.course_title = course.course_title;
}

// course 등록
Course.create = (newCourse, result) => {
    sql.query("INSERT INTO course SET ?", newCourse, (err, res) => {
        if (err) {
            console.log("err : ", err);
            result(err, null);
            return;
        }
        console.log("Created course: ", { id: res.insertId, ...newCourse });
        result(null, { id: res.insertId, ...newCourse });
    });
};

// user_id로 course 조회
Course.findByUserId = (userId, result) => {
    sql.query("SELECT * FROM course WHERE user_id=?", userId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found course: ", res);
        result(null, res);
        return;
      }

      // 결과가 없을 시
      result({ kind: "not_found" }, null);
    });
}

// course_id로 course 조회
Course.findByCourseId = (courseId, result) => {
    sql.query("SELECT * FROM course WHERE course_id=?", courseId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found course: ", res);
        result(null, res);
        return;
      }

      // 결과가 없을 시
      result({ kind: "not_found" }, null);
    });
}

// course_id로 수정
Course.updateByCourseId = (courseId, course, result) => {
    sql.query(
        "UPDATE course SET course_title=? WHERE course_id=?", 
        [course.course_title, courseId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.affectedRows == 0) {
              // id 결과가 없을 시
              result({ kind: "not_found" }, null);
              return;
            }

            console.log("update course: ", { id: courseId, ...course });
            result(null, { id: courseId, ...course });
        }
    );
}

// course_id로 삭제
Course.remove = (id, result) => {
    sql.query("DELETE FROM course WHERE course_id=?", id, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        if (res.affectedRows == 0) {
          // id 결과가 없을 시
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("deleted course with id:", id);
        result(null, res);
    })
}



function checkedError(err, result) {
    if (err) {
        console.log("err : ", err);
        result(err, null);
        return;
    }
}

module.exports = Course;
