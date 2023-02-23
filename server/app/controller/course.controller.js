const Course = require("../models/course.model");

// 코스 등록
exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }

    const course = new Course({
        course_title: req.body.course_title
    });

    Course.create(course, (err, data) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Some error occured while creating th Course.",
          });
        } else res.send("Success");
    })
}

// user_id로 조회
exports.findCourse = (req, res) => {
    Course.findByUserId(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found User with id ${req.params.userId}`,
              });
            } else {
              res.status(500).send({
                message: `Error retrieving User with id  ${req.params.userId}`,
              });
            }
        } else res.send(data);
    })
}

// course_id로 조회
exports.findOne = (req, res) => {
    Course.findByCourseId(req.params.courseId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Course with id ${req.params.courseId}`,
              });
            } else {
              res.status(500).send({
                message: `Error retrieving Course with id  ${req.params.courseId}`,
              });
            }
        } else res.send(data);
    })
}

// course_id로 수정
exports.update = (req, res) => {
    Course.updateByCourseId(req.params.courseId, new Course(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Course with id ${req.params.courseId}.`,
              });
            } else {
              res.status(500).send({
                message: "Error updating Course with id " + req.params.courseId,
              });
            }
        } else res.send(data);
    })

}

// course_id로 삭제
exports.delete = (req, res) => {
    Course.remove(req.params.courseId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Course with id ${req.params.courseId}.`,
              });
            } else {
              res.status(500).send({
                message: `Could not delete Course with id ${req.params.courseId}`,
              });
            }
        } else res.send({
          message: "Course was deleted successfully!",
        });
    })
}