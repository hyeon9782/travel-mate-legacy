const Posting = require("../models/posting.model");

// 새 객체 생성
exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    console.log(req.body);

    const posting = new Posting({
      posting_title: req.body.posting_title,
      posting_category: req.body.posting_category,
      posting_content: req.body.posting_content,
    });

    console.log("controller")
    console.log(posting);

    Posting.create(posting, (err, data) => {
        if (err) {
            res.status(500).send({
              message:
                err.message || "Some error occured while creating th Posting.",
            });
        } else res.send("Success")
    })
}

// 전체 조회
exports.findAll = (req, res) => {
    Posting.getAll((err, data) => {
        if (err) {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving Posting.",
            });
        } else res.send(data);
    })
}

// id로 조회
exports.findOne = (req, res) => {
    Posting.findByID(req.params.postingId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Posting with id ${req.params.postingId}`
                })
            } else {
                res.status(500).send({
                    message: `Error retrieving Customer with id  ${req.params.postingId}`,
                });
            }
        } else res.send(data);
    })
}

// id로 수정
exports.update = (req, res) => {
    Posting.updateByID(req.params.postingId, new Posting(req.body),(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Posting with id ${req.params.postingId}.`,
                });
            } else {
                res.status(500).send({
                  message:
                    "Error updating Posting with id " + req.params.postingId,
                });
            }
        } else res.send(data);
    });
}

// 1d로 삭제
exports.delete = (req, res) => {
    Posting.remove(req.params.postingId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found Posting with id ${req.params.postingId}.`,
                });
            } else {
                res.status(500).send({
                  message: `Could not delete Customer with id ${req.params.postingId}`,
                });
            }
        } else res.send({
            message: "Posting was deleted successfully!"
        })
        
    });
}

