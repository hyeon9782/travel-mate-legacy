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

@app.get("/api/naver_route")
def get_optimal_route(start, goal, waypoints, option ) :
    # waypoint는 최대 5개까지 입력 가능, 
    # 구분자로 |(pipe char) 사용하면 됨(x,y 좌표값으로 넣을 것)
    # waypoint 옵션을 다수 사용할 경우, 아래 함수 포맷을 바꿔서 사용 
    client_id = ''
    client_secret = '-- 발급받은 client secret 입력 --' 
    # start=/goal=/(waypoint=)/(option=) 순으로 request parameter 지정
    url = f"https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving? \
    start={start[0]},{start[1]}&goal={goal[0]},{goal[1]}\
    &waypoints={waypoints[0]},{waypoints[1]}&option={option}"
    request = urllib.request.Request(url)
    request.add_header('X-NCP-APIGW-API-KEY-ID', client_id)
    request.add_header('X-NCP-APIGW-API-KEY', client_secret)
    
    response = urllib.request.urlopen(request)
    res = response.getcode()
    
    if (res == 200) :
        response_body = response.read().decode('utf-8')
        return json.loads(response_body)
            
    else :
        print('ERROR')
        
# get_optimal_route(start, goal, option=option)
