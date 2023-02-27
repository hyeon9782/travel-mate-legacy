const sql = require("./db.js");

// 생성자
const Course = function(course, place) {
    // this.course_title = course.course_title;
    // this.course_city = course.course_city;
    // this.user_id = course.user_id;
    // this.place_name = place.place_name;
    // this.place_coord = place.place_coord;
    // this.place_status = place.place_status;
    // this.course_days = place.course_days;
    // this.course_id = place.course_id;
    this.courseList = course;
    this.placeList = place;
}

const Place = function(place) {
  this.place_name = place.place_name;
  this.place_coord = place.place_coord;
  this.place_status = place.place_status; 
  this.course_days = place.course_days;
  this.course_id = place.course_id;
}

// course 등록
Course.create = (courseList, newPlace, result) => {
  console.log(courseList);
  console.log(courseList["corseList"]);

    let places = [];

    courseList["corseList"].map((course) => {
      return course.map((place) => {
        places.push(place);
      });
    });

    console.log(places);

    

    // const courseInfo = newCourse;

    // const courseInsert = "INSERT INTO course SET ? ;";
    // const sql1s = sql.format(courseInsert, );
    // const placeInsert = "INSERT INTO place SET ? ;";


    // const placeQuery = "insert into place set ? ;";
    // const placeValues = [
    //   [],
    // ]

    sql.query(placeQuery, (err, res) => {
      if (err) {
        console.log("err : ", err);
        result(err, null);
        return;
      }
      console.log("Created course: ", { id: res.insertId, ...newCourse });
      result(null, { id: res.insertId, ...newCourse });
    });

    // sql.query(courseInsert, placeInsert, (err, res) => {
    //   if (err) {
    //     console.log("err : ", err);
    //     result(err, null);
    //     return;
    //   }
    //   console.log("Created course: ", { id: res.insertId, ...newCourse });
    //   result(null, { id: res.insertId, ...newCourse });
    // });
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

module.exports = Course, Place;
