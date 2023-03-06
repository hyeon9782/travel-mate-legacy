import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const CourseItem = ({ item }) => {
    const movePage = useNavigate();
    const onClick = () => {
        movePage(`/course/${item.courseId}`);
    }
    return (
        <CourseItemBlock onClick={onClick}>
            <div className='title'>{item.title}</div>
        </CourseItemBlock>
    )
}

const CourseItemBlock = styled.div`
    width: 200px;
    height: 250px;
    border: 1px solid black;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
        font-size: 1.5em;
        font-weight: bold;
    }
`

export default CourseItem;