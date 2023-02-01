from typing import Union
from fastapi import FastAPI

app = FastAPI()

# root
@app.get("/")
async def read_root():
    return {"Hello": "World"}

# 네이버 맵 저장 목록 동기화
@app.get("/api/naver_map")
async def naver_mapp():
    return {"Naver":"Map"}
