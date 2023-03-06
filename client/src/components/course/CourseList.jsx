import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import styled from 'styled-components';
import useFetchCourse from '../../hooks/useFetchCourse';
import Loading from '../common/Loading';
import CourseItem from './CourseItem';

const CourseList = () => {
    const userId = 1;

    const { data, isFetching } = useFetchCourse({ id: userId, category: "userId" })

    const [ courses, setCourses ] = useState([])

    useEffect(() => {
        if (data && data.data.contents) {
            setCourses(data.data.contents);
        }
    },[data])

    const momoizedCourses = useMemo(() => courses, [courses]);
    
    return (
        <CourseListBlock>
            {momoizedCourses.map((course, index) => <CourseItem key={index} item={course}/>)}
            {isFetching && <Loading />}
            {!data && !isFetching && <div>No Data</div>}
        </CourseListBlock>
    )
}

const CourseListBlock = styled.div`
    display: flex;
    padding: 10px;
`



export default CourseList;