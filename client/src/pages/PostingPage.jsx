import Container from "../components/common/Container";
import styled from 'styled-components';
import UserBox from "../components/user/UserBox";
import Back from "../components/common/Back";

const PostingPage = () => {
    return (
        <Container>
            <PostingBlock>
                <Back />
                <PostingTitle>
                    부산 여행 같이갈 친구 구해요!
                </PostingTitle>
                <UserSection>
                    <UserBox />
                    <span>ㅣ2023.02.10</span>
                </UserSection>
                <PostingInfo>

                </PostingInfo>
                <PostingContent>

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
`

const UserSection = styled.div`
    
`

const PostingInfo = styled.div`
    
`

const PostingContent = styled.div`
    
`

export default PostingPage;