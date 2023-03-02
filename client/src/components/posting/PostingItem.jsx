import styled from 'styled-components';
import UserBox from '../user/UserBox';
const PostingItem = ({ item }) => {
    return (
        <PostingItemBlock>
            <ul>
                <li>{item.category}</li>
                <li>마감일ㅣ{item.deadline}</li>
                <li>{item.title}</li>
                <li>여행 지역ㅣ{item.city}</li>
                <li>여행 기간ㅣ{item.startDate} ~ {item.endDate}</li>
            </ul>
            <PostingItemFooter>
                <UserBox userName={item.userName} profile={item.profile} key={item.id} />
            </PostingItemFooter>
        </PostingItemBlock>
    )
}

const PostingItemBlock = styled.div`
    font-size: 1rem;
    border: 1px solid lightgray;
    width: 20%;
    border-radius: 15px;
    margin: 10px;

    li {
        padding: 10px;
    }
`

const PostingItemFooter = styled.div`
    
`




export default PostingItem;