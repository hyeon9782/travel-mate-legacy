import styled from 'styled-components';
import Container from '../components/common/Container';
import CourseList from '../components/course/CourseList';
import PostingList from '../components/posting/PostingList';

const MyPostingPage = () => {


    return (
        <Container>
            <PostingSection>
                <div className='posting_head'>내 포스팅 목록</div>
                <div className='posting_list'>
                    <PostingList userId="1"/>
                </div>
            </PostingSection>
            <CourseSection>
                <div className='course_head'>내 여행 코스 목록</div>
                <div className='course_list'>
                    <CourseList /> 
                </div>
            </CourseSection>
        </Container>
    )
}

const PostingSection = styled.div`
    .posting_head {
        font-size: 2em;
        font-weight: bold;
        padding: 10px;
    }

    .posting_list {

    }
`

const CourseSection = styled.div`
    .course_head {
        font-size: 2em;
        font-weight: bold;
        padding: 10px;
    }
`

export default MyPostingPage;