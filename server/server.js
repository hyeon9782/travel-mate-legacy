const express = require("express");
const app = express();
const cors = require('cors');
const axios = require("axios");
const port = 4000;
const bodyParser = require("body-parser");
app.use(cors())
require("dotenv").config(); // 모듈 불러오기
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/api/search", async (req, res) => {
//   const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.query.keyword}&key=${process.env.NODE_ENV_GOOGLE_API_KEY}`;
//   const result = await axios.get(url);
//   console.log(result.data.results);
//   const test = result.data.results;
//   res.send(test);

// })






require("./app/routes/posting.routes.js")(app);
require("./app/routes/course.routes.js")(app); 
// 포트 넘버 설정
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});