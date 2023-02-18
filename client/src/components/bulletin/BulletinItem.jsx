import styled from 'styled-components';
import UserBox from '../user/UserBox';
const BulletinItem = ({ item }) => {
    return (
        <BulletinItemBlock>
            <ul>
                <li>{item.category}</li>
                <li>마감일ㅣ{item.deadlineDate}</li>
                <li>{item.title}</li>
                <li>여행 지역ㅣ{item.area}</li>
                <li>여행 기간ㅣ{item.startDate} ~ {item.endDate}</li>
            </ul>
            <BulletinItemFooter>
                <UserBox userName={item.userName} profile={item.profile} key={item.id} />
            </BulletinItemFooter>
        </BulletinItemBlock>
    )
}

const BulletinItemBlock = styled.div`
    font-size: 1rem;
    border: 1px solid lightgray;
    width: 25%;
    border-radius: 15px;
    margin: 10px;

    li {
        padding: 10px;
    }
`

const BulletinItemFooter = styled.div`
    
`




export default BulletinItem;