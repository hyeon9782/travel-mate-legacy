const sql = require("./db.js");

// 생성자
const Posting = function(posting) {
    this.posting_title = posting.posting_title;
    this.posting_category = posting.posting_category;
    this.posting_content = posting.posting_content;
}

// posting 튜플 추가
Posting.create = (newPosting, result) => {
    console.log("model");
    console.log(newPosting);
    sql.query("INSERT INTO posting SET ?", newPosting, (err, res) => {
        if (err) {
            console.log("err : ", err);
            result(err, null);
            return;
        }
        console.log("Created posting: ", {id: res.insertId, ...newPosting});
        result(null, {id: res.insertId, ...newPosting});
    });
};

// posting 전체 조회
Posting.getAll = result => {
    sql.query("SELECT * FROM posting", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("posting: ", res);
      result(null, res);
    });
};

// posting id로 조회
Posting.findByID = (postingId, result) => {
    sql.query("SELECT * FROM posting WHERE posting_id=?", postingId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found posting: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시
        result({kind: "not_found"}, null);
    })
}

// posting id로 수정
Posting.updateByID = (postingId, posting, result) => {
    sql.query(
      "UPDATE posting SET posting_title=?, posting_content=?, posting_category=? WHERE posting_id=?",
      [
        posting.posting_title,
        posting.posting_content,
        posting.posting_category,
        postingId,
      ],
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

        console.log("update posting: ", { id: postingId, ...posting });
        result(null, { id: postingId, ...posting });
      }
    );
}

// posting id로 삭제
Posting.remove = (id, result) => {
    sql.query("DELETE FROM posting WHERE posting_id=?", id, (err, res) => {
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

        console.log("deleted posting with id:", id);
        result(null, res);
    })
}

module.exports = Posting;