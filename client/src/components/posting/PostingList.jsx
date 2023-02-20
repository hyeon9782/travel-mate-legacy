import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPosting } from '../../apis/posting';
import PostingItem from './PostingItem';

const PostingList = () => {

    const bulletins = [
        {
            id: 0,
            title: "동행 구합니다.",
            category: "동행 모집",
            area: ["부산"],
            deadlineDate: "2023-01-22",
            startDate: "2023-02-01",
            endDate: "2023-02-05",
            userName: "푸린이",
            profile: "https://media.istockphoto.com/id/1368262606/ko/%EC%82%AC%EC%A7%84/%EC%96%B4%EB%91%A1%EA%B3%A0-%ED%8F%AD%ED%92%8D%EC%9A%B0%EA%B0%80-%EB%AA%B0%EC%95%84%EC%B9%98%EB%8A%94-%EC%A0%80%EB%85%81-%EB%8F%99%EC%95%88-%ED%82%A4%EA%B0%80-%ED%81%B0-%EA%B0%95%EB%A0%A5%ED%95%9C-%ED%8C%8C%EB%8F%84%EA%B0%80-%EA%B9%A8%EC%A7%80%EA%B3%A0-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.jpg?b=1&s=170667a&w=0&k=20&c=6odGE1fy_kfznxk2TaWlXYGCGx0m68PmxBApq3sHYKs=",
        },
        {
            id: 1,
            title: "부산 여행 후기",
            category: "여행 후기",
            area: ["부산"],
            deadlineDate: "2023-01-22",
            startDate: "2023-02-01",
            endDate: "2023-02-05",
            userName: "푸린이 1",
            profile: "https://media.istockphoto.com/id/1441418762/ko/%EC%82%AC%EC%A7%84/%EB%9D%BC%EB%B2%A4%EB%8D%94-%EB%B0%AD%EC%9D%B4-%EA%BD%83%EC%9D%84-%EB%8B%AB%EC%8A%B5%EB%8B%88%EB%8B%A4.jpg?b=1&s=170667a&w=0&k=20&c=eG33dSZD_zdC8KS1vQm6eA4q7O0nYCxTOzQ1MsDDf0w=",
        },
        {
            id: 2,
            title: "부산 맛집 추천해주세요!",
            category: "여행 질문",
            area: ["부산"],
            deadlineDate: "2023-01-22",
            startDate: "2023-02-01",
            endDate: "2023-02-05",
            userName: "푸린이 2",
            profile: "https://media.istockphoto.com/id/1317323736/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4-%EB%B0%A9%ED%96%A5%EC%9C%BC%EB%A1%9C-%ED%95%98%EB%8A%98%EB%A1%9C-%EB%B0%94%EB%9D%BC%EB%B3%B4%EB%8A%94-%EA%B2%BD%EC%B9%98.jpg?b=1&s=170667a&w=0&k=20&c=niclLhe_0S_aDpO5AF-Hkm97Pwjyg9D9Z9kpmv2rfWo=",
        },
        {
            id: 3,
            title: "오사카 동행 구해요!",
            category: "동행 모집",
            area: ["오사카"],
            deadlineDate: "2023-01-22",
            startDate: "2023-02-01",
            endDate: "2023-02-05",
            userName: "푸린이 3",
            profile: "https://media.istockphoto.com/id/1353429720/ko/%EC%82%AC%EC%A7%84/%EB%B3%B4%EA%B2%94-%EC%A3%BC%EB%A6%BD%EA%B3%B5%EC%9B%90-%EC%A1%B0%EC%A7%80%EC%95%84-%EA%B0%80%EC%9D%84%EC%97%90-%EB%AF%B8%EA%B5%AD.jpg?b=1&s=170667a&w=0&k=20&c=kGDkB9w36RKy7F6PrYlCYZVF2cxmCr3bwtPOmZei3kA=",
        },
    ]

    const tabs = ["동행 모집", "여행 후기", "여행 질문"]

    const [testList, setTestList] = useState();

    // useEffect(() => {
    //     getData()
    // },[])

    const getData = async () => {
        console.log("들어옴")
        setTestList(await fetchPosting())
        console.log("함수 실행 후")
    }
    

    return (
        <PostingListBlock>
            <PostingTab>
                {tabs.map((item , index) => <div key={index} >{item}</div>)}
            </PostingTab>
            <PostingListBox>
                {bulletins.map(bulletin => <PostingItem key={bulletin.id} item={bulletin} />)}
            </PostingListBox>
        </PostingListBlock>
    )
}

const PostingListBlock = styled.div`
    box-sizing: border-box;
    
`

const PostingListBox = styled.div`
    display: flex;
`

const PostingTab = styled.div`
    font-size: 1.7rem;
    display: flex;
    margin-bottom: 10px;

    div {
        padding: 10px;
    }
`

export default PostingList;