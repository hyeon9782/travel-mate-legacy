import Container from "../components/common/Container";
import styled from 'styled-components';
import UserBox from "../components/user/UserBox";
import Back from "../components/common/Back";
import { useParams, useNavigate } from "react-router-dom";
import useFetchPosting from "../hooks/useFetchPosting";

const PostingPage = () => {
    const { postingId } = useParams();
    const navigate = useNavigate();
    const courseId = "1"
    const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useFetchPosting({ size: 8, postingId})
    console.log(data);
    const { category, city, contents, deadline, startDate, endDate, title, userName} = data.pages[0].data.contents[0]
    
    return (
        <Container>
            <PostingBlock>
                <Back />
                <PostingTitle>
                    {title}
                </PostingTitle>
                <UserSection>
                    <UserBox userName={userName} />
                    <div className="date-created">ㅣ2023.02.10</div>
                </UserSection>
                <PostingInfo>
                    <ul>
                        <li>
                            <div className="name">게시글 구분</div>
                            <div className="value">{category}</div>
                        </li>
                        <li>
                            <div className="name">모집 마감일</div>
                            <div className="value">{deadline}</div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div className="name">여행 기간</div>
                            <div className="value">{startDate} ~ {endDate}</div>
                        </li>
                        <li>
                            <div className="name">여행 지역</div>
                            <div className="value">{city}</div>
                        </li>
                    </ul>
                </PostingInfo>
                <PostingContent>
                    <div className="content-head">
                        <div className="content-title">상세 내용</div>
                        <div className="course-btn" onClick={() => {navigate(`/course/${courseId}`)}}>여행 코스</div>
                    </div>
                    <div className="contents">
                        {contents}
                    </div>
                </PostingContent>
            </PostingBlock>
        </Container>
    )
}

const PostingBlock = styled.div`
    
`

const PostingTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
`

const UserSection = styled.div`
    display: flex;
    border-bottom: 2px solid lightgray;
    padding: 10px 0;
    .date-created{
        display: flex;
        align-items: center;
    }
`

const PostingInfo = styled.div`
    font-weight: bold;
    font-size: 1.3rem;
    padding: 10px 5px;
    .name {
        padding: 5px;
    }
    .value{
        padding: 5px;
        color: gray;
    }
    ul {
        display: flex;
    }
    li {
        display: flex;
        width: 50%;
        padding: 10px 0px;
    }
`

const PostingContent = styled.div`
    .content-head{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-top: 2px solid lightgray;
        .content-title{
            font-size: 1.5rem;
            font-weight: bold;
        }
        .course-btn {
            padding: 8px 10px;
            border-radius: 5px;
            font-weight: bold;
            background: lightgray;
        }
    }
    
    .contents{
        padding: 10px;
    }
`

export default PostingPage;