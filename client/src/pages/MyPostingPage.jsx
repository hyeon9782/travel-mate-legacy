import styled from 'styled-components';
import Container from '../components/common/Container';

const MyPostingPage = () => {
    return (
        <Container>
            <PostingSection>
                <div className='posting_head'>내 포스팅 목록</div>
                <div className='posting_list'>

                </div>
            </PostingSection>
            <CourseSection>
                <div className='course_head'>내 여행 코스 목록</div>
                <div className='course_list'>

                </div>
            </CourseSection>
        </Container>
    )
}

const PostingSection = styled.div`
    .posting_head {

    }

    .posting_list {

    }
`

const CourseSection = styled.div`
    
`

export default MyPostingPage;