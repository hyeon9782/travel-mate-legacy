import axios from "axios";

const naverRoute = () => {
  return axios.get(
    "https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving",
    {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_NAVER_API_CLIENT_ID,
        "X-NCP-APIGW-API-KEY": process.env.REACT_APP_NAVER_API_CLIENT_SECRET,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

const naverRoute1 = () => {
  return axios.get("http://localhost:4000/api/naver_route");
};

export { naverRoute, naverRoute1 };
