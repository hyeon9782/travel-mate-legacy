from typing import Union
from fastapi import FastAPI

app = FastAPI()

class User():
    user_id: str
    user_pw: str

# root
@app.get("/")
async def read_root():
    return {"Hello": "World"}

# 네이버 맵 저장 목록 동기화
@app.get("/api/naver_map")
async def naver_map(user_id: str, user_pw: str):

    from scraping import naver_map

    store_list = naver_map.get_store_list()

    print(store_list)

    return store_list

